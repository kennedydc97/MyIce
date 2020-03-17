package br.com.rd.ecommerce.Repository;

import br.com.rd.ecommerce.Model.Entity.Suppliers_Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Suppliers_Product_Repository extends JpaRepository<Suppliers_Product, Long>{

}
