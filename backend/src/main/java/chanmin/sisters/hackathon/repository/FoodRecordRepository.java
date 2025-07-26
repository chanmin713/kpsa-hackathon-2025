package chanmin.sisters.hackathon.repository;

import chanmin.sisters.hackathon.entity.FoodRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRecordRepository extends JpaRepository<FoodRecord, Long> {
}
