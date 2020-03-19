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
  produtoLocal: produtoAPI[] = []


  constructor(private route: ActivatedRoute, private service: ProdutosService) {
    this.produtoId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.buscarProdutoId(this.produtoId).subscribe(
      produto => this.produtoTela = produto
    )
  }

  ngOnInit(): void {
    let produtosStorage = JSON.parse(localStorage.getItem("produtoCarrinho"))
    if (produtosStorage != null) {
      for (let i = 0; i < produtosStorage.length; i++) {
        if (produtosStorage != null) {
          this.produtoLocal.push(produtosStorage[i])
        }
      }
    }
  }

  salvarProduto() {
    let count = 0
    let produtos: produtoAPI[] = JSON.parse(localStorage.getItem("produtoCarrinho"))
    if (produtos != null) {
      for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].name == this.produtoTela.name)
          count++
      }
    }
    if (count == 0) {
      this.produtoLocal.push(this.produtoTela)
      let produto_json = JSON.stringify(this.produtoLocal)
      localStorage.setItem("produtoCarrinho", produto_json)
    }
  }

}