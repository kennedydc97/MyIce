import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ProdutoSozinhoComponent } from './components/produto-sozinho/produto-sozinho.component';
import { FormsComponent } from './components/forms/forms.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsProdutosComponent } from './components/cards-produtos/cards-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AdicionarProdutosComponent } from './components/adicionar-produtos/adicionar-produtos.component';
import { HttpClientModule } from "@angular/common/http";
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { EnderecoComponent } from './components/checkout/endereco/endereco.component';
import { TextMaskModule } from 'angular2-text-mask';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { FormasDeEnvioComponent } from './components/checkout/formas-de-envio/formas-de-envio.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaDeProdutosComponent,
    CategoriasComponent,
    NavComponent,
    FooterComponent,
    ProdutoSozinhoComponent,
    FormsComponent,
    CarouselComponent,
    CardsProdutosComponent,
    HomeComponent,
    SobreNosComponent,
    CheckoutComponent,
    CadastroComponent,
    FormularioComponent,
    AdicionarProdutosComponent,
    CarrinhoComponent,
    EnderecoComponent,
    PagamentoComponent,
    FormasDeEnvioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
