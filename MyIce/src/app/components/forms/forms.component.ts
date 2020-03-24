import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from 'src/app/models/Login';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formularioLogin: FormGroup


  constructor(private http: ClienteService) { }

  logar(){
    let usuario: Login = new Login()
    usuario.email = this.formularioLogin.value.email;
    usuario.password = this.formularioLogin.value.password;
      this.http.fazerLogin(usuario).subscribe(data => {
        console.log(data)
      })
      console.log("logado")
      console.log(this.formularioLogin)
    }


  ngOnInit() {

    this.formularioLogin = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

}
