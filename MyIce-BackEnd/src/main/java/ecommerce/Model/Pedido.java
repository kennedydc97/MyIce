package ecommerce.Model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
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

    @NotNull(message = "Campo data inválido")
    @Column(name = "dt_pedido")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtPedido;

    @NotNull(message = "Campo id cliente inválido")
    @Column(name = "id_cliente")
    private Long cliente;

    @NotNull(message = "Campo frete inválido")
    @Column(name = "vl_frete")
    private BigDecimal vlFrete;

    @NotNull(message = "Campo valor total inválido")
    @Column(name = "vl_total")
    private BigDecimal vlTotal;

    @NotEmpty(message = "Campo forma de pagamento inválido")
    @Column(name="ds_formapgto")
    private String formapgto;

    @Column(name = "id_endereco")
    private Long endereco;

    @NotNull(message = "Campo endereço inválido")
    @Column(name = "id_endereco")
    private Long endereco;
    
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_pedido")
    private List<ItemPedido> itemPedido;
}