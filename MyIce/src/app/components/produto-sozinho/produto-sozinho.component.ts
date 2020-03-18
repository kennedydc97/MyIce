import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/models/Produtos';
import { ActivatedRoute } from '@angular/router'
import { ServicesService } from 'src/app/services/services.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { produtoAPI } from 'src/app/models/produtoAPI';

@Component({
  selector: 'app-produto-sozinho',
  templateUrl: './produto-sozinho.component.html',
  styleUrls: ['./produto-sozinho.component.css']
})
export class ProdutoSozinhoComponent implements OnInit {

  public produtoId;
  produtoTela: produtoAPI;


  constructor(private route: ActivatedRoute, private service: ProdutosService) {

  }

  ngOnInit(): void {
    this.produtoId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.buscarProdutoId(this.produtoId).subscribe(
      produto => this.produtoTela = produto
    )
  }

  salvarProduto(){
    let produto = this.produtoTela
    let produto_json = JSON.stringify(this.produtoTela)
    localStorage.setItem("produto", produto_json)
  }

}