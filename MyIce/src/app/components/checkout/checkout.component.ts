import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { StorageService } from 'src/app/services/storage.service'
import { Carrinho } from 'src/app/models/Carrinho';
import { Pagamento } from 'src/app/models/Pagamento';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  formPagamento
  carrinho: Carrinho[] = [];
  subTotal: number = 0;
  total: number = 0;
  valoresForm
  conversao

  // constructor(private cepService: CepService) {
  //   this.formEntrega = this.createForm(new Entrega());
  //  }

  // address: Address = new Address("","","","","","")

  // formEntrega: FormGroup

  // private createForm(entrega: Entrega) {
  //   return new FormGroup({
  //     cod: new FormControl(entrega.codEntrega),
  //     cep: new FormControl(entrega.CEPUsuario),
  //     endereco: new FormControl(entrega.enderecoUsuario),
  //     nroEndereco: new FormControl(entrega.numeroEndereco),
  //     complemento: new FormControl(entrega.complementoEndereco),
  //     bairro: new FormControl(entrega.bairro),
  //     cidade: new FormControl(entrega.cidade),
  //     estado: new FormControl(entrega.estado),
  //   })
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



  constructor(private storage: StorageService, private fb: FormBuilder) {

    this.carrinho = storage.recuperarCarrinho()

    console.log(storage.recuperarCarrinho());
  }

  data: string;

  // private createForm(pagamento: Pagamento): FormGroup {
  //   return new FormGroup({
  //     numero: new FormControl(pagamento.numero),
  //     vencimento: new FormControl(pagamento.vencimento),
  //     cvv: new FormControl(pagamento.cvv),
  //     nomeTitular: new FormControl(pagamento.nomeTitular),
  //     cpf: new FormControl(pagamento.cpf)
  //   })
  // }



  cpfMask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, "-", /\d/, /\d/];
  numeroCartao = [/[0-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/]
  cvv = [/[0-9]/, /\d/, /\d/]




  ngOnInit(): void {

    this.formPagamento = this.fb.group({
      numero: [''],
      vencimento: [''],
      cvv: [''],
      nomeTitular: [''],
      cpf: ['']

    });
    console.log(this.valoresForm);
    this.formPagamento.valueChanges.pipe(
      debounceTime(1000)).subscribe(res => {
        console.log(res); 
        this.valoresForm = res;
      });
  }




  compraRealizada() {
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('Pagamento', this.conversao);
  }
}
