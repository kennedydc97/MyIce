package ecommerce.Service;

import ecommerce.Model.Pedido;
import ecommerce.Model.Produto;
import ecommerce.Repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Service("ProdutoService")
public class ProdutoService {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    private PedidoRepository pedidoRepository;


    public List<Produto> buscarProdutosMaisVendidos() {
        List<Produto> produtos = null;
        String sql =
                new StringBuffer()
                        .append("SELECT p.* ")
                        .append("FROM TB_PRODUTO p ")
                        .append("INNER JOIN (SELECT ip.id_produto, SUM(ip.nmr_quantidade) AS quantidade FROM TB_ITEM_PEDIDO ip GROUP BY ip.id_produto ORDER BY 2 DESC) MAIS_VENDIDOS ON (MAIS_VENDIDOS.id_produto = p.id_produto) limit 3")
                                .toString();
        Query query = em.createNativeQuery(sql, Produto.class);
        produtos = query.getResultList();
        return produtos;
    }

    public List<Produto> buscarProdutosRelacionados(){
        List<Produto> produtos = null;
        String sql = new StringBuffer().append("SELECT prod.* ").append("FROM TB_PRODUTO prod ").append("INNER JOIN " +
                "(SELECT ip.* FROM TB_ITEM_PEDIDO ip INNER JOIN TB_PEDIDO p ON ip.id_pedido = p.id_pedido WHERE p" +
                ".id_pedido = 392) relacionados on relacionados.id_produto = prod.id_produto").toString();
        Query query = em.createNativeQuery(sql, Produto.class);
        produtos = query.getResultList();
        return produtos;
    }
 }
