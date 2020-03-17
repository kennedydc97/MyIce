package br.com.rd.ecommerce.Model.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_request")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order")
    private Long idOrder;


    @Column(name = "dt_update")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtUpdate;

    @NotNull
    @Column(name = "dt_request")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtRequest;

    @NotNull
    @Column(name = "id_client")
    private Integer idClient;

    @NotNull
    @Column(name = "vl_shipment")
    private BigDecimal vlShipment;

    @NotNull
    @Column(name = "vl_total")
    private BigDecimal vlTotal;

    @NotNull
    @Column(name = "ds_payment_methods")
    private String dsPaymentMethods;

//    @OneToMany(mappedBy = "request")
//    private List<ItemRequest> itemsRequest;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_order")
    private List<ItemOrder> itemsOrder;
}
