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
  pedidos: Pedido[] = [];

  constructor(private cliente: ClienteService, private router: Router) {
    this.cliente.getPedidosLista().subscribe(
      (dados: Pedido[]) => {
        console.log(dados)
        this.pedidos = dados;
        console.log(this.pedidos)
      }
    )


  }

  pedidoSelecionado(pedido) {
    this.router.navigate(['/detalhes-pedido', pedido])
  }

  ngOnInit(): void {

  }

}
