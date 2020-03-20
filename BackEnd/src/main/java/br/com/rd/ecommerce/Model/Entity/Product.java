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
@Table(name = "tb_product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Long idProduct;

    @Column(name = "nm_product")
    private String name;

    @NotNull
    @Column(name = "ds_product")
    private String description;

    @Column(name = "img_product")
    private String image;

    @ManyToOne
    @JoinColumn(name = "cd_group")
    private Group group;

    @Column(name = "vl_product_full")
    private BigDecimal vlProductFull;

    @Column(name = "vl_product_discount")
    private BigDecimal vlProductDiscount;
}
