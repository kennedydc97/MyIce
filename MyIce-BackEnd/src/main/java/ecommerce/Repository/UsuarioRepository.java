package ecommerce.Repository;

import ecommerce.Model.Cliente;
import ecommerce.Model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
//    public Optional<Usuario> findByEmailUsuario(String email);
    public Usuario findByEmail(String email);
//    public Usuario findByIdUsuarioAndPassword(Integer idUsuario, String senha);

}
