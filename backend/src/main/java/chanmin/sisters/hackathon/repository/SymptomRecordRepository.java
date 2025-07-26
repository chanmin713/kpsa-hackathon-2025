package chanmin.sisters.hackathon.repository;

import chanmin.sisters.hackathon.entity.SymptomRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SymptomRecordRepository extends JpaRepository<SymptomRecord, Long> {
}
