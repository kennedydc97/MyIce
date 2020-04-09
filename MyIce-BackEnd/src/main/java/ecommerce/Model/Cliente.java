package ecommerce.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
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
    private Integer idCliente;

    @NotNull
    @Column(name = "nmr_cpf")
    private String cpf;

    @Column(name = "dt_nascimento")
    private Date nascimento;

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

    @OneToMany
    @JoinColumn(name = "id_cliente")
    private List<Pedido> pedido;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_client")
    private List<Endereco> enderecos;

}
