import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produtos';
import { ActivatedRoute } from '@angular/router'
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-pagina-do-cliente',
  templateUrl: './pagina-do-cliente.component.html',
  styleUrls: ['./pagina-do-cliente.component.css']
})
export class PaginaDoClienteComponent implements OnInit {

  produtos: Produto[] = [];

  public produtoId;
  produtoTela: Produto;

  constructor(private route: ActivatedRoute, private service: ProdutosService) { }

  ngOnInit(): void {
    this.produtoId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.buscarProdutoId(this.produtoId).subscribe()
  }

}
