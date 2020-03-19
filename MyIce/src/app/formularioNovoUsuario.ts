export class FormularioNovoUsuario {

    constructor(nome: string, email: string, cpf: string, tel: string, nascimento: Date, senha: string, cep: string, endereco: string, complemento: string, bairro: string, cidade: string, estado: string) {
      
      this.nome = nome;
      this.email = email;
      this.cpf = cpf;
      this.tel = tel;
      this.nascimento = nascimento;
      this.senha = senha;
      this.cep = cep;
      this.endereco = endereco;
      this.complemento = complemento;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
    }
  
    nome: string;
    email: string;
    cpf: string;
    tel: string;
    nascimento: Date;
    senha: string;
    cep: string;
    endereco: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
  }