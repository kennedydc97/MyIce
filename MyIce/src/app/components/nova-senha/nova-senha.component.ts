import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { ValidacoesFormulario } from 'src/app/models/validacoesFormulario';


@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.css']
})
export class NovaSenhaComponent implements OnInit {
  validar: ValidacoesFormulario = new ValidacoesFormulario ()
  usuario: any;
  formSenha: FormGroup;

  constructor(private toastr: ToastrService, private fb: FormBuilder, private cliente: ClienteService, private router: Router) {


    cliente.logado();
    if (sessionStorage.getItem("usuario") != null) {
      this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    }


  }
 
  


  private createForm():FormGroup{
    return this.fb.group({
        email:new FormControl("",
            Validators.compose([
              Validators.email
            ])
          ),
      senhaAtual:new FormControl('', Validators.compose([Validators.required])),
      novaSenha:new FormControl("", Validators.compose([Validators.required])),
      confirmaSenha:new FormControl("", Validators.compose([Validators.required])),
    
    },     { validator: ValidacoesFormulario.senhasNovasCombinam});

  }

  enviarSenhaNova(){
    this.cliente.alterarSenha(this.formSenha).subscribe(
      (data) => {
        this.toastr.success("", "Senha alterada com sucesso!");
        this.router.navigate(['/minha-conta'])
      }, (erro) => {
        this.toastr.error("Senha atual incorreta", "Falha ao alterar senha");
      }
    )
  }

 

  ngOnInit(): void {
    this.formSenha = this.createForm();

  }


    
  get confirmaSenha() {
    return this.formSenha.get('confirmaSenha');
  }



  
  get novaSenha() {
    return this.formSenha.get('novaSenha');
  }

  get email() {
    return this.formSenha.get('email');
  }
}