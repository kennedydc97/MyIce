package br.com.rd.ecommerce.Repository;

import br.com.rd.ecommerce.Model.Entity.ItemOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemOrderRepository extends JpaRepository<ItemOrder, Long>{

}
