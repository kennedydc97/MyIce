import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriaAPI } from 'src/app/models/categoriaAPI';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Output() categoriaClicada = new EventEmitter();


  categoriaAPI: CategoriaAPI;
  erro: any;

  getter() {
    this.serviceProduto.getCategoria().subscribe(
      (data: CategoriaAPI) => {
        this.categoriaAPI = data;
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
