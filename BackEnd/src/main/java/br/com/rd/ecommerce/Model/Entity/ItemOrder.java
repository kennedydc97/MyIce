package br.com.rd.ecommerce.Model.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_itemOrder")
public class ItemOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_item_order")
    private Long idItemOrder;

    @ManyToOne
    @JoinColumn(name = "id_order")
    private Order order;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product product;

    @NotNull
    @Column(name = "nr_quantity")
    private Integer quantity;

    @NotNull
    @Column(name = "vl_product")
    private BigDecimal vlProduct;

}
