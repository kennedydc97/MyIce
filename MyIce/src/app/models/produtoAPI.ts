export class produtoAPI{
    public idProduto?:number; 
    public nome?: string;
    public descricao?: string;
    public imagem?: string; 
    public categoria?: {
        idCategoria?: number,
        descricao?: string
    };
    public precoCheio?: number
    public precoDesconto?: number;
}
