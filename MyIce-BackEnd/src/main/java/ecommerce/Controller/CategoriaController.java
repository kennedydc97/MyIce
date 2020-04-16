package ecommerce.Controller;

import ecommerce.Model.Categoria;
import ecommerce.Model.Produto;
import ecommerce.Repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class CategoriaController {

    @Autowired
    private CategoriaRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/categoria")
    public Categoria save(@RequestBody Categoria categoria) {
        return repository.save(categoria);
    }


    @GetMapping("/categoria/{id}")
    public ResponseEntity buscarId(@PathVariable Integer id) {
        return ResponseEntity.ok().body(repository.findById(id));
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/categoria/lista")
    public ResponseEntity<List<Categoria>> find() {
        return ResponseEntity.ok().body(repository.findAll());
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/categoria/{id_categoria}")
    public void deleteById(@PathVariable("id_categoria") Integer idDaCategoria){
        repository.deleteById(idDaCategoria);
    }

    @PutMapping("/alterar-categoria")
    public ResponseEntity<?> atualizar(@RequestBody Categoria categoria) {

        Categoria categoriaEntity = repository.findById(categoria.getIdCategoria())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada"));

        if (categoria.getDescricao() != null) {
            categoriaEntity.setDescricao(categoria.getDescricao());
        }

        return ResponseEntity.ok().body(repository.save(categoriaEntity));
    }



}
