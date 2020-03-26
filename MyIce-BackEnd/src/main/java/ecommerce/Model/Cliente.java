package ecommerce.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_cliente", uniqueConstraints={@UniqueConstraint( columnNames = "ds_email", name = "nmr_cpf")})
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    private Long idCliente;

    @NotNull
    @Column(name = "nmr_cpf")
    private String cpf;

    @NotNull
    @Column(name = "ds_name")
    private String nome;

    @NotNull
    @Column(name = "nmr_telefone")
    private String telefone;

    @NotNull
    @Column(name = "ds_email")
    private String email;

    @NotNull
    @Column(name = "ds_password")
    private String password;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_endereco")
    private List<Endereco> enderecos;
}
