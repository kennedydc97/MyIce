import { produtoAPI } from './produtoAPI';

export class ItemPedidoAPI{
    constructor(public produto: produtoAPI, public quantidade: number){}
}