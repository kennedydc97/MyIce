package ecommerce.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service("EmailService")
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmailEsqueciSenha(String email, String senha) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email);

        msg.setSubject("Nova senha");
        msg.setText("Olá! \n\n Esqueceu sua senha? Sem problemas! " +
                "Nós do Mi Ice geramos uma nova senha para você. \n\n Sua nova senha é: " + senha);

        javaMailSender.send(msg);

    }
}