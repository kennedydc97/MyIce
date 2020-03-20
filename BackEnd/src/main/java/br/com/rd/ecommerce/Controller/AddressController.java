package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.Address;
import br.com.rd.ecommerce.Repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/find-address/list")
    public List<Address> find(){ return addressRepository.findAll();  }


}

