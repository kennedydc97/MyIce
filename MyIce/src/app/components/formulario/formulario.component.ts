import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Address } from 'src/app/models/Address';
import { CepService } from 'src/app/services/cep.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { ValidacoesFormulario } from 'src/app/models/validacoesFormulario';
// import { Usuario } from './formu';
// import { FormularioNovoUsuario } from 'src/app/formularioNovoUsuario';
// import { ValidacoesFormulario } from 'src/app/validacoesFormulario';
import { Cadastro } from 'src/app/models/Cadastro';
// import { ClienteService } from 'src/app/services/cliente.service';
// import { Router } from '@angular/router';
// // import * as cep from 'cep-promise'
// // import { Formulario } from 'src/app/models/Formulario';
// // cep('05010000')
//   // .then(console.log)

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
  constructor(private fb: FormBuilder, private http: ClienteService, private router: Router, private cepService: CepService) {
    this.formularioDeUsuario = this.createForm(new Cadastro())
   }

  private createForm(c: Cadastro): FormGroup{
    return new FormGroup({
      nome: new FormControl(c.nome),
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
    this.http.cadastrarCliente(this.formularioDeUsuario.value).subscribe((data) => {
      let cadastro = JSON.stringify(data)
      sessionStorage.setItem("usuario", cadastro)
      this.router.navigate(['/home']);
      this.formularioDeUsuario.reset();
    })
  }

//   ngOnInit(): void {
//     this.criarFormularioDeUsuario();
//   }


 

//   // enviarDados() {
//   //   const dadosFormulario = this.formularioDeUsuario.value;

//   //   const usuario = new FormularioNovoUsuario(
//   //     dadosFormulario.nome,
//   //     dadosFormulario.email,
//   //     dadosFormulario.cpf,
//   //     dadosFormulario.nascimento,
//   //     dadosFormulario.senha,
//   //     dadosFormulario.tel,
//   //     dadosFormulario.cep,
//   //     dadosFormulario.endereco,
//   //     dadosFormulario.nroEndereco,
//   //     dadosFormulario.complemento,
//   //     dadosFormulario.bairro,
//   //     dadosFormulario.cidade,
//   //     dadosFormulario.estado,
//   //   );

//     // alert(`O usuário ${usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);

//   //   this.formularioDeUsuario.reset();
//   // }

//   // criarFormularioDeUsuario() {
//   //   this.formularioDeUsuario = this.fb.group(
//   //     {
//   //       nome: [
//   //         '',
//   //         Validators.compose([
//   //           Validators.required,
//   //           Validators.minLength(3),
//   //           Validators.maxLength(100)
//   //         ])
//   //       ],
//   //       email: ['', Validators.compose([Validators.email])],
//   //       cpf: [
//   //         '',
//   //         Validators.compose([Validators.required, ValidacoesFormulario.ValidaCpf])
//   //       ],
//   //       nascimento: [
//   //         '',
//   //         Validators.compose([Validators.required, ValidacoesFormulario.MaiorQue18Anos])
//   //       ],
//   //       senha: [
//   //         '',
//   //         Validators.compose([
//   //           Validators.required,
//   //           Validators.minLength(6),
//   //           Validators.maxLength(12)
//   //         ])
//   //       ],
//   //       confirmarSenha: ['', Validators.compose([Validators.required])],
//   //       cep: [
//   //         '',
//   //         Validators.compose([
  
  address: Address = new Address("","","","","","")
//   // validar: ValidacoesFormulario = new ValidacoesFormulario ()

//   // formCadastro: FormGroup;

//   // constructor(private router: Router, private fb: FormBuilder, private cepService: CepService, private clienteService: ClienteService) { }

//   private createForm():FormGroup{
//     return this.fb.group({
//       email:new FormControl("",
//         Validators.compose([
//           Validators.required,
//           Validators.email
//         ])
//       ),
//       senha:new FormControl('', Validators.compose([Validators.required])),
//       confirmaSenha:new FormControl('', Validators.compose([Validators.required])),
//       tel: new FormControl ('', Validators.compose([Validators.required,Validators.minLength(10),])),
//       nome:new FormControl("", Validators.compose([Validators.required])),
//       sobrenome:new FormControl("", Validators.compose([Validators.required])),
//       nasc:new FormControl("", Validators.compose([ ValidacoesFormulario.MaiorQue18Anos])),
//       cpf:new FormControl("", Validators.compose([
//         Validators.required,
//         Validators.minLength(11),
//         ValidacoesFormulario.ValidaCpf
//       ])),
//       cep:new FormControl("",
//         Validators.compose([
//             Validators.required,
//             Validators.minLength(8),
//           ])
//       ),
//       endereco:new FormControl("", 
//         Validators.compose([Validators.required])),
//       bairro:new FormControl("",
//         Validators.compose([Validators.required])),
//       numero:new FormControl("",
//         Validators.compose([Validators.required])),
//       complemento:new FormControl(""),
//       estado:new FormControl("",
//         Validators.compose([
//           Validators.required,
//           Validators.minLength(2),
//           Validators.maxLength(2)
//         ])),
//       cidade:new FormControl("",
//         Validators.compose([Validators.required]))
//     }, 
//     { validator: ValidacoesFormulario.SenhasCombinam});
//   }
  
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
    // this.formCadastro = this.createForm();
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

