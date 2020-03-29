import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  usuario: any
  
  constructor(public cliente: ClienteService) { 
    cliente.logado();
    if(sessionStorage.getItem("usuario") != null){
      this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    }
  }

  logout(){
    sessionStorage.removeItem("usuario")
  }
  
  ngOnInit(): void {
  }
}
