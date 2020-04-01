package ecommerce.Repository;

import ecommerce.Model.NF;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NfRepository extends JpaRepository<NF, Long>  {
}
