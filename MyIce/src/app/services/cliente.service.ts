import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from './storage.service';
import { map } from "rxjs/operators";
import { Cadastro } from '../models/Cadastro';
import { Login } from '../models/Login';
import { Pedido } from '../models/Pedido';
import { ItemPedidoAPI } from '../models/ItemPedidoAPI';


const storage: StorageService = new StorageService();

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private storage : StorageService) { }

  cadastrarCliente(c: Cadastro){
    let cadastrarCliente = {
      cpf: c.cpf,
      nome: c.nome,
      telefone: c.tel,
      email: c.email,
      password: c.senha,
      endereco: [{
        endereco: c.endereco,
        numero: c.numeroCasa,
        cep: c.cep,
        bairro: c.bairro,
        complemento: c.complementoCasa,
        cidade: c.cidade,
        estado: c.estado,
      }]
    }

    return this.http.post("http://localhost:8080/ecommerce/cliente", cadastrarCliente);
  }

  logado(){
    if(sessionStorage.getItem("usuario") == null){
      return true;
    }else{
      return false;
    }
  }
  dados(login: Login){
    return{
      "email":login.email,
      "password":login.password
    }
  }
  fazerLogin(login: Login){
    let comunicacao = this.dados(login)
    let body: any
    let url = this.http.post(`http://localhost:8080/ecommerce/login`,comunicacao)
    return url.pipe(data => data)
  }
  public buscarEndereco(idCliente){
    let url = this.http.get<any>("http://localhost:8080/ecommerce/endereco/" + idCliente)
    return url.pipe(map(
      endereco => endereco
    ))
  }
  public mandarPedido(idEndereco, vlFrete){
    let usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    //pra login
    // let idCliente = 68;
    let carrinho = [];
    let total = 0;
    let formapgto = "crédito"
    storage.recuperarCarrinho().forEach(el => { 
      total += el.produto.precoDesconto * el.qtd;
      carrinho.push(new ItemPedidoAPI(el.produto, el.qtd))
    });
    // let cartao = JSON.parse(localStorage.getItem("Pagamento"));
    let pedido = this.formatoPedido(idEndereco, usuario.idCliente , carrinho, total, vlFrete, formapgto);
    let url = this.http.post<any>("http://localhost:8080/ecommerce/pedido", pedido )
    return url.pipe(map(
      pedido => pedido 
    ))
  }
  public formatoPedido(idEndereco, idCliente, carrinho, total, vlFrete, formapgto){
    let pedido = new Pedido(idCliente, vlFrete, total, formapgto, idEndereco, carrinho );
      return pedido;
  }
}


