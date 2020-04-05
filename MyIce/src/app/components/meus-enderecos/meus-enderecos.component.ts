import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-meus-enderecos',
  templateUrl: './meus-enderecos.component.html',
  styleUrls: ['./meus-enderecos.component.css']
})
export class MeusEnderecosComponent implements OnInit {

  @Input() endereco;


  principalEndereco = null;
  enderecos = [];
  usuario;

  constructor(private cliente: ClienteService) { 
    this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    this.cliente.buscarEndereco(this.usuario.idCliente).subscribe(
         dados => {
          this.enderecos = dados
          console.log(this.enderecos)
          if (this.enderecos.length > 0) {
            this.principalEndereco = this.enderecos[0];
          }
        }
      );
  }

  ngOnInit(): void {
  }

}
