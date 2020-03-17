package br.com.rd.ecommerce.Model.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_client")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_client")
    private Long idClient;

    @NotNull
    @Column(name = "nr_cpf")
    private String cpf;

    @NotNull
    @Column(name = "ds_name")
    private String name;

    @NotNull
    @Column(name = "nr_telephone")
    private String tel;

    @NotNull
    @Column(name = "ds_email")
    private String email;

    @NotNull
    @Column(name = "ds_password")
    private String password;

    @NotNull
    @Column(name = "ds_address")
    private String address;
}
