package br.com.rd.ecommerce.Service;


import br.com.rd.ecommerce.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service("ProductService")
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public ResponseEntity buscarPorDescricao(String descricao) {
        return ResponseEntity.ok().body(productRepository.findByDescriptionLike("%"+descricao+"%"));
    }
}
