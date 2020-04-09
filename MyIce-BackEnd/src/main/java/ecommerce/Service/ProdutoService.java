package ecommerce.Service;

import ecommerce.Model.Produto;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Service("ProdutoService")
public class ProdutoService {

    @PersistenceContext
    private EntityManager em;


    public List<Produto> buscarProdutosMaisVendidos() {
        List<Produto> produtos = null;
        String sql =
                new StringBuffer()
                        .append("SELECT p.* ")
                        .append("FROM TB_PRODUTO p ")
                        .append("INNER JOIN (SELECT ip.id_produto, SUM(ip.nmr_quantidade) AS quantidade FROM TB_ITEM_PEDIDO ip GROUP BY ip.id_produto ORDER BY 2 DESC) MAIS_VENDIDOS ON (MAIS_VENDIDOS.id_produto = p.id_produto)")
                                .toString();
        Query query = em.createNativeQuery(sql, Produto.class);
        produtos = query.getResultList();
        return produtos;
    }
}
