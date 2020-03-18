import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

 
  constructor() { }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formularioDeUsuario);
    // Usar o método reset para limpar os controlesfna tela
  }

  ngOnInit(): void {
  }


}
