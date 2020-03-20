package br.com.rd.ecommerce.Repository;

import br.com.rd.ecommerce.Model.Entity.NF;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NfRepository extends JpaRepository<NF, Long>{
}
