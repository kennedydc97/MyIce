import { produtoAPI } from './produtoAPI';

export class Pedido {
    constructor(
        public idCliente: number,
        public vlFrete: number,
        public vlTotal: number,
        public formapgto: string,
        public dtPedido: Date,
        public idEndereco: number,
        public itemPedido: produtoAPI[],
        public idPedido?: number
    ) { }
}