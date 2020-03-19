package br.com.rd.ecommerce.Repository;

import br.com.rd.ecommerce.Model.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    public List<Product> findByDescription(String description);
    public List<Product> findByIdProductAndDescription(Long idProduct, String description);
    public List<Product> findByDescriptionLike(String descricao);
}
