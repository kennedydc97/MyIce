import { Component, OnInit } from '@angular/core';
import { Carrinho } from 'src/app/models/Carrinho';
import { StorageService } from 'src/app/services/storage.service'
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho [];
  subTotal: number = 0;
  total: number = 0;
  produtosCarrinho = []

  constructor( private storage: StorageService, private cliente: ClienteService, private router: Router ) { 

    console.log(storage.recuperarCarrinho());
    if(this.storage.recuperarCarrinho() != null){
      this.carrinho = this.storage.recuperarCarrinho()
      this.carrinho.forEach(item =>{
        this.subTotal += item.produto.precoDesconto * item.qtd;
      })
    }
    console.log(this.carrinho);

  }

  ngOnInit(): void {
  }

  aumentar(carrinho){
    carrinho.qtd++;
    this.subTotal += carrinho.produto.precoDesconto
    this.storage.salvarCarrinho(this.carrinho);
  }

  diminuir(carrinho){
    if(carrinho.qtd > 1){
      carrinho.qtd--;      
      this.subTotal -= carrinho.produto.precoDesconto
      this.storage.salvarCarrinho(this.carrinho);
    }

  
  }
  excluirProduto(item){
    console.log(item)
    this.subTotal -= (item.produto.precoDesconto * item.qtd)
    this.carrinho = this.carrinho.filter(itemP => itemP != item)
    this.storage.salvarCarrinho(this.carrinho);
    }

  entrarCheckout(){
    if(!this.cliente.logado()){
      this.router.navigate(["/checkout"])
    }else{
      alert("você precisa estar logado")
      this.router.navigate(["/login"])
    }
  }
}

