import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from 'src/app/models/Produtos';
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
      id: new FormControl(p.idProduct),
      imagem: new FormControl(p.image),
      titulo: new FormControl(p.name),
      desc: new FormControl(p.description),
      precoCheio: new FormControl(p.vlProductFull),
      precoDesconto: new FormControl(p.vlProductDiscount),
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
