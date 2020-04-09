import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from './storage.service';
import { map } from "rxjs/operators";
import { Cadastro } from '../models/Cadastro';
import { Login } from '../models/Login';
import { Pedido } from '../models/Pedido';
import { ItemPedidoAPI } from '../models/ItemPedidoAPI';
import { Endereco } from '../models/endereco';
import { Contato } from '../models/Contato';
import { Entrega } from '../models/Entrega';
import { NumberFormatStyle } from '@angular/common';
import { FormGroup} from "@angular/forms";


const storage: StorageService = new StorageService();


const enderecodb = (endereco, idCliente) => {
  return {
    "logradouro": endereco.logradouro,
    "numero": endereco.numero,
    "bairro": endereco.bairro,
    "complemento": endereco.complemento,
    "localidade": endereco.localidade,
    "uf": endereco.uf,
    "cep": endereco.cep,
    "cliente": idCliente
  }
}

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  pedidosFiltrados: Pedido[] = [];
  pedidos: Pedido[] = [];
  carregando = true;


  public clienteLogado: EventEmitter<Cadastro>;

  constructor(private http: HttpClient, private storage : StorageService) {
    this.clienteLogado = new EventEmitter()
   }

  cadastrarCliente(c: Cadastro) {
    let cadastrarCliente = {
      cpf: c.cpf,
      nome: c.nome,
      nascimento: c.nasc,
      telefone: c.tel,
      email: c.email,
      password: c.senha,
      enderecos: [{
        logradouro: c.logradouro,
        numero: c.numero,
        cep: c.cep,
        bairro: c.bairro,
        complemento: c.complemento,
        localidade: c.localidade,
        uf: c.uf,
      }]
    }
    return this.http.post("http://localhost:8080/ecommerce/cliente", cadastrarCliente);
  }
  logado(){
    if(sessionStorage.getItem("usuario") == null){
      return true;
    } else {
      return false;
    }
  }

  dados(login: Login) {
    return {
      "email": login.email,
      "password": login.password
    }
  }

  fazerLogin(login: Login) {
    let comunicacao = this.dados(login)
    let body: any
    let url = this.http.post(`http://localhost:8080/ecommerce/login`, comunicacao)
    return url.pipe(data => data)
  }

  public buscarEndereco(idCliente) {
    let url = this.http.get<any>("http://localhost:8080/ecommerce/endereco/" + idCliente)
    return url.pipe(map(
      endereco => endereco
    ))
  }

  public mandarPedido(idEndereco, vlFrete) {
    let usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    let dtPedido = new Date();
    let carrinho = [];
    let total = 0;
    let formapgto = "Cartão de Crédito";
    storage.recuperarCarrinho().forEach(el => {
      total += el.produto.precoDesconto * el.qtd;
      carrinho.push(new ItemPedidoAPI(el.produto, el.qtd))
    }); 
    let pedido = this.formatoPedido(idEndereco, usuario.idCliente, carrinho, total, vlFrete, formapgto, dtPedido);
    let url = this.http.post<any>("http://localhost:8080/ecommerce/pedido", pedido)
    return url.pipe(map(
      pedido => pedido

    ))
  }


  public formatoPedido(idEndereco, idCliente, carrinho, total, vlFrete, formapgto, dtPedido) {
    let pedido = new Pedido(idCliente, vlFrete, total, formapgto, dtPedido, idEndereco, carrinho);
    return pedido;
  }


  public getPedidos() {
    let usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    let url = this.http.get<Pedido>("http://localhost:8080/ecommerce/pedido/" + usuario.idCliente);
    return url.pipe(
      map(
        data => data
      )
    )
  }

  public getPedido(id: number){
    let url = this.http.get<Pedido>("http://localhost:8080/ecommerce/pedido/selecionado/" + id);
    return url.pipe(
      map(
        data => data
      )
    )
  }


  public cadastrarEndereco(endereco: Endereco, idCliente) {
    let url = this.http.post("http://localhost:8080/ecommerce/endereco", enderecodb(endereco, idCliente));
    return url.pipe(map(
      dados => dados
    ))
  }

  public getPedidosLista(){
    let usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    let url = this.http.get("http://localhost:8080/ecommerce/pedidos/lista/" + usuario.idCliente);
    return url.pipe(
      map(
        data => data
      )
    )
  }

  public disparaEventoClienteLogado(c: Cadastro){
    this.clienteLogado.emit(c)
  }
  
  public getEndereco(id: number){
    let url = this.http.get<Endereco>("http://localhost:8080/ecommerce/endereco/selecionado/" + id);
    return url.pipe(
      map(
        data => data
      )
    )
  }

  public faleConosco(c: Contato){
    let mensagem = {
      data: c.data,
      email: c.email,
      assunto: c.assunto,
      mensagem: c.mensagem
    }
    return this.http.post("http://localhost:8080/ecommerce/contato", mensagem)
  }


  esqueciSenha(group: FormGroup){

    let email: string = group.value.cliente;

    return this.http.post("http://localhost:8080/ecommerce/esquecisenha/", email);

}
}

