package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.Product;
import br.com.rd.ecommerce.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create-product")
    public Product save(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping("/find-product/list")
    public List<Product> find() {
        return productRepository.findAll();
    }

    @GetMapping("/product/findProductById/{id}")
    public Product findProductById(@PathVariable("id") Long id) {
        return productRepository.findById(id).get();
    }

    @GetMapping("/product/findByDescription/{description}")
    public List<Product> findByDescription(@PathVariable("description") String description) {
        return productRepository.findByDescription(description);
    }

    @GetMapping("/product")
    public ResponseEntity<List<Product>> findByIdProductAndDescription(@PathParam("idProduct") Long idProduct,
                                                                       @PathParam("description") String description) {
        List<Product> product = new ArrayList<>();

        if (idProduct != null && description != null) {
            product = productRepository.findByIdProductAndDescription(idProduct, description);
        } else if (idProduct != null) {
            product.add(productRepository.findById(idProduct).get());
        } else if (description != null) {
            product = productRepository.findByDescription(description);
        }

        if (product != null && product.size() > 0) {
            return ResponseEntity.ok().body(product);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/delete-product/{id_product}")
    public void deleteById(@PathVariable("id_product") Long idOfProduct) {
        productRepository.deleteById(idOfProduct);
    }

    @PutMapping("/product")
    public Product modify(@RequestBody Product product) {
        Product productEntity = productRepository.getOne(product.getIdProduct());
        productEntity.setDescription(product.getDescription());
        productEntity.setVlProductDiscount(product.getVlProductDiscount());
        productEntity.setGroup(product.getGroup());
        return productRepository.save(productEntity);
    }
}
