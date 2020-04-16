package ecommerce.Repository;

import ecommerce.Model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long>  {
    List<Pedido> findByClienteOrderByDtPedidoDesc(Integer cliente);
    Pedido findFirst1ByClienteOrderByDtPedidoDesc(Integer cliente);

}
