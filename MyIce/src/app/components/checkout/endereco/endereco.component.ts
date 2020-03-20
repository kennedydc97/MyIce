import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { Entrega } from 'src/app/models/Entrega';
import { Address } from 'src/app/models/Address';
import { CepService } from 'src/app/services/cep.service';


@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  conversaoEntrega;
  valoresForm;

  @Input() endereco;

  constructor()  {}


    // constructor(private cepService: CepService, private fb: FormBuilder) {
    //  }
  
    // address: Address = new Address("","","","","","")
  
    // formEntrega: FormGroup
  
  
    // private createForm(address: Address):FormGroup{
    //   return this.fb.group({
    //     cep:new FormControl("",
    //       Validators.compose([
    //           Validators.required,
    //           Validators.minLength(8),
    //           Validators.maxLength(8)]
    //       )
    //     ),
    //     endereco:new FormControl("", 
    //       Validators.compose([Validators.required])),
    //     bairro:new FormControl("",
    //       Validators.compose([Validators.required])),
    //       nroEndereco:new FormControl("",
    //       Validators.compose([Validators.required])),
    //     complemento:new FormControl(""),
    //     estado:new FormControl("",
    //       Validators.compose([
    //         Validators.required

    //       ])),
    //     cidade:new FormControl("",
    //       Validators.compose([Validators.required]))
    //   });
    // }
  
  
  
    // pegarCep(){
    //   this.cepService.getCep(this.formEntrega.value).subscribe((data) => {
    //     this.address.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
    //     this.formEntrega.controls['endereco'].patchValue(this.address.endereco);
    //     this.formEntrega.controls['bairro'].patchValue(this.address.bairro);
    //     this.formEntrega.controls['estado'].patchValue(this.address.estado);
    //     this.formEntrega.controls['cidade'].patchValue(this.address.cidade);
    //   })
    // }
  
    // cep = [ /[0-9]/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/ ]

     ngOnInit(): void {
    //   this.formEntrega = this.createForm(this.address);

     }
    }
    
    // envioEntrega() {
    //   this.conversaoEntrega = JSON.stringify(this.valoresForm);
    //   localStorage.setItem('Entrega', this.conversaoEntrega);
    // }
  
    // }