import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produtos';
import { Carrinho } from 'src/app/models/Carrinho';
import { produtoAPI } from 'src/app/models/produtoAPI';
import { StorageService } from 'src/app/services/storage.service'

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[] = [];
  subTotal: number = 0;
  total: number = 0;
  produtosCarrinho: any;

  
  constructor( private storage: StorageService ) { 
    this.buscarProduto()
    
   
    


    this.carrinho.forEach(item =>{
      this.subTotal += item.produto.precoDesconto * item.qtd;
    })
    storage.salvarCarrinho(this.carrinho);
    console.log(storage.recuperarCarrinho());
  }

  ngOnInit(): void {
  }

  aumentar(carrinho){
    carrinho.qtd++;
    this.subTotal += carrinho.produto.precoDesconto
    this.subTotal += carrinho.produto.vlProductDiscount
    this.storage.salvarCarrinho(this.carrinho);
  }

  diminuir(carrinho){
    if(carrinho.qtd > 1){
      carrinho.qtd--;      
      this.subTotal -= carrinho.produto.precoDesconto
      this.subTotal -= carrinho.produto.vlProductDiscount
      this.storage.salvarCarrinho(this.carrinho);
    }

  
  }
  excluirProduto(item){
    console.log(item)
    this.subTotal -= (item.produto.precoDesconto * item.qtd)
    this.carrinho = this.carrinho.filter(itemP => itemP != item)
    this.storage.salvarCarrinho(this.carrinho);
    }

    

  buscarProduto(){
    let produtos = JSON.parse(localStorage.getItem("produtoCarrinho"))
    for(let i = 0; i < produtos.length; i++){
      this.produtosCarrinho.push(produtos[i])
    }
    return produtos == null ? [] : produtos.produto
  }
}
