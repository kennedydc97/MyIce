package br.com.rd.ecommerce.Model.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_supplier_product")
public class Suppliers_Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_supplier_product")
    private Long idSupplierProduct;

    @ManyToOne
    @JoinColumn(name = "id_supplier")
    private Suppliers suppliers;

    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product product;

    @Column(name = "nr_quantity")
    private Integer quantity;


}
