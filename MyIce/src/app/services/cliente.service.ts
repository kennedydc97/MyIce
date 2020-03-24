import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from './storage.service';
import { map } from "rxjs/operators";


const storage: StorageService = new StorageService();


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public buscarEndereco(id){
    let url = this.http.get<any>("http://localhost:8080/ecommerce/endereco/" + id)
    return url.pipe(map(
      endereco => endereco
    ))
  }
}
