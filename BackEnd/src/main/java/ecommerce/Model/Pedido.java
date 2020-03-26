package ecommerce.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_pedido")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido")
    private Long idPedido;

    @Column(name = "dt_pedido")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtPedido;


    @Column(name = "id_cliente")
    private Long idCliente;

    @Column(name = "vl_frete")
    private BigDecimal vlFrete;

    @Column(name = "vl_total")
    private BigDecimal vlTotal;

    @JoinColumn(name="id_cartao")
    private Long idCartao;

    @JoinColumn(name = "id_endereco")
    private Long idEndereco;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_pedido")
    private List<ItemPedido> itemPedido;


}
