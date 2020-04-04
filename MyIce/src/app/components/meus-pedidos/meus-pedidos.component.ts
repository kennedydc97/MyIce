import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {

  pedido: Pedido;
  pedidos: Pedido [] = [];
  teste: any[]


  constructor(private cliente : ClienteService, private router: Router) {
    this.cliente.getPedidosLista().subscribe(
      (dados: Pedido[]) => {
        console.log(dados)
        this.pedidos = dados;
        this.teste = this.pedidos
        console.log(this.teste);
        
        console.log(this.pedidos)
      }
    )
  }

  ngOnInit(): void {
    
  }

}
