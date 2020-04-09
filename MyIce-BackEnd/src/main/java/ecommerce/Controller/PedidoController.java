package ecommerce.Controller;

import ecommerce.Model.Endereco;
import ecommerce.Model.Pedido;
import ecommerce.Model.Produto;
import ecommerce.Repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class PedidoController {

    @Autowired
    private PedidoRepository repository;
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/pedido")
    public Pedido save(@RequestBody Pedido pedido){
        return repository.save(pedido);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/pedidos/lista/{id}")
    public ResponseEntity<List<Pedido>> findPedidosByCliente(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(repository.findByClienteOrderByDtPedidoDesc(id)); }

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
