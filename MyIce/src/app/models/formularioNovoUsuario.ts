export class FormularioNovoUsuario {

    constructor(nome: string, email: string, cpf: string, nasc: Date, senha: string, tel: string, cep: string,
      endereco: string,nroEndereco: string,complemento: string,bairro: string,cidade: string,estado: string,) {
      this.nome = nome;
      this.email = email;
      this.cpf = cpf;
      this.nasc = nasc;
      this.senha = senha;
      this.tel = tel; 
      this.cep = cep;
      this.endereco = endereco;
      this.nroEndereco = nroEndereco;
      this.complemento = complemento;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
    }
  
    nome: string;
    email: string;
    cpf: string;
    nasc: Date;
    senha: string;
    tel: string;
    cep: string;
    endereco: string;
    nroEndereco: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    
  }

    
    