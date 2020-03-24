import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { produtoAPI } from 'src/app/models/produtoAPI';
import { CategoriaAPI } from 'src/app/models/categoriaAPI';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  produtoAPI: produtoAPI;
  erro: any;

  produtos: any = []
  produtosExibidos: any = []

  getter() {
    this.serviceProduto.getProdutos().subscribe(
      (data: produtoAPI) => {
        this.produtoAPI = data;
        this.produtos = this.produtoAPI
        this.produtosExibidos = this.produtos
      }, (error: any) => {
        console.error("ERROR", error)
      })
  }


  constructor(private router: Router, private serviceProduto: ProdutosService) {
    this.getter();
  }

  categoriaSelecionada(categoriaAPI: CategoriaAPI) {
    if(categoriaAPI.idCategoria != 1){
      this.produtos = this.produtosExibidos.filter(produto => produto.categoria.idCategoria == categoriaAPI.idCategoria)
    }else{
      this.produtos = this.produtosExibidos
    }
  }

  filtrar(id: number) {
    if(id == 1){
      for(let i = 0; i < this.produtos.length; i++){
        for(let x = 0; x < this.produtos.length; x++){
          if(this.produtos[i].precoDesconto > this.produtos[x].precoDesconto){
            let aux = this.produtos[i];
            this.produtos[i] = this.produtos[x];
            this.produtos[x] = aux;
          }
        }
      }
    }else if(id == 2){
      for(let i = 0; i < this.produtos.length; i++){
        for(let x = 0; x < this.produtos.length; x++){
          if(this.produtos[i].precoDesconto < this.produtos[x].precoDesconto){
            let aux = this.produtos[i];
            this.produtos[i] = this.produtos[x];
            this.produtos[x] = aux;
          }
        }
      }
    }
  }

  produtoSelecionado(produto){
      this.router.navigate(['/lista-de-produtos', produto.id])
  }

ngOnInit(): void {
}
}
