package ecommerce.Controller;

import ecommerce.Model.NF;
import ecommerce.Repository.NfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NfController {

    @Autowired
    private NfRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/nf")
    public NF save(@RequestBody NF nf){
        return repository.save(nf);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/nf/{id}")
    public NF findNFById(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/nf/lista")
    public List<NF> find(){
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/nf/{id_nf}")
    public void deleteById(@PathVariable("id_nf") Long idDoNF){
        repository.deleteById(idDoNF);
    }
}
