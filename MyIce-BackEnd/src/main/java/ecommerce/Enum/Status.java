package ecommerce.Enum;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public enum Status {
    AGUARDANDOPAGAMENTO(1, "Aguardando pagamento"),
    EMSEPARACAO(2, "Em separação"),
    ENVIADO(3, "Enviado"),
    ENTREGUE(4, "Entregue"),
    CANCELADO(5, "Cancelado");

    private Integer cod;
    private String descricao;
}
