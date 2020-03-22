package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.Address;
import br.com.rd.ecommerce.Model.Entity.Client;
import br.com.rd.ecommerce.Repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
public class AddressController {

    @Autowired
    private AddressRepository addressRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/address")
    public Address save(@RequestBody Address address) {
        return addressRepository.save(address);
    }

//    @GetMapping("/address/{id_client}")
//    public List<Address> findByIdClient (@PathVariable("id_client") Long id){
//        return addressRepository.findByIdClient(id);
//    }

//
//    @GetMapping("/find-address/{id_endereco}")
//    public Address findByIdEndereco(@PathVariable("id_endereco") Long id) {
//        return addressRepository.findById(id).get();
//    }


    @GetMapping("/address/{idClient}")
    public List<Address> findByIdClient (@PathVariable("idClient") Long id){
        Client client = new Client();
        client.setIdClient(id);
        return addressRepository.findByClient(client);
    }
}

