package chanmin.sisters.hackathon.repository;

import chanmin.sisters.hackathon.entity.HospitalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospitalRecordRepository extends JpaRepository<HospitalRecord, Long> {

}
