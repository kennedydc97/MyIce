package ecommerce.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
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

    @NotEmpty
    @Column(name = "nmr_cartao")
    private String nmrCartao;

    @NotEmpty
    @Column(name = "dt_validade")
    private Date dtValidade;

    @NotEmpty
    @Column(name = "cvv")
    private String cvv;

    @NotEmpty
    @Column(name = "nm_titular")
    private String nmTitular;

}
