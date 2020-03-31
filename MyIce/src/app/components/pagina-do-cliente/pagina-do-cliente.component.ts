import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-do-cliente',
  templateUrl: './pagina-do-cliente.component.html',
  styleUrls: ['./pagina-do-cliente.component.css']
})
export class PaginaDoClienteComponent implements OnInit {

  	usuario:any;

  constructor(public cliente: ClienteService) { 
    cliente.logado();
    if(sessionStorage.getItem("usuario") != null){
      this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    }
  }


  

  ngOnInit(): void {}

}
