package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.ItemOrder;
import br.com.rd.ecommerce.Repository.ItemOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
public class ItemOrderController {
    @Autowired
    private ItemOrderRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create-item-request")
    public ItemOrder save(@RequestBody ItemOrder itemOrder) {
        return repository.save(itemOrder);
    }

    @GetMapping("/itemRequest/findById/{id_item_request}")
    public ItemOrder findById(@PathVariable("id_item_request") Long idOfItemRequest){
        return repository.findById(idOfItemRequest).get();
    }

    @GetMapping("/itemRequest")
    public ItemOrder findItemRequestById(@PathParam("id") Long id){
        return repository.findById(id).get();
    }

    @DeleteMapping("/delete-itemRequest/{id_item_request}")
    public void deleteById(@PathVariable("id_item_request") Long idOfItemRequest) { repository.deleteById(idOfItemRequest);}

    @PutMapping("/itemRequest")
    public ItemOrder modify(@RequestBody ItemOrder itemOrder){
        ItemOrder itemOrderEntity = repository.getOne(itemOrder.getIdItemOrder());
        itemOrderEntity.setProduct(itemOrder.getProduct());
        itemOrderEntity.setVlProduct(itemOrder.getVlProduct());
        itemOrderEntity.setQuantity(itemOrder.getQuantity());
        return repository.save(itemOrderEntity);
    }
}
