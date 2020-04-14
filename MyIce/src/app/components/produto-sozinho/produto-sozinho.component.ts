import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProdutosService } from 'src/app/services/produtos.service';
import { produtoAPI } from 'src/app/models/produtoAPI';
import { Carrinho } from 'src/app/models/Carrinho';


@Component({
  selector: 'app-produto-sozinho',
  templateUrl: './produto-sozinho.component.html',
  styleUrls: ['./produto-sozinho.component.css']
})
export class ProdutoSozinhoComponent implements OnInit {

  public produtoId;
  produtoTela: produtoAPI;
  produto: any = [];
  produtoFiltrado: any = [];
  produtoLocal: Carrinho[] = []


  constructor(private route: ActivatedRoute, private service: ProdutosService) {
    this.produtoId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.buscarProdutoId(this.produtoId).subscribe(
      (produto) => {
        this.produtoTela = produto;
        this.getter();
      }
    )

    console.log(this.produtoFiltrado)

  }

  ngOnInit(): void {
    let produtosStorage = JSON.parse(localStorage.getItem("carrinho"))
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
    let carrinho: Carrinho[] = JSON.parse(localStorage.getItem("carrinho"))
    if (carrinho != null) {
      for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].produto.idProduto == this.produtoTela.idProduto)
          count++
      }
    }
    if (count == 0) {
      this.produtoLocal.push(new Carrinho(this.produtoTela))
      let produto_json = JSON.stringify(this.produtoLocal)
      localStorage.setItem("carrinho", produto_json)
    }
  }

  getter() {
    this.service.getProdutos().subscribe(
      (data: produtoAPI) => {
        console.log(data)
        this.produto = data
        this.produtoFiltrado = this.produto.filter((event) => {
          return event.categoria.idCategoria == this.produtoTela.categoria.idCategoria
        });
      }, (error: any) => {
        console.log("ERROR", error)
      })
  }

  // produtosRelacionados() {
  //   this.service.getProdutosRelacionados(this.produtoTela.categoria.idCategoria).subscribe(
  //     (data: produtoAPI) => {
  //       console.log(data)
  //       this.produto = data
  //       this.produtoFiltrado = this.produto.filter(produto => {
  //         produto.idProduto == this.produtoTela.idProduto
  //       });
  //     }, (error: any) => {
  //       console.log("ERROR", error)
  //     })
  // }


}
