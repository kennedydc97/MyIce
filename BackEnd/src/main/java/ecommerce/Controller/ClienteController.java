package ecommerce.Controller;

import ecommerce.Model.Cliente;
import ecommerce.Model.Endereco;
import ecommerce.Repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/cliente")
    public Cliente save(@RequestBody Cliente cliente){
        return repository.save(cliente);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/cliente/{id}")
    public Cliente findClienteById(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/cliente/lista")
    public List<Cliente> find(){
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/cliente/{id_cliente}")
    public void deleteById(@PathVariable("id_cliente") Long idDoCliente){
        repository.deleteById(idDoCliente);
    }
}
