package ecommerce.Controller;
import ecommerce.Model.Pedido;
import ecommerce.Repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
public class PedidoController {
    @Autowired
    private PedidoRepository repository;

    @PostMapping("/pedido")
    public ResponseEntity<?> criar(@RequestBody Pedido pedido) {
        if (pedido == null) {
            return ResponseEntity.status(400).body("Pedido não pode estar vazio");
        }else if(pedido.getCliente() == null){
            return ResponseEntity.status(400).body("Cliente não pode estar vazio");
        }else if(pedido.getVlFrete().equals(0.00)){
            return ResponseEntity.status(400).body("frete não pode estar vazio");
        }else if(pedido.getEndereco() == null){
            return ResponseEntity.status(400).body("Endereço não pode estar vazio");
        }
        Pedido pedidoAtualizado = repository.save(pedido);
        return ResponseEntity.status(201).body(pedido);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/pedidos/lista/{id}")
    public ResponseEntity<List<Pedido>> findPedidosByCliente(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(repository.findByCliente(id)); }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/pedido/{id}")
    public ResponseEntity<Pedido> findPedidoByCliente(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(repository.findFirst1ByClienteOrderByDtPedidoDesc(id));
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/pedido/{id_pedido}")
    public void deleteById(@PathVariable("id_pedido") Long idDoPedido){
        repository.deleteById(idDoPedido);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/pedido/selecionado/{id}")
    public ResponseEntity<Pedido> findPedidoByIdPedido(@PathVariable("id") Long id){
        return repository.findById(id).map(pedido -> {
            return ResponseEntity.ok().body(pedido);
        }).orElse(ResponseEntity.notFound().build());
    }
}