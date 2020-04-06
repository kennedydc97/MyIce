package ecommerce.Repository;
import ecommerce.Model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long>  {
    List<Pedido> findByCliente(Long cliente);
    Pedido findFirst1ByClienteOrderByDtPedidoDesc(Long cliente);
    List<Pedido> findByClienteOrderByDtPedidoDesc(Long cliente);
}