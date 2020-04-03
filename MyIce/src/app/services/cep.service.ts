import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators'
import { Address } from '../models/Address';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


const URL: string = "https://viacep.com.br/ws/";

interface iViaCep{
  cep:string,
  logradouro: string,
  bairro: string,
  uf: string,
  localidade:string

}

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }
  

  
  getEnderecoViaCep(cep: string) {
    let url = this.httpClient.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
    return url.pipe(
      map(
        dados => dados
      )
    )
  }}