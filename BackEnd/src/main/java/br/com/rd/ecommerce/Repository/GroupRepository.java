package br.com.rd.ecommerce.Repository;

import br.com.rd.ecommerce.Model.Entity.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

}
