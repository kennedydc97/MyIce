import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { StorageService } from 'src/app/services/storage.service'
import { Carrinho } from 'src/app/models/Carrinho';
import { debounceTime } from 'rxjs/operators';
import { Validar } from 'src/app/models/Validar'
import { Pagamento } from 'src/app/models/Pagamento';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  carrinho: Carrinho[] = [];
  subTotal: number = 0;
  total: number = 0;
  valoresForm;
  conversao;

  validar: Validar = new Validar ()
  produtosCarrinho = []
  formPagamento: FormGroup;


  constructor(private storage: StorageService, private fb: FormBuilder) {

    this.carrinho = storage.recuperarCarrinho()
    console.log(storage.recuperarCarrinho());

  }


  private createForm(): FormGroup {
    return this.fb.group({
      numero: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)
      ])),
      vencimento: new FormControl('', Validators.compose([Validators.required
      ])),
      cvv: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ])),
      nomeTitular: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])),
      cpf: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11),
        Validar.validarCpf
      ]))

    });


  }

  buscarProduto(){
    let produtos = JSON.parse(localStorage.getItem("produtoCarrinho"))
    for(let i = 0; i < produtos.length; i++){
      this.produtosCarrinho.push(produtos[i])
    }
    return produtos == null ? [] : produtos.produto
  }
  

  // cpfMask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, "-", /\d/, /\d/];
  // numeroCartao = [/[0-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/]
  // cvv = [/[0-9]/, /\d/, /\d/]


permitirNumeros(evento:any){
  this.validar.cancelarLetras(evento);
}


  get nome() {
    return this.formPagamento.get('nomeTitular');
  }

  get cpf() {
    return this.formPagamento.get('cpf');
  }

  compraRealizada() {
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('Pagamento', this.conversao);
  }




  ngOnInit(): void {

    this.formPagamento = this.createForm();

    console.log(this.valoresForm);
    this.formPagamento.valueChanges.pipe(
      debounceTime(1000)).subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
  }



}

  
//   validarPagamento(): boolean {
//     return this.validar.verificaPagamento(this.formPagamento.value);
//   }
// }




//   validarPagamento(): boolean {
//     return this.validar.verificarDadosPagamento(this.formPagamento.value);
//   }
// }
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

  // private createForm(pagamento: Pagamento): FormGroup {
  //   return new FormGroup({
  //     numero: new FormControl(pagamento.numero),
  //     vencimento: new FormControl(pagamento.vencimento),
  //     cvv: new FormControl(pagamento.cvv),
  //     nomeTitular: new FormControl(pagamento.nomeTitular),
  //     cpf: new FormControl(pagamento.cpf)
  //   })
  // }
