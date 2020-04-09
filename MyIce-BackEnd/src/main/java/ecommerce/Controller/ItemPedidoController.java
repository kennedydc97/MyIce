package ecommerce.Controller;

import ecommerce.Model.ItemPedido;
import ecommerce.Repository.ItemPedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class ItemPedidoController {

    @Autowired
    private ItemPedidoRepository repository;


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/item-pedido")
    public ItemPedido save(@RequestBody ItemPedido itemPedido){
        return repository.save(itemPedido);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/item-pedido/{id}")
    public ItemPedido findItemPedidoById(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/item-pedido/lista")
    public List<ItemPedido> find(){
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/item-pedido/{id_item_pedido}")
    public void deleteById(@PathVariable("id_item_pedido") Long idDoItemPedido){
        repository.deleteById(idDoItemPedido);
    }
}
