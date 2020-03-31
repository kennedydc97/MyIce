import { MinhaContaComponent } from './components/minha-conta/minha-conta.component';
import { MeusPedidosComponent } from './components/meus-pedidos/meus-pedidos.component';
import { PaginaDoClienteComponent } from './components/pagina-do-cliente/pagina-do-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoSozinhoComponent } from './components/produto-sozinho/produto-sozinho.component';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdicionarProdutosComponent } from './components/adicionar-produtos/adicionar-produtos.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { FormsComponent } from './components/forms/forms.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { MeusEnderecosComponent } from './components/meus-enderecos/meus-enderecos.component';
import { SucessoPedidoRealizadoComponent } from './components/sucesso-pedido-realizado/sucesso-pedido-realizado.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "lista-de-produtos",
    component: ListaDeProdutosComponent
  },
  {
    path: "lista-de-produtos/:id",
    component: ProdutoSozinhoComponent
  },
  {
    path: 'sobre-nos',
    component: SobreNosComponent
  },
  { 
    path: 'carrinho', 
    component: CarrinhoComponent
    },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: "forms",
    component: FormsComponent
  },
  {
    path: "adicionar-produto",
    component: AdicionarProdutosComponent
  }, {
    path: 'cadastro',
    component: FormularioComponent
  },
  {
    path: 'pagina-do-cliente',
    component:PaginaDoClienteComponent
  },
  {
    path: 'meus-pedidos',
    component:MeusPedidosComponent
  },
  {
    path: 'minha-conta',
    component: MinhaContaComponent
  },
  {
    path: 'meus-enderecos',
    component: MeusEnderecosComponent
  }, {
    path: 'sucesso',
    component: SucessoPedidoRealizadoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
