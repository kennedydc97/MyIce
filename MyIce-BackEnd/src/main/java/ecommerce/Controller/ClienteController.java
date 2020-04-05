package ecommerce.Controller;

import ecommerce.Model.Cliente;
import ecommerce.Repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @PostMapping("/cliente")
    public ResponseEntity<?> criar(@RequestBody Cliente cliente) {
        if (cliente == null) {
            return ResponseEntity.status(400).body("Cliente não pode estar vazio");
        }
        Cliente clienteAtualizado = repository.save(cliente);
        return ResponseEntity.status(201).body(clienteAtualizado);
    }

    @GetMapping("/cliente/{id_cliente}")
    public ResponseEntity<?> mostrar(@PathVariable("id_cliente") Long id) {
        Optional<Cliente> opt_cliente = repository.findById(id);
        Cliente cliente = opt_cliente.orElse(null);
        if (cliente == null) {
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(cliente);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/cliente/lista")
    public List<Cliente> find() {
        return repository.findAll();
    }

    @DeleteMapping("/cliente/{id_cliente}")
    public ResponseEntity<?> remover(@PathVariable("id_cliente") Long idDoCliente) {
        return repository.findById(idDoCliente)
                .map(cliente -> {
                    repository.delete(cliente);
                    return ResponseEntity.status(204).body("Cliente excluido");
                }).orElse(ResponseEntity.status(404).build());
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
