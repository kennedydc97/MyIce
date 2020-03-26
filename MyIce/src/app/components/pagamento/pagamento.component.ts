import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Validar } from 'src/app/models/Validar'
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  @Output() enviarCartao = new EventEmitter;

  valoresForm;
  conversao;


  validar: Validar = new Validar()

  formPagamento: FormGroup;

  constructor(private fb: FormBuilder, private cliente: ClienteService) { }

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
  ngOnInit(): void {
    this.formPagamento = this.createForm();

    console.log(this.valoresForm);
    this.formPagamento.valueChanges.pipe(
      debounceTime(1000)).subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
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
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('Pagamento', this.conversao);
    this.enviarCartao.emit();
  }

}
