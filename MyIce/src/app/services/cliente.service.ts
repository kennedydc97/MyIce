import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from './storage.service';
import { map } from "rxjs/operators";
import { Cadastro } from '../models/Cadastro';


const storage: StorageService = new StorageService();


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  cadastrarCliente(c: Cadastro){
    let cadastrarCliente = {
      cpf: c.cpf,
      name: c.nome,
      tel: c.tel,
      email: c.email,
      password: c.senha
    }

    return this.http.post("http://localhost:8080/ecommerce/client", cadastrarCliente);
  }

  public buscarEndereco(id){
    let url = this.http.get<any>("http://localhost:8080/ecommerce/address/" + id)
    return url.pipe(map(
      address => address
    ))
  }
}
