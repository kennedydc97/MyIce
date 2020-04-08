package ecommerce.Controller;

import ecommerce.Model.Contato;
import ecommerce.Repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContatoController {

    @Autowired
    ContatoRepository repository;

    @PostMapping("/contato")
    public ResponseEntity<?> enviarEmail(@RequestBody Contato contato){
        return ResponseEntity.ok().body(repository.save(contato));
    }
}
