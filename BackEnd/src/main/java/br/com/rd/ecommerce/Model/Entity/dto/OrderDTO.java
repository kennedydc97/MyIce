package br.com.rd.ecommerce.Model.Entity.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Data
@AllArgsConstructor
public class OrderDTO {

    private Long idRequest;
    private Date dtUpdate;
    private Date dtRequest;
    private Integer idClient;
    private BigDecimal vlShipment;
    private BigDecimal vlTotal;
    private String dsPaymentMethods;

    private List<ItemOrderDTO> itemsRequest;
}
