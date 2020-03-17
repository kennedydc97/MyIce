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
@Table(name = "tb_NF")
public class NF {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_nf")
    private Long idNF;

    @Column(name = "dt_nf_date")
    private Date nfDate;

    @OneToOne
    @JoinColumn(name = "id_request")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "id_client")
    private Client client;
}
