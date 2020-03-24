package ecommerce.Controller;

import ecommerce.Model.Fornecedor;
import ecommerce.Repository.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FornecedorController {

    @Autowired
    private FornecedorRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/fornecedor")
    public Fornecedor save(@RequestBody Fornecedor fornecedor){
        return repository.save(fornecedor);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/fornecedor/{id}")
    public Fornecedor findFornecedorById(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/fornecedor/lista")
    public List<Fornecedor> find(){
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/fornecedor/{id_fornecedor}")
    public void deleteById(@PathVariable("id_fornecedor") Long idDoFornecedor){
        repository.deleteById(idDoFornecedor);
    }
}
