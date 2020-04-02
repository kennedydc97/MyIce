import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from 'src/app/models/Login';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators';
import { Cadastro } from 'src/app/models/Cadastro';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formularioLogin: FormGroup
  usuario: Cadastro


  constructor(private http: ClienteService, private router: Router) {
    if (sessionStorage.getItem("usuario") != null) {
      this.router.navigate(['/home']);
    }
  }

  logar() {
    let usuario: Login = new Login()
    usuario.email = this.formularioLogin.value.email;
    usuario.password = this.formularioLogin.value.password;
    this.http.fazerLogin(usuario).subscribe(data => {
      let cliente = JSON.stringify(data)
      sessionStorage.setItem("usuario", btoa(cliente));
      this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
      this.http.disparaEventoClienteLogado(this.usuario)
      // location.reload()
      this.router.navigate(['/home']);
      // console.log(data)
    })
    // console.log("logado")
    // console.log(this.formularioLogin)
  }


  ngOnInit() {

    this.formularioLogin = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

}
