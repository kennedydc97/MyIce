package ecommerce.Model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;
@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_cliente")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    private Long idCliente;

    @NotEmpty(message = "Campo CPF inválido")
    @Column(name = "nmr_cpf")
    @CPF
    private String cpf;

    @NotEmpty(message = "Campo nome inválido")
    @Column(name = "ds_name")
    private String nome;

    @NotNull(message = "Campo nascimento inválido")
    @Column(name = "ds_nascimento")
    private Date nascimento;

    @NotEmpty(message = "Campo telefone inválido")
    @Column(name = "nmr_telefone")
    private String telefone;

    @NotEmpty(message = "Campo email inválido")
    @Email
    @Column(name = "ds_email")
    private String email;

    @NotEmpty(message = "Campo senha inválido")
    @Column(name = "ds_password")
    private String password;

    @OneToMany
    @JoinColumn(name = "id_cliente")
    private List<Pedido> pedido;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_client")
    private List<Endereco> enderecos;
}