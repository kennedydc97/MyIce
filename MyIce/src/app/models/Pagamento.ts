export class Pagamento {
    constructor(
        public numero?:string,
        public vencimento?:Date,
        public cvv?:string,
        public cpf?:string,
        public nomeTitular?:string

        ){
        }
    }    