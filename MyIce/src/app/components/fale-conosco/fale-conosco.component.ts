import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { Contato } from 'src/app/models/Contato';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {

  formMensagem: FormGroup

  constructor(private cliente: ClienteService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) { }
  private createForm(): FormGroup {
    return this.fb.group({
      nome: new FormControl(null, Validators.compose([
        Validators.required

      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      assunto: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      mensagem: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
  }

  enviarMensagem() {
    this.cliente.mandarMensagem(this.formMensagem).subscribe((data) => {
      this.toastr.success("Obrigado pelo contato.", "Mensagem enviada com sucesso")
      this.router.navigate(['/home'])

    }, (erro) => {
      console.log(erro);
      this.toastr.error("", "Falha ao enviar sua mensagem");
    })
  }

  ngOnInit(): void {
    this.formMensagem = this.createForm();
  }

}
