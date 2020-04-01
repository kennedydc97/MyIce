package ecommerce.Repository;

import ecommerce.Model.Cliente;
import ecommerce.Model.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long> {
    List<Endereco> findByCliente(Long cliente);
}
