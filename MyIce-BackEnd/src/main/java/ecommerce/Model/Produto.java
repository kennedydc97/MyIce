package ecommerce.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
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
    private Integer idProduto;

    @Column(name = "nm_produto")
    private String nome;

    @NotNull
    @Column(name = "ds_produto")
    private String descricao;

    @Column(name = "img_produto")
    private String imagem;

    @Column(name = "id_categoria")
    private Integer categoria;

    @Column(name = "vl_preco_cheio")
    private BigDecimal precoCheio;

    @Column(name = "vl_preco_desconto")
    private BigDecimal precoDesconto;
}
