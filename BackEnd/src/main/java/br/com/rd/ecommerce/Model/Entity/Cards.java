package br.com.rd.ecommerce.Model.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_card")

public class Cards {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cartao")
    private Long idcartao;

    @Column(name = "nro_cartao")
    private String nrocartao;

    @Column(name = "dataValidade")
    private Date dataValidade;

    @Column(name = "cvv")
    private String CVV;

    @Column(name = "nomeTitular")
    private String nometitular;



}
