import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Address } from 'src/app/models/Address';
import { CepService } from 'src/app/services/cep.service'
import { Validar } from 'src/app/models/Validar'

@Component({
  selector: 'app-cadastrar-endereco',
  templateUrl: './cadastrar-endereco.component.html',
  styleUrls: ['./cadastrar-endereco.component.css']
})
export class CadastrarEnderecoComponent implements OnInit {

  @Output() novoEndereco = new EventEmitter();
  formEntrega: FormGroup;
  validar: Validar;

  
  constructor(private cepService: CepService, private fb: FormBuilder) {
  }

 address: Address = new Address("","","","","","")


 private createForm(address: Address):FormGroup{
   return this.fb.group({
     cep:new FormControl("",
       Validators.compose([
           Validators.required,
           Validators.minLength(8),
           Validators.maxLength(8)]
       )
     ),
     logradouro:new FormControl("", 
       Validators.compose([Validators.required])),
     bairro:new FormControl("",
       Validators.compose([Validators.required])),
       nroEndereco:new FormControl("",
       Validators.compose([Validators.required])),
     complemento:new FormControl(""),
     uf:new FormControl("",
       Validators.compose([
         Validators.required

       ])),
     localidade:new FormControl("",
       Validators.compose([Validators.required]))
   });
 }


 permitirNumeros(evento: any) {
  this.validar.cancelarLetras(evento);
}




preencherEndereco(){
  if(this.formEntrega.value.cep.length == 8){
    this.cepService.getEnderecoViaCep(this.formEntrega.value.cep).subscribe(
      dados => {
        this.formEntrega.patchValue({
          localidade: dados.localidade,
          bairro: dados.bairro,
          uf: dados.uf,
          logradouro: dados.logradouro
        })
      }
    )
  }
}



//  pegarCep(){
//   this.cepService.getCep(this.formEntrega.value).subscribe((data) => {
//     this.address.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
//     this.formEntrega.controls['endereco'].patchValue(this.address.endereco);
//     this.formEntrega.controls['bairro'].patchValue(this.address.bairro);
//     this.formEntrega.controls['estado'].patchValue(this.address.estado);
//     this.formEntrega.controls['cidade'].patchValue(this.address.cidade);
//   })
// }


ngOnInit(): void {
    this.formEntrega = this.createForm(this.address);

   }
  }
  

  // envioEntrega() {
    //   this.conversaoEntrega = JSON.stringify(this.valoresForm);
    //   localStorage.setItem('Entrega', this.conversaoEntrega);
    // }
  
    // }
