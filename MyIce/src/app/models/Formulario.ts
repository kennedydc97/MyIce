export class Formulario {
    constructor(public codFormulario?:number, 
        public cep?: string, 
        public endereco?: string,
        public numero?: number,
        public complemento?: string,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public cpf?: number,
        public nome?: string,
        public email?: string,
        public tel?: number,
        public senha?: number,
        ) {}
}