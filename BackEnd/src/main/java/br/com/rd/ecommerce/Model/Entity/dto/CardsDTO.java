package br.com.rd.ecommerce.Model.Entity.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@Data
@AllArgsConstructor

public class CardsDTO {
    private String nrocartao;
    private String dataValidade;
    private String CVV;
    private String nometitular;
}