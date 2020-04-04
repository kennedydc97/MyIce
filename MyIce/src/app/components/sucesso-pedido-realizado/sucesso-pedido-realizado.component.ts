import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Pedido } from 'src/app/models/Pedido';
import { Endereco } from 'src/app/models/endereco';

@Component({
  selector: 'app-sucesso-pedido-realizado',
  templateUrl: './sucesso-pedido-realizado.component.html',
  styleUrls: ['./sucesso-pedido-realizado.component.css']
})
export class SucessoPedidoRealizadoComponent implements OnInit {

  pedido: Pedido;
  endereco: Endereco;


  constructor( private cliente : ClienteService) { }

  ngOnInit(): void {   
    this.cliente.getPedidos().subscribe(
      dados => {
        this.pedido = dados;
        console.log(this.pedido)
      }
    )
  }

  enderecoEntrega() : void {
    this.cliente.getEnderecos().subscribe(
      dados => {
        this.endereco = dados;
        console.log(this.endereco)
      }
    )
  }

  
   
}


