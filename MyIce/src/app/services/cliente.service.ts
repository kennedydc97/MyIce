import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from './storage.service';
import { map } from "rxjs/operators";
import { Cadastro } from '../models/Cadastro';
import { Login } from '../models/Login';
const storage: StorageService = new StorageService();
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  cadastrarCliente(c: Cadastro) {
    let cadastrarCliente = {
      cpf: c.cpf,
      nome: c.nome,
      telefone: c.tel,
      email: c.email,
      password: c.senha
      // enderecos: [{
      //   endereco: c.endereco,
      //   numero: c.numeroCasa,
      //   cep: c.cep,
      //   bairro: c.bairro,
      //   complemento: c.complementoCasa,
      //   cidade: c.cidade,
      //   estado: c.estado,
      //   cliente: c.idCadastro
      // }]
    }
    return this.http.post("http://localhost:8080/ecommerce/cliente", cadastrarCliente);
  }
  logado() {
    if (sessionStorage.getItem("usuario") == null) {
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
  public buscarEndereco(id) {
    let url = this.http.get<any>("http://localhost:8080/ecommerce/address/" + id)
    return url.pipe(map(
      address => address
    ))
  }

  //   update(c: Cadastro): Promise<Cadastro> {
  //     const url = `${this.clientesUrl}/${c.id}`; //app/cliente/:id
  //     return this.http
  //     .put(url, JSON.stringify(c), {headers:this.headers})
  //     .toPromise()
  //     .then(() => c as Cadastro)
  // }

  update(c: Cadastro) {
    let editarCliente = {
      nome: c.nome,
      telefone: c.tel,
      password: c.senha
      // enderecos: [{
      //   endereco: c.endereco,
      //   numero: c.numeroCasa,
      //   cep: c.cep,
      //   bairro: c.bairro,
      //   complemento: c.complementoCasa,
      //   cidade: c.cidade,
      //   estado: c.estado,
      //   cliente: c.idCadastro
      // }]
    }
    return this.http.put("http://localhost:8080/ecommerce/cliente", editarCliente);
  }
}