import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';



@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  atualizarCliente: FormGroup;
  usuario: any;

  constructor(public cliente: ClienteService) {
    cliente.logado();
    if (sessionStorage.getItem("usuario") != null) {
      this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    }
  }

  onSubmit(): void {
    let promise = this.cliente.update(this.usuario);
  }

  ngOnInit(): void {
  }

}
