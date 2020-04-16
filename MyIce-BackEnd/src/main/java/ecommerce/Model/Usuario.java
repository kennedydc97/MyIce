package ecommerce.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_usuario")
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Integer idUsuario;

    @NotNull
    @Column(name = "ds_email", unique = true)
    private String email;

    @NotNull
    @Column(name = "ds_password")
    private String senha;

    @NotNull
    @Column(name = "ds_nome")
    private String nome;

    @Column(name="ds_nivel_acesso")
    private String nivelAcesso;

    @OneToOne
    @JoinColumn(name = "id_usuario", referencedColumnName = "id_usuario")
    private Cliente cliente;



}
