import { Address } from './address';
// import { Formulario } from './Formulario';
import { FormControl} from '@angular/forms';
import { Pagamento } from 'src/app/models/Pagamento'


export class Validar {

    cancelarLetras(event: any) {
        const pattern = /[0-9]/;
        const inputChar = String.fromCharCode(event.charCode);
   
        if (!pattern.test(inputChar)) {    
            // invalid character, prevent input
            event.preventDefault();
        }
   }



    static validarCpf(controle: FormControl){

        const cpf: string = controle.value;

        let soma:number = 0;
        let resto:number = 0;
        if(cpf.length == 0){
            return null;
        }
        if (cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999"
        ) {
            return { invalidCpf: true};
        }
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) {
            resto = 0;
        }
        if (resto != parseInt(cpf.substring(9, 10))) {
            return { invalidCpf: true};
        }

        soma = 0;

        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) {
            resto = 0;
        }
        if (resto != parseInt(cpf.substring(10, 11))) {
            return { invalidCpf: true};
        }
        return null;


    }


    }
