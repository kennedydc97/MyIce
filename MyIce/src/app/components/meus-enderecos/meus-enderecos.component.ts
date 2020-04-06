import { Component, OnInit, Input, TemplateRef} from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Endereco } from 'src/app/models/endereco';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-meus-enderecos',
  templateUrl: './meus-enderecos.component.html',
  styleUrls: ['./meus-enderecos.component.css']
})
export class MeusEnderecosComponent implements OnInit {

  @Input() endereco;


  principalEndereco = null;
  enderecos = [];
  usuario;
  modalRef: BsModalRef;


  constructor(private cliente: ClienteService, private modalService: BsModalService) { 
    this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    this.cliente.buscarEndereco(this.usuario.idCliente).subscribe(
         dados => {
          this.enderecos = dados
          console.log(this.enderecos)
          if (this.enderecos.length > 0) {
            this.principalEndereco = this.enderecos[0];
          }
        }
      );
  }
  cadastrarEndereco(endereco: Endereco) {
    this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))
    this.cliente.cadastrarEndereco(endereco, this.usuario.idCliente).subscribe(
      dados => {
        if (this.enderecos.length == 0) {
          this.principalEndereco = dados;
        }
        this.enderecos.push(dados)
      }
    )
  this.modalRef.hide();
}

abrirModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template)
}


  ngOnInit(): void {
  }

}
