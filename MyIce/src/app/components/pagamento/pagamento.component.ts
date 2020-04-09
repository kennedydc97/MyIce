import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Validar } from 'src/app/models/Validar'
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnChanges {

  @Output() enviarCartao = new EventEmitter;
  
  cartao
  valoresForm;
  conversao;

  @Input() frete : number = null;

  validar: Validar = new Validar()

  formPagamento: FormGroup;

  constructor(private fb: FormBuilder, private cliente: ClienteService) {
    this.formPagamento = this.createForm();

    console.log(this.frete);
    

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
        ,
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11),
        Validar.validarCpf
      ])),
    });

  }

 
  ngOnChanges(): void {
    this.formPagamento.patchValue({freteSelecionado : this.frete})
 
  }

  permitirNumeros(evento: any) {
    this.validar.cancelarLetras(evento);
  }


  get nome() {
    return this.formPagamento.get('nomeTitular');
  }

  get cpf() {
    return this.formPagamento.get('cpf');
  }

  compraRealizada() {
    
    if (this.frete != undefined && this.frete != 0) { 
    this.enviarCartao.emit();
  } else {
    alert("Selecione um frete para efetuar a sua compra!")
  }
}
}


