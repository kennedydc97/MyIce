package br.com.rd.ecommerce.Repository;

import br.com.rd.ecommerce.Model.Entity.Cards;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardsRepository extends JpaRepository<Cards, Long> {

}
