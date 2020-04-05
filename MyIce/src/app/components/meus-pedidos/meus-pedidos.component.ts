import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {

  pedido: Pedido;

  constructor( private cliente : ClienteService) { }

  ngOnInit(): void {   
    this.cliente.getPedidos().subscribe(
      dados => {
        this.pedido = dados;
        console.log(this.pedido)
      }
    )
  }}