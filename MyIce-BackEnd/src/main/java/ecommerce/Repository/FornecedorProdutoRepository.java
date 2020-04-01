package ecommerce.Repository;

import ecommerce.Model.Fornecedor_Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FornecedorProdutoRepository extends JpaRepository<Fornecedor_Produto, Long>  {
}
