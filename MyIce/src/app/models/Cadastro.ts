export class Cadastro {
    constructor(
        public idCadastro: number,
        public nome: string,
        public cpf: string,
        public nasc: Date,
        public tel: number,
        public email: string,
        public senha: string,
        public confirmarSenha: string,
        public cep: string,
        public logradouro: string,
        public numero: number,
        public complemento: string,
        public bairro: string,
        public localidade: string,
        public uf: string,
        ){}
}