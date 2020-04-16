package ecommerce.Service;

import ecommerce.Model.Endereco;
import ecommerce.Model.Pedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
public class ApplicationEmail {
    private TemplateEngine templateEngine;

    @Autowired
    public ApplicationEmail(TemplateEngine templateEngine){
        this.templateEngine = templateEngine;
    }

    public String build(Pedido pedido, Endereco endereco){
        Context context = new Context();
        context.setVariable("pedido", pedido);
        context.setVariable("endereco", endereco);
        return templateEngine.process("pedidoatual", context);
    }

    public String buildStatus(Pedido pedido, Endereco endereco){
        Context context = new Context();
        context.setVariable("pedido", pedido);
        context.setVariable("endereco", endereco);
        return templateEngine.process("statuspedido", context);
    }

}
