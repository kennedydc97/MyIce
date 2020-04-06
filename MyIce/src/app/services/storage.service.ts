import { Injectable, EventEmitter } from '@angular/core';
import { Cliente } from '../models/clienteapi';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  produtosCarrinho: EventEmitter<Number>

  constructor() {
    this.produtosCarrinho = new EventEmitter()
   }

  salvarCarrinho(carrinho){
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
  }

  recuperarCarrinho(){
    return JSON.parse(localStorage.getItem("carrinho")) 
  }

  removerCarrinho() {
    localStorage.removeItem("carrinho");
  }

  removerCarrinho2() {
    localStorage.removeItem("carrinho");
  }

  salvarCliente(cliente: Cliente) {
    localStorage.setItem('cliente', JSON.stringify(cliente));
  }
  
  recuperarCliente() {
    return JSON.parse(localStorage.getItem('cliente'));
  }

  zerarCarrinho(zerar: number){
    this.produtosCarrinho.emit(zerar)
  }
}