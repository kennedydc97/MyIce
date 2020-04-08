import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Contato } from 'src/app/models/Contato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {

  formMensagem: FormGroup

  constructor(private cliente: ClienteService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formMensagem = this.formularioFaleConosco()
  }

  public formularioFaleConosco():FormGroup{
    return this.fb.group({
      data: new FormControl(new Date),
      email: new FormControl(""),
      assunto: new FormControl(""),
      mensagem: new FormControl("")
    })
  }

  enviarMensagem(){
    this.cliente.faleConosco(this.formMensagem.value).subscribe((data)=>{
      alert("sua mensagem foi enviada com sucesso")
      this.router.navigate(['/home'])
    })
  }
}
