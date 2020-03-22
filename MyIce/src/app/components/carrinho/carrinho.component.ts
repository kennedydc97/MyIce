import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produtos';
import { Carrinho } from 'src/app/models/Carrinho';
<<<<<<< HEAD
=======
import { produtoAPI } from 'src/app/models/produtoAPI';
import { StorageService } from 'src/app/services/storage.service'
>>>>>>> a4af297c892a9b366d4305d7ea41a464d564ede3

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[] = [];
  subTotal: number = 0;
  total: number = 0;

<<<<<<< HEAD
  constructor() { 
    this.carrinho.push(
      new Carrinho(new Produto(2, "assets/gelodecoco.png", "Gelo de Coco", "", 16.65, 15, 3), 1),
      new Carrinho(new Produto(4, "assets/produto4.jpg", "Tech Gel", "", 27, 24, 2), 1),
    )
=======
  constructor( private storage: StorageService ) { 
    this.buscarProduto()
    
    for(let i = 0; i < this.produtosCarrinho.length; i++){
      this.carrinho.push(new Carrinho(this.produtosCarrinho[i]))
    }
>>>>>>> a4af297c892a9b366d4305d7ea41a464d564ede3
    


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
<<<<<<< HEAD
    this.subTotal += carrinho.produto.precoDesconto
=======
    this.subTotal += carrinho.produto.vlProductDiscount
    this.storage.salvarCarrinho(this.carrinho);
>>>>>>> a4af297c892a9b366d4305d7ea41a464d564ede3
  }

  diminuir(carrinho){
    if(carrinho.qtd > 1){
      carrinho.qtd--;      
<<<<<<< HEAD
      this.subTotal -= carrinho.produto.precoDesconto
=======
      this.subTotal -= carrinho.produto.vlProductDiscount
      this.storage.salvarCarrinho(this.carrinho);
>>>>>>> a4af297c892a9b366d4305d7ea41a464d564ede3
    }

  
  }
  excluirProduto(item){
    console.log(item)
    this.subTotal -= (item.produto.precoDesconto * item.qtd)
    this.carrinho = this.carrinho.filter(itemP => itemP != item)
    this.storage.salvarCarrinho(this.carrinho);
    }

<<<<<<< HEAD
    

=======
  buscarProduto(){
    let produtos = JSON.parse(localStorage.getItem("produtoCarrinho"))
    for(let i = 0; i < produtos.length; i++){
      this.produtosCarrinho.push(produtos[i])
    }
    return produtos == null ? [] : produtos.produto
  }
>>>>>>> a4af297c892a9b366d4305d7ea41a464d564ede3
}

