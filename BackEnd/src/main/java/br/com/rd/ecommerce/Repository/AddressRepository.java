package br.com.rd.ecommerce.Repository;

import br.com.rd.ecommerce.Model.Entity.Address;
import br.com.rd.ecommerce.Model.Entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
//    public List<Address> findByIdEndereco(Long IdEndereco);
        public List<Address> findByClient(Client client);


}
