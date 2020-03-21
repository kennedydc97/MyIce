package br.com.rd.ecommerce.Model.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Entity
    @Table(name = "tb_endereco")

    public class Address  implements Serializable {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id_endereco")
        private Long idEndereco;

        @Column(name = "endereco")
        private String endereco;

        @Column(name = "nro_endereco",length=6)
        private String numero;

        @Column(name = "cep",length=8)
        private String cep;

        @Column(name = "bairro")
        private String bairro;

        @Column(name = "complemento")
        private String complemento;

        @Column(name = "cidade")
        private String cidade;

        @Column(name = "estado")
        private String estado;

        @ManyToOne
        @JoinColumn(name="id_client")
        private Client client;

    }
