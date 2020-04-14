import { produtoAPI } from './produtoAPI';

export class Pedido {
    constructor(
        public cliente: number,
        public vlFrete: number,
        public vlTotal: number,
        public formapgto: string,
        public dtPedido: Date,
        public endereco: number,
        public status: number,
        public itemPedido: produtoAPI[],
        public idPedido?: number
    ) { }
}