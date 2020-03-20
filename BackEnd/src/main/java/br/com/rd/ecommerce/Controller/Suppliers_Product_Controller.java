package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.Suppliers_Product;
import br.com.rd.ecommerce.Repository.Suppliers_Product_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Suppliers_Product_Controller {

    @Autowired
    private Suppliers_Product_Repository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create-suppliers-product")
    public Suppliers_Product save(@RequestBody Suppliers_Product suppliers_product) {
        return repository.save(suppliers_product);
    }

    @GetMapping("/find-suppliers-product/list")
    public List<Suppliers_Product> find() {
        return repository.findAll();
    }

    @GetMapping("/suppliers/findSuppliersProductById/{id}")
    public Suppliers_Product findSuppliersProductById(@PathVariable("id") Long id) {
        return repository.findById(id).get();
    }

    @DeleteMapping("/delete-supplier/{id_suppliers_product}")
    public void deleteById(@PathVariable("id_suppliers_product") Long idOfSuppliersProduct) {
        repository.deleteById(idOfSuppliersProduct);
    }

}
