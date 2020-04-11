package ecommerce.Repository;

import ecommerce.Model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer>  {
    public Cliente findByEmail(String email);
    public Cliente findByIdClienteAndPassword(Integer idCliente, String password);

}
