import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {

  formEsqueciSenha : FormGroup;

  constructor(private router: Router, private toastr: ToastrService, private cliente: ClienteService, private fb: FormBuilder) { }

  private createForm(): FormGroup{
    return this.fb.group({
      cliente:new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })
  }



  ngOnInit(): void {
    this.formEsqueciSenha = this.createForm();
  }
  recuperarSenha(){

    this.cliente.esqueciSenha(this.formEsqueciSenha).subscribe((data)=>{
     
        this.toastr.success("Sua nova senha foi enviada", "Verifique seu email!");
        this.router.navigate(['/login']);
    },(erro)=>{
      this.email.setErrors({emailInexistente: true})
    }
    );
    
  }

  get email() {
    return this.formEsqueciSenha.get('cliente');
  }
}