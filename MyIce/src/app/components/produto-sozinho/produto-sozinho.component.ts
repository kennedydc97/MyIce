import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProdutosService } from 'src/app/services/produtos.service';
import { produtoAPI } from 'src/app/models/produtoAPI';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-produto-sozinho',
  templateUrl: './produto-sozinho.component.html',
  styleUrls: ['./produto-sozinho.component.css']
})
export class ProdutoSozinhoComponent implements OnInit {

  public produtoId;
  produtoTela: produtoAPI;
  produtoLocal=[]


  constructor(private route: ActivatedRoute, private service: ProdutosService) {
    this.produtoId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.buscarProdutoId(this.produtoId).subscribe(
      produto => this.produtoTela = produto 
    )
  }

  ngOnInit(): void {
    let teste = JSON.parse(localStorage.getItem("produtoCarrinho"))
    for(let i = 0; i<teste.length; i++){
      if(teste != null){
        this.produtoLocal.push(teste[i])
      }
    }
  }

  salvarProduto(){
    let count = 0
    let produtos = JSON.parse(localStorage.getItem("produtoCarrinho"))
    for(let i = 0; i < this.produtoLocal.length; i++){
      if(produtos[i] == this.produtoTela){
        count++
      }
    }
    if(count == 0){
    this.produtoLocal.push(this.produtoTela)
    let produto_json = JSON.stringify(this.produtoLocal)
    localStorage.setItem("produtoCarrinho", produto_json)
    }
  }

}