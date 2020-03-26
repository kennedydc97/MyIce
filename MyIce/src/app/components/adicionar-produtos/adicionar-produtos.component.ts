import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { produtoAPI } from 'src/app/models/produtoAPI';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrls: ['./adicionar-produtos.component.css']
})
export class AdicionarProdutosComponent implements OnInit {

  formProduto: FormGroup;
  constructor() {
    this.formProduto = this.createForm(new produtoAPI());
   }

  private createForm(p: produtoAPI):FormGroup{
    return new FormGroup({
      id: new FormControl(p.idProduto),
      imagem: new FormControl(p.imagem),
      titulo: new FormControl(p.nome),
      desc: new FormControl(p.descricao),
      precoCheio: new FormControl(p.precoCheio),
      precoDesconto: new FormControl(p.precoDesconto),
      // idCategoria: new FormControl(p.group.groupCode),
      // descCategoria: new FormControl(p.group.description)
    })
  }

  enviarProduto(){
    console.log(this.formProduto)
  }

  ngOnInit(): void {
  }

}