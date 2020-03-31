package ecommerce.Controller;

import ecommerce.Model.Cartao;
import ecommerce.Repository.CartaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartaoController {

    @Autowired
    private CartaoRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/cartao")
    public Cartao save(@RequestBody Cartao cartao){
        return repository.save(cartao);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/cartao/{id}")
    public Cartao findCartaoById(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/cartao/lista")
    public List<Cartao> find(){
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/cartao/{id_cartao}")
    public void deleteById(@PathVariable("id_cartao") Long idDoCartao){
        repository.deleteById(idDoCartao);
    }
}
