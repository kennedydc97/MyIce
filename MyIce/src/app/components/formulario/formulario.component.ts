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
import { ValidacoesFormulario } from 'src/app/validacoesFormulario';
import { Formulario } from 'src/app/models/Formulario';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  // Aqui damos um nome para nosso formulário
  // E ele precisa ser do tipo FormGroup
  formularioDeUsuario: FormGroup;

  // Via DI, nós obtemos o FormBuilder.
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormularioDeUsuario();
  }

  enviarDados() {
    const dadosFormulario = this.formularioDeUsuario.value;

    const formu = new Formulario(
      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.cpf,
      dadosFormulario.nascimento,
      dadosFormulario.senha
    );

    alert(`O usuário ${formu.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(formu)}`);

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
        confirmarSenha: ['', Validators.compose([Validators.required])]
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
}