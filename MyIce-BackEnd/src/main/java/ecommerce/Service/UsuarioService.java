package ecommerce.Service;

import ecommerce.Model.Cliente;
import ecommerce.Repository.ClienteRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service("UsuarioService")
public class UsuarioService {

    @Autowired
    ClienteRepository repository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private GeradorSenhaService senhaService;

    public Cliente esqueciSenha(String email) {
        Cliente usuario = repository.findByEmail(email);


        String senha = senhaService.novaSenha();

        emailService.sendEmailEsqueciSenha(usuario.getEmail(), senha);
        usuario.setPassword(BCrypt.hashpw(senha, BCrypt.gensalt()));


        return repository.save(usuario);

    }


}
