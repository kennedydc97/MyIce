export class Cadastro {
    constructor(
        public idCadastro?: number,
        public nome?: string,
        public nasc?: Date,
        public cpf?: string,
        public tel?: number,
        public email?: string,
        public senha?: string,
        public confirmarSenha?: string,
        public cep?: string,
        public endereco?: string,
        public numeroCasa?: string,
        public bairro?: string,
        public complementoCasa?: string,
        public cidade?: string,
        public estado?: string
    ) { }
}