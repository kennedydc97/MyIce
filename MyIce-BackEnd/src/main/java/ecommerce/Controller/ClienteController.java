package ecommerce.Controller;

import ecommerce.Model.Cliente;
import ecommerce.Repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/cliente")
    public ResponseEntity<Cliente> save(@RequestBody Cliente cliente) {
        return ResponseEntity.ok().body(repository.save(cliente));
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/cliente/{id}")
    public ResponseEntity<Cliente> findClienteById(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(repository.findById(id).get());
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/cliente/lista")
    public List<Cliente> find() {
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/cliente/{id_cliente}")
    public void deleteById(@PathVariable("id_cliente") Long idDoCliente) {
        repository.deleteById(idDoCliente);
    }

    @PostMapping("/login")
    public ResponseEntity fazerLogin(@RequestBody() Cliente user) {
        try {
            Cliente client = repository.findByEmail(user.getEmail());
            if (client != null && client.getPassword().equals(user.getPassword())) {
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
}
