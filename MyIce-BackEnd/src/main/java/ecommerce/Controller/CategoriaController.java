package ecommerce.Controller;

import ecommerce.Model.Categoria;
import ecommerce.Model.Produto;
import ecommerce.Repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoriaController {

    @Autowired
    private CategoriaRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/categoria")
    public Categoria save(@RequestBody Categoria categoria){
        return repository.save(categoria);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/categoria/{id}")
    public Categoria findCategoriaById(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/categoria/lista")
    public ResponseEntity<List<Categoria>> find() {
        return ResponseEntity.ok().body(repository.findAll());
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/categoria/{id_categoria}")
    public void deleteById(@PathVariable("id_categoria") Long idDaCategoria){
        repository.deleteById(idDaCategoria);
    }

}
