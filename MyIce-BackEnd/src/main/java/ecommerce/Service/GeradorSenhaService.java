package ecommerce.Service;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service("SenhaGeneratorService")
public class GeradorSenhaService {

    public String novaSenha(){
        String letras = "0123456789abcdefghijklmnopqrstuvwxyz";

        Random random = new Random();

        String senha = "";
        int index = -1;
        for( int i = 0; i < 9; i++ ) {
            index = random.nextInt( letras.length() );
            senha += letras.substring( index, index + 1 );
        }

        return senha;
    }
}

