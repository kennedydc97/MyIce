package ecommerce.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_endereco")

public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_endereco")
    private Long idEndereco;

    @NotEmpty(message = "Campo logradouro inválido")
    @Column(name = "logradouro")
    private String logradouro;

    @NotEmpty(message = "Campo numero inválido")
    @Column(name = "nro_endereco",length=6)
    private String numero;

    @NotEmpty(message = "Campo cep inválido")
    @Column(name = "cep",length=8)
    private String cep;

    @NotEmpty(message = "Campo bairro inválido")
    @Column(name = "bairro")
    private String bairro;

    @Column(name = "complemento")
    private String complemento;

    @Column(name = "localidade")
    private String localidade;

    @NotEmpty(message = "Campo localidade inválido")
    @Column(name = "localidade")
    private String localidade;

    @NotEmpty(message = "Campo UF inválido")
    @Column(name = "uf")
    private String uf;

    @Column(name="id_client")
    private Long cliente;
}
