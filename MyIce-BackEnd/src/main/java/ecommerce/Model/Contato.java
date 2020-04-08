package ecommerce.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_contato")
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_contato")
    private Long id;

    @Column(name = "dt_data")
    private Date data;

    @NotEmpty
    @Column(name = "ds_email")
    private String email;

    @NotEmpty
    @Column(name = "ds_assunto")
    private String assunto;

    @NotEmpty
    @Column(name = "ds_mensagem")
    private String mensagem;
}
