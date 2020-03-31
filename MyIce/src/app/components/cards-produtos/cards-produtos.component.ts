import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { produtoAPI } from 'src/app/models/produtoAPI';

@Component({
  selector: 'app-cards-produtos',
  templateUrl: './cards-produtos.component.html',
  styleUrls: ['./cards-produtos.component.css']
})
export class CardsProdutosComponent implements OnInit {


  produtoAPI: produtoAPI;
  produtos: any = []
  produtosExibidos: any = []
  erro: any;

  getter() {
    this.serviceProduto.getProdutos().
    subscribe(
      (data: produtoAPI) => {
        this.produtoAPI = data;
        this.produtos = this.produtoAPI
        this.produtosExibidos = this.produtos
        console.log(this.produtos);
        
      }, (error: any) => {
        console.error("ERROR", error)
      })
  }

  constructor(private serviceProduto: ProdutosService) {
    this.getter()
  }
  
  ngOnInit(): void {
  }

}
