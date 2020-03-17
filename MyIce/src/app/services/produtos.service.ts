import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  public getApi(): Observable<any>{
    return this.http.get("http://localhost:8080/find-product/list")
  }

  public buscarProdutoId(id: number){
    return this.http.get("http://localhost:8080/find-product/" + id);
  }
}
