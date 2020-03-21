package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.Cards;
import br.com.rd.ecommerce.Model.Entity.dto.CardsDTO;
import br.com.rd.ecommerce.Repository.CardsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class CardsController {

    @Autowired
    private CardsRepository cardsRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create-cards")
    public Cards save(@RequestBody CardsDTO cardsDTO) throws ParseException {
        Cards card = new Cards();
        DateFormat formatter = new SimpleDateFormat("MM/dd/yy");
        Date date = formatter.parse(cardsDTO.getDataValidade());

        card.setNrocartao(cardsDTO.getNrocartao());
        card.setDataValidade(date);
        card.setCVV(cardsDTO.getCVV());
        card.setNometitular(cardsDTO.getNometitular());
        return cardsRepository.save(card);
    }


    @DeleteMapping("/delete-cards/{id_cards}")
    public void deleteById(@PathVariable("id_cards") Long idOfCards) {
        cardsRepository.deleteById(idOfCards);
    }
}

