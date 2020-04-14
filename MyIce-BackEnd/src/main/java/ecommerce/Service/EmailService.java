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

    public void sendEmailMensagem(String nome, String email, String assunto, String texto) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("suportemiice@gmail.com");

        msg.setSubject("Mensagem de " + nome);
        msg.setText("Mensagem enviada pelo email'" + email + "', através do contato pelo nosso site Mi ice, com o assunto de '" + assunto + "'\n\n\n" + texto);

        javaMailSender.send(msg);
    }

    public void sendEmailPedidoRealizado(String nome, String email, Long idPedido) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email);

        msg.setSubject("Pedido Realizado" + nome);
        msg.setText("Olá!  \n\n Sua compra foi realizada com sucesso! " +
                "Nós do Mi Ice agradecemos pela confiança em nossa loja. \n\n Número do pedido: " + idPedido);
        javaMailSender.send(msg);
    }
}