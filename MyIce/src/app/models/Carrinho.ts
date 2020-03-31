import { produtoAPI } from './produtoAPI';
​
export class Carrinho {
    constructor(public produto: produtoAPI, public qtd: number = 1){}

}
