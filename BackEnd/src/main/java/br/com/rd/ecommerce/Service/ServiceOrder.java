package br.com.rd.ecommerce.Service;

import br.com.rd.ecommerce.Model.Entity.ItemOrder;
import br.com.rd.ecommerce.Model.Entity.Order;
import br.com.rd.ecommerce.Model.Entity.dto.OrderDTO;
import br.com.rd.ecommerce.Model.Entity.dto.ItemOrderDTO;
import br.com.rd.ecommerce.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service("ServiceRequest")
public class ServiceOrder {

    @Autowired
    private OrderRepository orderRepository;

    public ResponseEntity save(OrderDTO orderDTO){
        if(orderDTO == null || orderDTO.getIdClient() == null)
            return ResponseEntity.badRequest().body(new Exception("Cliente não informado"));

        if(orderDTO.getItemsRequest() == null)
            return ResponseEntity.badRequest().body(new Exception("Pedido não contem item"));

        Order orderEntity = new Order();
        orderEntity.setDtRequest(orderDTO.getDtRequest());
        orderEntity.setIdClient(orderDTO.getIdClient());
        orderEntity.setVlTotal(orderDTO.getVlTotal());
        orderEntity.setVlShipment(orderDTO.getVlShipment());
        orderEntity.setDsPaymentMethods(orderDTO.getDsPaymentMethods());
        orderEntity.setDtUpdate(new Date());

        List<ItemOrder> itemOrderList = new ArrayList<>();

        for(ItemOrderDTO itemOrderDTO : orderDTO.getItemsRequest()){
            ItemOrder it = new ItemOrder();
            it.setVlProduct(itemOrderDTO.getVlProduct());
            it.setQuantity(itemOrderDTO.getQuantity());
            it.setIdItemOrder(itemOrderDTO.getIdItemRequest());
            it.setOrder(itemOrderDTO.getOrder());
            it.setVlProduct(itemOrderDTO.getVlProduct());

            itemOrderList.add(it);
        }

            orderEntity.setItemsOrder(itemOrderList);

        Order returnEntity = orderRepository.save(orderEntity);

        orderDTO.setIdRequest(returnEntity.getIdOrder());
        return ResponseEntity.ok().body(orderDTO);

    }
}
