import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { StorageService } from 'src/app/services/storage.service'
import { Carrinho } from 'src/app/models/Carrinho';
import { Validar } from 'src/app/models/Validar'
import { Pagamento } from 'src/app/models/Pagamento';
import { ClienteService } from 'src/app/services/cliente.service';
import { Address } from 'src/app/models/Address'
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Endereco } from 'src/app/models/endereco'





@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  modalRef: BsModalRef;
  carrinho: Carrinho[] = [];
  subTotal: number = 0;
  total: number = 0;
  formaDeEnvio: number = 0;
  principalEndereco = null;
  enderecos = [];
  usuario;
  validar: Validar = new Validar()
  produtosCarrinho = []


  constructor(private storage: StorageService, private cliente: ClienteService, private route: Router, private modalService: BsModalService) {

    let carrinhoStorage = storage.recuperarCarrinho();
    this.usuario = JSON.parse(atob((sessionStorage.getItem("usuario"))))

    if (carrinhoStorage != null) {
      for (let i = 0; i < carrinhoStorage.length; i++) {
        this.carrinho.push(carrinhoStorage[i])
      }
    }
    if (this.carrinho != null && this.carrinho.length != 0 && this.usuario != null) {
      this.carrinho.forEach(item => {
        this.total += (item.produto.precoDesconto * item.qtd);

        this.cliente.buscarEndereco(this.usuario.idCliente).subscribe(
          dados => {
            this.enderecos = dados
            console.log(this.enderecos)
            if (this.enderecos.length > 0) {
              this.principalEndereco = this.enderecos[0];
            }
          }
        );
      });
      this.subTotal = this.total;
    } else {
      this.route.navigate(["/lista-de-produtos"])
    }
    this.enderecos = [];

  }

  
  
  FormaDeEnvio(envio) {
    if ( this.formaDeEnvio != null ) { 
      if (envio != this.formaDeEnvio) {
        this.total -= this.formaDeEnvio;
        this.formaDeEnvio = envio;
        this.total += this.formaDeEnvio;
      }
  }
  }
 
  ngOnInit(): void {

  }

  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }


  // finalizarCompra() {
  //   this.cliente.mandarPedido(this.principalEndereco.idEndereco, 1).subscribe(
  //     pedido => console.log(pedido)
  //   )
  // }


  
  
  finalizarCompra() {
      this.cliente.mandarPedido(this.principalEndereco.idEndereco, this.formaDeEnvio).subscribe(
        dados => {
          if (dados != null) {
            let cliente = JSON.parse(atob((sessionStorage.getItem("usuario"))));
            if(cliente.pedido == null){
              cliente.pedido = [];
            }
            cliente.pedido.push(dados);
            this.storage.salvarCliente(cliente);
            this.storage.removerCarrinho();
            this.route.navigate(['/sucesso'])
          }
        }
      )
      }



    


  mudarEndereco(address: Address) {
    this.principalEndereco = address;
    this.modalRef.hide();
  }


}

