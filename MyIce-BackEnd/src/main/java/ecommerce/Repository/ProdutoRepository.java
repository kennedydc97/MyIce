package ecommerce.Repository;

import ecommerce.Model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer>  {



}
