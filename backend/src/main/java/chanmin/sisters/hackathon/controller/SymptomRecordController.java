package chanmin.sisters.hackathon.controller;


import chanmin.sisters.hackathon.entity.SymptomRecord;
import chanmin.sisters.hackathon.service.SymptomRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sr")
@RequiredArgsConstructor
public class SymptomRecordController {

    private final SymptomRecordService symptomRecordService;

    @GetMapping
    public List<SymptomRecord> getAllSymptomRecords() {
        return symptomRecordService.getAllSymptomRecords();
    }

    @GetMapping("/{srId}")
    public ResponseEntity<SymptomRecord> getSymptomRecordById(@PathVariable Long srId) {
        return ResponseEntity.ok(symptomRecordService.getSymptomRecordById(srId));
    }

    @PostMapping
    public ResponseEntity<SymptomRecord> createSymptomRecord(@RequestBody SymptomRecord record) {
        return ResponseEntity.ok(symptomRecordService.createSymptomRecord(record));
    }

    @PutMapping("/{srId}")
    public ResponseEntity<SymptomRecord> updateSymptomRecord(@PathVariable Long srId, @RequestBody SymptomRecord record) {
        return ResponseEntity.ok(symptomRecordService.updateSymptomRecord(srId, record));
    }

    @DeleteMapping("/{srId}")
    public ResponseEntity<Void> deleteSymptomRecord(@PathVariable Long srId) {
        symptomRecordService.deleteSymptomRecord(srId);
        return ResponseEntity.noContent().build();
    }
}
