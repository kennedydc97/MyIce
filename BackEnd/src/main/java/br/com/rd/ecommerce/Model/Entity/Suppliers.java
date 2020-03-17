package br.com.rd.ecommerce.Model.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_suppliers")
public class Suppliers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_supplier")
    private Long idSupplier;

    @Column(name = "ds_description")
    private String description;

    @Column(name = "ds_address")
    private String address;

    @Column(name = "nr_telephone")
    private String tel;
}
