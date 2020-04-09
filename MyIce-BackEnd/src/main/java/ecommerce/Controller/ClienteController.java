package ecommerce.Controller;

import ecommerce.Model.Cliente;
import ecommerce.Model.Endereco;
import ecommerce.Repository.ClienteRepository;
import ecommerce.Service.EmailService;
import ecommerce.Service.UsuarioService;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @Autowired
    private UsuarioService usuarioService;


    @Autowired
    private EmailService emailService;
    
    @PostMapping("/cliente")
    public ResponseEntity criarCliente(@RequestBody Cliente cliente) {
        String password = BCrypt.hashpw(cliente.getPassword(), BCrypt.gensalt());
        cliente.setPassword(password);
        return ResponseEntity.ok().body(repository.save(cliente));
    }

    @PostMapping("/esquecisenha")
    public ResponseEntity esqueciSenha(@RequestBody String email) {

        return ResponseEntity.ok().body(usuarioService.esqueciSenha(email));
    }


    @PostMapping("/login")
    public ResponseEntity fazerLogin(@RequestBody() Cliente user) {
        try {
            Cliente client = repository.findByEmail(user.getEmail());
            if (client != null && BCrypt.checkpw(user.getPassword(), client.getPassword())) {
                System.out.println(client);
                return ResponseEntity.ok().body(client);
            } else {
                return ResponseEntity.ok().body("Email ou/e senha incorretos");
            }
        } catch (Exception e) {
            String erro = "Não foi possivel autenticar tente novamente";
            return ResponseEntity.badRequest().body(erro);
        }
    }

    @PutMapping("/password")
    public ResponseEntity atualizarSenha(@RequestBody ObjectNode objectNode){

        Integer id = objectNode.get("id").asInt();
        String senhaAtual = objectNode.get("senhaAtual").asText();
        senhaAtual = BCrypt.hashpw(senhaAtual, BCrypt.gensalt());
        String novaSenha = objectNode.get("novaSenha").asText();
        novaSenha = BCrypt.hashpw(novaSenha, BCrypt.gensalt() );
        if(repository.findByIdClienteAndPassword(id, senhaAtual) != null ) {

            Cliente userEntity = repository.findByIdClienteAndPassword(id,senhaAtual);
            userEntity.setPassword(novaSenha);
            return ResponseEntity.ok().body(repository.save(userEntity));
        }else{
            return ResponseEntity.badRequest().body(new Exception("Senha atual incorreta"));
        }

    }


    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/cliente/{id}")
    public Cliente findClienteById(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/cliente/lista")
    public List<Cliente> find(){
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/cliente/{id_cliente}")
    public void deleteById(@PathVariable("id_cliente") Long idDoCliente){
        repository.deleteById(idDoCliente);
    }
}
