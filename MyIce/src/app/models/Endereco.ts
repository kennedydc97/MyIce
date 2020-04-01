export class Endereco{
    
    constructor(
        public cep:string,
        public logradouro: string,
        public bairro: string,
        public numero:string,
        public uf:string,
        public localidade:string,
        public idCliente: number,
        public complemento?:string,
        ){}
    }