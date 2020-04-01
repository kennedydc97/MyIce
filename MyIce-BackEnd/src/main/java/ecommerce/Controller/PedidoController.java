package ecommerce.Controller;

import ecommerce.Model.Pedido;
import ecommerce.Repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        pedido.setDtPedido(new Date());
        return repository.save(pedido);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/pedido/{id}")
    public Pedido findPedidoById(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/pedido/lista")
    public List<Pedido> find(){
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/pedido/{id_pedido}")
    public void deleteById(@PathVariable("id_pedido") Long idDoPedido){
        repository.deleteById(idDoPedido);
    }
}
