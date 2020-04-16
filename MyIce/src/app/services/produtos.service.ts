import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { produtoAPI } from 'src/app/models/produtoAPI';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  carregando = true;
  produtos: produtoAPI[] = [];
  produtosFiltrados: produtoAPI[] = [];
  public produtoSozinho: EventEmitter <produtoAPI>


  constructor(private http: HttpClient) {
    this.carregarProdutos
    this.produtoSozinho = new EventEmitter()
  }

  private carregarProdutos() {

    return new Promise((finalizado, erro) => {

      this.http.get("http://localhost:8080/ecommerce/produto/lista").subscribe((produtos: produtoAPI[]) => {
        this.produtos = produtos
        this.carregando = false
        finalizado();
      })
    });

  }

  buscarProduto(palavra: string) {

    if (this.produtos.length === 0) {
      this.carregarProdutos().then(() => {
        this.filtrarProdutos(palavra);
      })
    } else {
      this.filtrarProdutos(palavra)
    }

  }

  private filtrarProdutos(palavra: string) {
    this.produtosFiltrados=[]

    palavra = palavra.toLocaleLowerCase();

    this.produtos.forEach(prod => {

      let nomeLower = prod.nome.toLocaleLowerCase();
      let descLower = prod.descricao.toLocaleLowerCase();
      if (nomeLower.indexOf(palavra) >= 0 || descLower.indexOf(palavra) >= 0) {
        this.produtosFiltrados.push(prod)
      }
    })
  }

  public mudarProduto(p: produtoAPI){
    this.produtoSozinho.emit(p)
  }


  
  public getProdutosRelacionados(idCategoria){
    return this.http.get(`http://localhost:8080/ecommerce/produto-categoria/${idCategoria}`)
  }
  public getProdutos() {
    return this.http.get("http://localhost:8080/ecommerce/produto/lista")
  }

  public maisVendidos(){
    return this.http.get("http://localhost:8080/ecommerce/maisvendidos")
  }

  public getCategoria() {
    return this.http.get("http://localhost:8080/ecommerce/categoria/lista")
  }

  public buscarProdutoId(id: number) {
    return this.http.get("http://localhost:8080/ecommerce/produto/" + id);
  }
}
