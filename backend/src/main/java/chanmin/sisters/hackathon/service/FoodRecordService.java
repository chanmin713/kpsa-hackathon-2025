package chanmin.sisters.hackathon.service;


import chanmin.sisters.hackathon.entity.FoodRecord;
import chanmin.sisters.hackathon.repository.FoodRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodRecordService {

    private final FoodRecordRepository foodRecordRepository;

    public List<FoodRecord> getAllFoodRecords() {
        return foodRecordRepository.findAll();
    }

    public FoodRecord getFoodRecordById(Long id) {
        return foodRecordRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 식단 기록이 없습니다. id=" + id));
    }

    public FoodRecord createFoodRecord(FoodRecord foodRecord) {
        return foodRecordRepository.save(foodRecord);
    }

    public FoodRecord updateFoodRecord(Long id, FoodRecord updated) {
        FoodRecord record = getFoodRecordById(id);
        record.setUser(updated.getUser());
        record.setFood_name(updated.getFood_name());
        record.setFood_kcal(updated.getFood_kcal());
        record.setFood_date(updated.getFood_date());
        return foodRecordRepository.save(record);
    }

    public void deleteFoodRecord(Long id) {
        foodRecordRepository.deleteById(id);
    }
}