package ecommerce.Controller;

import ecommerce.Model.Cliente;
import ecommerce.Model.Endereco;
import ecommerce.Repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EnderecoController {

    @Autowired
    private EnderecoRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/endereco")
    public Endereco save(@RequestBody Endereco endereco){

        return repository.save(endereco);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/endereco/{id}")
    public ResponseEntity<List<Endereco>> findEnderecoById(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(repository.findByCliente(id)); }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/endereco/lista")
    public ResponseEntity<List<Endereco>> find(){
        return ResponseEntity.ok().body(repository.findAll());
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/endereco/{id_endereco}")
    public void deleteById(@PathVariable("id_endereco") Long idDoEndereco){
        repository.deleteById(idDoEndereco);
    }
}
