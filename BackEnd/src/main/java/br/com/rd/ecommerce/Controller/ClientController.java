package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.Client;
import br.com.rd.ecommerce.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/client")
    public Client save(@RequestBody Client client) {
        return clientRepository.save(client);
    }

    @GetMapping("/find-client/list")
    public List<Client> find(){ return clientRepository.findAll();  }

    @DeleteMapping("/delete-client/{id_client}")
    public void deleteById(@PathVariable("id_client") Long idOfClient) {
        clientRepository.deleteById(idOfClient);
    }


}
