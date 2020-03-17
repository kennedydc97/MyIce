package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.Suppliers;
import br.com.rd.ecommerce.Repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SuppliersController {

    @Autowired
    private SupplierRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create-supplier")
    public br.com.rd.ecommerce.Model.Entity.Suppliers save(@RequestBody Suppliers suppliers) {
        return repository.save(suppliers);
    }

    @GetMapping("/find-suppliers/list")
    public List<br.com.rd.ecommerce.Model.Entity.Suppliers> find() {
        return repository.findAll();
    }

    @GetMapping("/suppliers/findSuppliersById/{id}")
    public br.com.rd.ecommerce.Model.Entity.Suppliers findNfById(@PathVariable("id") Long id) {
        return repository.findById(id).get();
    }

    @DeleteMapping("/delete-supplier/{id_suppliers}")
    public void deleteById(@PathVariable("id_suppliers") Long idOfSupplier) {
        repository.deleteById(idOfSupplier);
    }

}
