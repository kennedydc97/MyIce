package ecommerce.Controller;


import ecommerce.Service.EmailService;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContatoController {



    @Autowired
    private EmailService emailService;

    @PostMapping("/contato")
    public ResponseEntity contatar(@RequestBody ObjectNode node){
        String nome = node.get("nome").asText();
        String email = node.get("email").asText();
        String assunto = node.get("assunto").asText();
        String texto = node.get("texto").asText();
        emailService.sendEmailMensagem(nome, email, assunto, texto);
        return ResponseEntity.ok().build();
    }
}