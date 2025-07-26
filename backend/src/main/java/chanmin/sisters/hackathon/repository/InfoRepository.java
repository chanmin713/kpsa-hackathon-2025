package chanmin.sisters.hackathon.repository;

import chanmin.sisters.hackathon.entity.Info;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InfoRepository extends JpaRepository<Info, Long> {
}
