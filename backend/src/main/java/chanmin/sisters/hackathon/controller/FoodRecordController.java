package chanmin.sisters.hackathon.controller;


import chanmin.sisters.hackathon.entity.FoodRecord;
import chanmin.sisters.hackathon.service.FoodRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
@RequiredArgsConstructor
public class FoodRecordController {

    private final FoodRecordService foodRecordService;

    @GetMapping
    public List<FoodRecord> getAllFoodRecords() {
        return foodRecordService.getAllFoodRecords();
    }

    @GetMapping("/{foodId}")
    public ResponseEntity<FoodRecord> getFoodRecordById(@PathVariable Long foodId) {
        return ResponseEntity.ok(foodRecordService.getFoodRecordById(foodId));
    }

    @PostMapping
    public ResponseEntity<FoodRecord> createFoodRecord(@RequestBody FoodRecord record) {
        return ResponseEntity.ok(foodRecordService.createFoodRecord(record));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FoodRecord> updateFoodRecord(@PathVariable Long id, @RequestBody FoodRecord record) {
        return ResponseEntity.ok(foodRecordService.updateFoodRecord(id, record));
    }

    @DeleteMapping("/{foodId}")
    public ResponseEntity<Void> deleteFoodRecord(@PathVariable Long foodId) {
        foodRecordService.deleteFoodRecord(foodId);
        return ResponseEntity.noContent().build();
    }
}