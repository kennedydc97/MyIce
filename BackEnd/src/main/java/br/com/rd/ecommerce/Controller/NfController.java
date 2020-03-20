package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.NF;
import br.com.rd.ecommerce.Repository.NfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NfController {

    @Autowired
    private NfRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create-nf")
    public NF save(@RequestBody NF product) {
        return repository.save(product);
    }

    @GetMapping("/find-nf/list")
    public List<NF> find() {
        return repository.findAll();
    }

    @GetMapping("/nf/findNfById/{id}")
    public NF findNfById(@PathVariable("id") Long id) {
        return repository.findById(id).get();
    }

    @DeleteMapping("/delete-nf/{id_nf}")
    public void deleteById(@PathVariable("id_nf") Long idOfNf) {
        repository.deleteById(idOfNf);
    }

}
