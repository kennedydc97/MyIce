package ecommerce.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name = "tb_produto")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_produto")
    private Long idProduto;

    @NotEmpty(message = "Campo nome inválido")
    @Column(name = "nm_produto")
    private String nome;

    @NotEmpty(message = "Campo descrição inválido")
    @Column(name = "ds_produto")
    private String descricao;

    @NotEmpty(message = "Campo imagem inválido")
    @Column(name = "img_produto")
    private String imagem;

    @ManyToOne
    @JoinColumn(name = "id_categoria")
    private Categoria categoria;

    @NotNull(message = "Campo preço cheio inválido")
    @Column(name = "vl_preco_cheio")
    private BigDecimal precoCheio;

    @NotNull(message = "Campo preço desconto inválido")
    @Column(name = "vl_preco_desconto")
    private BigDecimal precoDesconto;
}
