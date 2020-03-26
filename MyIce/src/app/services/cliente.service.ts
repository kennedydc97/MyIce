import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from './storage.service';
import { map } from "rxjs/operators";
import { Pedido } from '../models/Pedido';
import { ItemPedidoAPI } from '../models/ItemPedidoAPI';


const storage: StorageService = new StorageService();


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private storage : StorageService) { }

  public buscarEndereco(id){
    let url = this.http.get<any>("http://localhost:8080/ecommerce/endereco/" + id)
    return url.pipe(map(
      endereco => endereco
    ))
  }
  public mandarPedido(idEndereco, vlFrete){
    // let idcliente = storage.recuperarCliente().idCliente; pra login
    let idCliente = 33;
    let carrinho = [];
    let total = 0;
    storage.recuperarCarrinho().forEach(el => { 
      total += el.produto.precoDesconto * el.qtd;
      carrinho.push(new ItemPedidoAPI(el.produto, el.qtd))
    });
    let cartao = JSON.parse(localStorage.getItem("Pagamento"));
    let pedido = this.formatoPedido(idEndereco, idCliente, carrinho, total, vlFrete);
    let url = this.http.post<any>("http://localhost:8080/ecommerce/pedido", pedido )
    return url.pipe(map(
      pedido => pedido 
    ))
  }
  public formatoPedido(idEndereco, idCliente, carrinho, total, vlFrete){
    let pedido = new Pedido(idCliente, vlFrete, total, 1, idEndereco, carrinho );
      return pedido;
  }
}

