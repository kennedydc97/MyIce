// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from "@angular/forms";
// import { Formulario } from 'src/app/models/Formulario';
// import { Address } from 'src/app/models/Address';
// import { CepService } from 'src/app/services/cep.service';

// @Component({
//   selector: 'app-formulario',
//   templateUrl: './formulario.component.html',
//   styleUrls: ['./formulario.component.css']
// })
// export class FormularioComponent implements OnInit {

//   constructor(private cepService: CepService) {
//     this.formFormulario = this.createForm(new Formulario());

//   }

//   address: Address = new Address("", "", "", "", "", "")


//   formFormulario: FormGroup;
// ''
//   private createForm(formulario: Formulario) {
//     return new FormGroup({
//       cod: new FormControl(formulario.codFormulario),
//       cep: new FormControl(formulario.CEPUsuario),
//       endereco: new FormControl(formulario.enderecoUsuario),
//       nroEndereco: new FormControl(formulario.numeroEndereco),
//       complemento: new FormControl(formulario.complementoEndereco),
//       bairro: new FormControl(formulario.bairro),
//       cidade: new FormControl(formulario.cidade),
//       estado: new FormControl(formulario.estado),
//       cpf: new FormControl(formulario.cpf),
//       nome: new FormControl(formulario.nome),
//       tel: new FormControl(formulario.tel),
//       email: new FormControl(formulario.email),
//       senha: new FormControl(formulario.senha),

//     })
//   }



//   pegarCep() {
//     this.cepService.getCep(this.formFormulario.value).subscribe((data) => {
//       this.address.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
//       this.formFormulario.controls['endereco'].patchValue(this.address.endereco);
//       this.formFormulario.controls['bairro'].patchValue(this.address.bairro);
//       this.formFormulario.controls['estado'].patchValue(this.address.estado);
//       this.formFormulario.controls['cidade'].patchValue(this.address.cidade);
//     })
//   }



//   // compraRealizada(){
//   //   console.log(this.formFormulario.value)
//   // }




//   onSubmit() {
//     // aqui você pode implementar a logica para fazer seu formulário salvar
//     console.log(this.formFormulario);
//     // Usar o método reset para limpar os controlesfna tela
//     this.formFormulario.reset(new Formulario());
//   }






//   ngOnInit(): void {
//   }
// }








// --------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
// import { Usuario } from './formu';
import { FormularioNovoUsuario } from 'src/app/formularioNovoUsuario';
import { ValidacoesFormulario } from 'src/app/validacoesFormulario';
import { Cadastro } from 'src/app/models/Cadastro';
// import * as cep from 'cep-promise'
// import { Formulario } from 'src/app/models/Formulario';
// cep('05010000')
  // .then(console.log)

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  // Aqui damos um nome para nosso formulário
  // E ele precisa ser do tipo FormGroup
  formularioDeUsuario: FormGroup;

  formCadastro: FormGroup;

  // Via DI, nós obtemos o FormBuilder.
  constructor(private fb: FormBuilder) {
    this.formularioDeUsuario = this.createForm(new Cadastro())
   }

  private createForm(c: Cadastro): FormGroup{
    return new FormGroup({
      nome: new FormControl(c.name),
      nascimento: new FormControl(c.nasc),
      cpf: new FormControl(c.cpf),
      tel: new FormControl(c.tel),
      email: new FormControl(c.email),
      senha: new FormControl(c.senha),
      confirmarSenha: new FormControl(c.confirmarSenha),
      cep: new FormControl(c.cep),
      endereco: new FormControl(c.endereco),
      nroEndereco: new FormControl(c.numeroCasa),
      complemento: new FormControl(c.complementoCasa),
      bairro: new FormControl(c.bairro),
      cidade: new FormControl(c.cidade),
      estado: new FormControl(c.estado)
    });
  }

  enviarCadastro(){
    console.log(this.formularioDeUsuario)
  }

  ngOnInit(): void {
    this.criarFormularioDeUsuario();
  }


 

  enviarDados() {
    const dadosFormulario = this.formularioDeUsuario.value;

    const usuario = new FormularioNovoUsuario(
      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.cpf,
      dadosFormulario.nascimento,
      dadosFormulario.senha,
      dadosFormulario.tel,
      dadosFormulario.cep,
      dadosFormulario.endereco,
      dadosFormulario.nroEndereco,
      dadosFormulario.complemento,
      dadosFormulario.bairro,
      dadosFormulario.cidade,
      dadosFormulario.estado,
    );

    // alert(`O usuário ${usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);

    this.formularioDeUsuario.reset();
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group(
      {
        nome: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ])
        ],
        email: ['', Validators.compose([Validators.email])],
        cpf: [
          '',
          Validators.compose([Validators.required, ValidacoesFormulario.ValidaCpf])
        ],
        nascimento: [
          '',
          Validators.compose([Validators.required, ValidacoesFormulario.MaiorQue18Anos])
        ],
        senha: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
        ],
        confirmarSenha: ['', Validators.compose([Validators.required])],
        cep: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8)
          ])
        ],
        cidade: [
          '',
          Validators.compose([
            Validators.required,

          ])
        ],
        estado: [
          '',
          Validators.compose([
            Validators.required,
          ])
        ],
        bairro: [
          '',
          Validators.compose([
            Validators.required,
          ])
        ],
        complemento: [
          '',
          Validators.compose([
          ])
        ],
        endereco: [
          '',
          Validators.compose([
            Validators.required,
          ])
        ],
        nroEndereco: [
          '',
          Validators.compose([
            Validators.required,
            
          ])
        ],
        tel: [
          '',
          Validators.compose([
            Validators.required,
          ])
        ],
      },
      
      {
        validator: ValidacoesFormulario.SenhasCombinam
      }
    );
  }

  // Propriedades do formulário que vamos utilizar para obter os erros
  get nome() {
    return this.formularioDeUsuario.get('nome');
  }

  get email() {
    return this.formularioDeUsuario.get('email');
  }

  get cpf() {
    return this.formularioDeUsuario.get('cpf');
  }

  get nascimento() {
    return this.formularioDeUsuario.get('nascimento');
  }

  get senha() {
    return this.formularioDeUsuario.get('senha');
  }

  get confirmarSenha() {
    return this.formularioDeUsuario.get('confirmarSenha');
  }

  //   onSubmit() {
  //   // aqui você pode implementar a logica para fazer seu formulário salvar
  //   console.log(this.formularioDeUsuario);
  //   // Usar o método reset para limpar os controlesfna tela
  //   this.formularioDeUsuario.reset(new FormGroup());
  // }


  //   constructor(private cepService: CepService) {
  //     this.formFormulario = this.createForm(new Formulario());

  //   }

  //   address: Address = new Address("", "", "", "", "", "")


  //   formFormulario: FormGroup;
  // ''
  //   private createForm(formulario: Formulario) {
  //     return new FormGroup({
  //       cod: new FormControl(formulario.codFormulario),
  //       cep: new FormControl(formulario.CEPUsuario),
  //       endereco: new FormControl(formulario.enderecoUsuario),
  //       nroEndereco: new FormControl(formulario.numeroEndereco),
  //       complemento: new FormControl(formulario.complementoEndereco),
  //       bairro: new FormControl(formulario.bairro),
  //       cidade: new FormControl(formulario.cidade),
  //       estado: new FormControl(formulario.estado),
  //       cpf: new FormControl(formulario.cpf),
  //       nome: new FormControl(formulario.nome),
  //       tel: new FormControl(formulario.tel),
  //       email: new FormControl(formulario.email),
  //       senha: new FormControl(formulario.senha),

  //     })
  //   }



}