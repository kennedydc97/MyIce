import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  usuario = JSON.parse(sessionStorage.getItem("usuario"))

  constructor(public cliente: ClienteService) { 
    cliente.logado(); 
  }
  
  ngOnInit(): void {
  }
  
}
