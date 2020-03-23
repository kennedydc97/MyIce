import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Address } from 'src/app/models/Address';
import { CepService } from 'src/app/services/cep.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { ValidacoesFormulario } from 'src/app/models/validacoesFormulario';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  address: Address = new Address("","","","","","")
  validar: ValidacoesFormulario = new ValidacoesFormulario ()

  formCadastro: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private cepService: CepService, private clienteService: ClienteService) { }

  private createForm():FormGroup{
    return this.fb.group({
      email:new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      senha:new FormControl('', Validators.compose([Validators.required])),
      confirmaSenha:new FormControl('', Validators.compose([Validators.required])),
      tel: new FormControl ('', Validators.compose([Validators.required,Validators.minLength(10),])),
      nome:new FormControl("", Validators.compose([Validators.required])),
      sobrenome:new FormControl("", Validators.compose([Validators.required])),
      nasc:new FormControl("", Validators.compose([ ValidacoesFormulario.MaiorQue18Anos])),
      cpf:new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(11),
        ValidacoesFormulario.ValidaCpf
      ])),
      cep:new FormControl("",
        Validators.compose([
            Validators.required,
            Validators.minLength(8),
          ])
      ),
      endereco:new FormControl("", 
        Validators.compose([Validators.required])),
      bairro:new FormControl("",
        Validators.compose([Validators.required])),
      numero:new FormControl("",
        Validators.compose([Validators.required])),
      complemento:new FormControl(""),
      estado:new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2)
        ])),
      cidade:new FormControl("",
        Validators.compose([Validators.required]))
    }, 
    { validator: ValidacoesFormulario.SenhasCombinam});
  }
  
  pegarCep(){
    this.cepService.getCep(this.formCadastro.value).subscribe((data) => {
      this.address.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
      this.formCadastro.controls['endereco'].patchValue(data.logradouro);
      this.formCadastro.controls['bairro'].patchValue(data.bairro);
      this.formCadastro.controls['estado'].patchValue(data.uf);
      this.formCadastro.controls['cidade'].patchValue(data.localidade);
    })
  }
  
  ngOnInit() {
    this.formCadastro = this.createForm();
  }
  get numero() {
    return this.formCadastro.get('numero');
  }
  get cep() {
    return this.formCadastro.get('cep');
  }
  get sobrenome() {
    return this.formCadastro.get('sobrenome');
  }
  get nome() {
    return this.formCadastro.get('nome');
  }

  get senha() {
    return this.formCadastro.get('senha');
  }

  get email() {
    return this.formCadastro.get('email');
  }
  get tel() {
    return this.formCadastro.get('tel');
  }

  get cpf() {
    return this.formCadastro.get('cpf');
  }

  get nasc() {
    return this.formCadastro.get('nasc');
  }

   
  get confirmaSenha() {
    return this.formCadastro.get('confirmaSenha');
  }



}

