import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { StorageService } from 'src/app/services/storage.service'
import { Carrinho } from 'src/app/models/Carrinho';
import { Validar } from 'src/app/models/Validar'
import { Pagamento } from 'src/app/models/Pagamento';
import { ClienteService } from 'src/app/services/cliente.service';
import { Address} from 'src/app/models/Address'
import { Router } from '@angular/router';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  carrinho: Carrinho[] = [];
  subTotal: number = 0;
  total: number = 0;

  principalEndereco = null;
  enderecos;
  usuario;

  validar: Validar = new Validar ()
  produtosCarrinho = []


  constructor(private storage: StorageService, private fb: FormBuilder, private cliente: ClienteService, private route: Router) {

    this.carrinho = storage.recuperarCarrinho()
    this.usuario = this.storage.recuperarCliente();

    console.log(storage.recuperarCarrinho());

    // if (this.carrinho != null && this.carrinho.length != 0 && this.usuario != null) {
    //   this.carrinho.forEach(item => {
    //     this.total += (item.produto.vlProductDiscount * item.qtd);

        this.cliente.buscarEndereco(1).subscribe(
          dados => {
            this.enderecos = dados
            console.log(this.enderecos)
            if (this.enderecos.length > 0) {
              this.principalEndereco = this.enderecos[0];
            }
          }
        );
  //     });
  //   } else {
  //   //   // this.route.navigate(["/home"])
  //   }
  //   this.enderecos = [];

  // }
  


  
 



  // buscarProduto(){
  //   let produtos = JSON.parse(localStorage.getItem("produtoCarrinho"))
  //   for(let i = 0; i < produtos.length; i++){
  //     this.produtosCarrinho.push(produtos[i])
  //   }
  //   return produtos == null ? [] : produtos.produto
  // }
  

  // cpfMask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, "-", /\d/, /\d/];
  // numeroCartao = [/[0-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/]
  // cvv = [/[0-9]/, /\d/, /\d/]

        }
    
  

  ngOnInit(): void {

  }



}

