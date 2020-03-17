package br.com.rd.ecommerce.Repository;

import br.com.rd.ecommerce.Model.Entity.Suppliers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SupplierRepository extends JpaRepository<Suppliers, Long>{

}
