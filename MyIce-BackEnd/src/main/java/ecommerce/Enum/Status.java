package ecommerce.Enum;

public enum Status {
    AGUARDANDOPAGAMENTO(1, "Aguardando pagamento"),
    EMSEPARACAO(2, "Em separação"),
    ENVIADO(3, "Enviado"),
    ENTREGUE(4, "Entregue"),
    CANCELADO(5, "Cancelado");

    private Integer cod;
    private String descricao;

    private Status(Integer cod, String descricao){
        this.cod = cod;
        this.descricao = descricao;
    };

    public Integer getCod() {
        return cod;
    }

    public String getDescricao() {
        return descricao;
    }

    public static Status toEnum(Integer cod){
        if(cod == null){
            return null;
        }
        for (Status x : Status.values()){
            if(cod.equals(x.getCod())){
                return x;
            }
        }

        throw new IllegalArgumentException("id inválido: " + cod);
    }
}
