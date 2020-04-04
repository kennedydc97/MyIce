import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { ValidacoesFormulario } from 'src/app/models/validacoesFormulario';



@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  atualizarCliente: FormGroup;
  usuario: any;
  validar: ValidacoesFormulario = new ValidacoesFormulario();

  constructor(public cliente: ClienteService, private fb: FormBuilder) {
    cliente.logado();
    if (sessionStorage.getItem("usuario") != null) {
      this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    }
  }
 
 
  private createForm():FormGroup{
    return this.fb.group({
      email:new FormControl(this.usuario.email,
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      cpf:new FormControl(this.usuario.cpf, Validators.compose([
        Validators.required,
        Validators.minLength(11),
        ValidacoesFormulario.ValidaCpf
      ])),
      tel: new FormControl (this.usuario.telefone, Validators.compose([Validators.required,Validators.minLength(10),])),
      nome:new FormControl(this.usuario.nome, Validators.compose([Validators.required])),
  }
    )}

  ngOnInit(): void {
    this.atualizarCliente = this.createForm();
  }

}
