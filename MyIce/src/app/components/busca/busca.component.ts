import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  constructor(private route: ActivatedRoute, public produtoService: ProdutosService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params['palavra'])
      this.produtoService.buscarProduto(params['palavra'])
    })
  }

  resultadoBusca(){
    if(this.produtoService.produtosFiltrados.length < 1){
      return true;
    }else{
      return false
    }
  }
}
