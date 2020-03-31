import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  public getProdutos(){
    return this.http.get("http://localhost:8080/ecommerce/produto/lista")
  }

  public getCategoria(){
    return this.http.get("http://localhost:8080/ecommerce/categoria/lista")
  }

  public buscarProdutoId(id: number){
    return this.http.get("http://localhost:8080/ecommerce/produto/" + id);
  }
}
