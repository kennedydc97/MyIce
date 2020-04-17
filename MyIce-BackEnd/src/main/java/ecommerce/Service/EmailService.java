package ecommerce.Service;

import ecommerce.Model.Cliente;
import ecommerce.Model.Endereco;
import ecommerce.Model.Pedido;
import freemarker.template.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Date;
import java.util.Locale;

@Service("EmailService")
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private SpringTemplateEngine templateEngine;

    @Autowired
    private Configuration freemarkerConfig;

    @Autowired
    private ApplicationEmail applicationEmail;

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

    @Async
    public String sendEmailPedido(Cliente cliente, Pedido pedido, Endereco endereco){

        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom("suportemiice@gmail.com");
            messageHelper.setTo(cliente.getEmail());
            messageHelper.setSubject("Pedido Realizado");
            String content = applicationEmail.build(pedido, endereco);
            messageHelper.setText(content, true);

        };
        try {
            javaMailSender.send(messagePreparator);
            return "Foi";
        } catch (MailException e) {
           return e.toString();
        }
    }

    @Async
    public String sendEmailPedidoStatus(Cliente cliente, Pedido pedido, Endereco endereco){

        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom("suportemiice@gmail.com");
            messageHelper.setTo(cliente.getEmail());
            messageHelper.setSubject("Atualizando pedido");
            String content = applicationEmail.buildStatus(pedido, endereco);
            messageHelper.setText(content, true);

        };
        try {
            javaMailSender.send(messagePreparator);
            return "Foi";
        } catch (MailException e) {
            return e.toString();
        }
    }

}













//    public void sendEmail(Mail mail) throws MessagingException, IOException {
//        MimeMessage message = javaMailSender.createMimeMessage();
//        MimeMessageHelper helper = new MimeMessageHelper(message,
//                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
//                StandardCharsets.UTF_8.name());
//        helper.addAttachment("template-cover.png", new ClassPathResource("javabydeveloper-email.PNG"));
//        Context context = new Context();
//        context.setVariables(mail.getProps());
//
//        String html = templateEngine.process("pedidoatual", context);
//        helper.setTo(mail.getMailTo(mail));
//        helper.setText(html, true);
//        helper.setSubject(mail.getSubject());
//        helper.setFrom(mail.getFrom());
//        javaMailSender.send(message);
//    }

//    public void sendMailWithInline(
//            final String recipientName, final String recipientEmail, final String imageResourceName,
//            final byte[] imageBytes, final String imageContentType, final Locale locale)
//            throws MessagingException {
//
//        // Prepare the evaluation context
//        final Context ctx = new Context(locale);
//        ctx.setVariable("name", recipientName);
//        ctx.setVariable("subscriptionDate", new Date());
//        ctx.setVariable("imageResourceName", imageResourceName); // so that we can reference it from HTML
//
//        // Prepare message using a Spring helper
//        final MimeMessage mimeMessage = this.javaMailSender.createMimeMessage();
//        final MimeMessageHelper message
//                = new MimeMessageHelper(mimeMessage, true /* multipart */, "UTF-8");
//        message.setSubject("Pedido Realizado - Mi ice");
//        message.setFrom("suportemiice@gmail.com");
//        message.setTo(recipientEmail);
//
//        // Create the HTML body using Thymeleaf
//        final String htmlContent = this.templateEngine.process("mail/pedidoatual.html", ctx);
//        message.setText(htmlContent, true /* isHtml */);
//
//        // Add the inline image, referenced from the HTML code as "cid:${imageResourceName}"
//        final InputStreamSource imageSource = new ByteArrayResource(imageBytes);
//        message.addInline(imageResourceName, imageSource, imageContentType);
//
//        // Send mail
//        this.javaMailSender.send(mimeMessage);





