package chanmin.sisters.hackathon.repository;

import chanmin.sisters.hackathon.entity.MedicationRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicationRecordRepository extends JpaRepository<MedicationRecord, Long> {
}
