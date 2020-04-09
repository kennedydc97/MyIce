package ecommerce.Controller;

import ecommerce.Model.Cartao;
import ecommerce.Repository.CartaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class CartaoController {

    @Autowired
    private CartaoRepository cartaoRepository;


    @GetMapping("/cartoes")
    public ResponseEntity<List<Cartao>> find() {
        return ResponseEntity.ok().body(cartaoRepository.findAll());
    }

    @GetMapping("/cartao/{id}")
    public ResponseEntity<?> findById(@PathVariable("id") Long id) {
        try{
            return ResponseEntity.ok().body(cartaoRepository.findById(id).get());
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex);
        }

    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/cartoes")
    public ResponseEntity<?> save(@RequestBody Cartao cartao) {

        if(cartao == null) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Exception("Nenhum dado inserido!"));
        }
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(cartaoRepository.save(cartao));
        }catch (IllegalArgumentException ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ex);
        }catch (Exception ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex);

        }
    }



    @DeleteMapping("/cartao/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id){

        return cartaoRepository.findById(id).map((cartao)->{
            cartaoRepository.delete(cartao);
            return ResponseEntity.status(204).build();
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cartão não encontrado"));

    }

}