package ecommerce.Repository;

import ecommerce.Model.Categoria;
import ecommerce.Model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>  {

        List<Produto> findByCategoria (Categoria categoria);

}
