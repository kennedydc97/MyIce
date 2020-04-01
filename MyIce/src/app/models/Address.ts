export class Address{
    
    constructor(
        public cep:string,
        public logradouro: string,
        public bairro: string,
        public numero:string,
        public uf:string,
        public localidade:string,
        public complemento?:string,
        ){}
    }

//         setEndereco(cep:string, endereco:string, bairro:string, estado:string, cidade:string){
//             this.cep = cep;
//             this._endereco = endereco;
//             this._bairro = bairro;
//             this._estado = estado;
//             this._cidade = cidade;
//         }

//         get cep():string{
//             return this._cep;
//         }
//         set setCep(novoCep: string){
//             this._cep = novoCep;
//         }
        
//         get endereco():string{
//             return this._endereco;
//         }
//         get bairro():string{
//             return this._bairro;
//         }
//         get numero():string{
//             return this._numero;
//         }
//         get estado():string{
//             return this._estado;
//         }
//         get cidade():string{
//             return this._cidade;
//         }

//         get complemento():string{
//             return this._complemento;
//         }
// }