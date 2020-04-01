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
@Table(name = "tb_cartao")

public class Cartao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cartao")
    private Long idCartao;

    @Column(name = "nmr_cartao")
    private String nmrCartao;

    @Column(name = "dt_validade")
    private Date dtValidade;

    @Column(name = "cvv")
    private String cvv;

    @Column(name = "nm_titular")
    private String nmTitular;

}
