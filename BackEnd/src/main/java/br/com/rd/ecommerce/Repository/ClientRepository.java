package br.com.rd.ecommerce.Repository;

import br.com.rd.ecommerce.Model.Entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
//    List<Client> findByName(String name);
}
