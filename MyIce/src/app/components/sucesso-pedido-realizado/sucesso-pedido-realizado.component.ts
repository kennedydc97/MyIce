import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Pedido } from 'src/app/models/Pedido';

@Component({
  selector: 'app-sucesso-pedido-realizado',
  templateUrl: './sucesso-pedido-realizado.component.html',
  styleUrls: ['./sucesso-pedido-realizado.component.css']
})
export class SucessoPedidoRealizadoComponent implements OnInit {

  pedido: any;


  constructor( private cliente : ClienteService) { }

  ngOnInit(): void {   
    this.cliente.getPedidos().subscribe(
      dados => {
        this.pedido = dados;
        console.log(this.pedido)
      }
    )
  }
}


