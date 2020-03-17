package br.com.rd.ecommerce.Model.Entity.dto;

import br.com.rd.ecommerce.Model.Entity.Product;
import br.com.rd.ecommerce.Model.Entity.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@NoArgsConstructor
@Data
@AllArgsConstructor
public class ItemOrderDTO {

    private Long idItemRequest;
    private Order order;
    private Product product;
    private Integer quantity;
    private BigDecimal vlProduct;

    private List<ItemOrderDTO> items;
}
