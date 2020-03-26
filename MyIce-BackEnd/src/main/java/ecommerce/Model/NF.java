package ecommerce.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_NF")
public class NF {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_nf")
    private Long idNF;

    @Column(name = "dt_nf")
    private Date dtNf;

    @OneToOne
    @JoinColumn(name = "id_pedido")
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;
}
