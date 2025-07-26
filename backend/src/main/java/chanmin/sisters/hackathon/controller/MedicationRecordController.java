package chanmin.sisters.hackathon.controller;

import chanmin.sisters.hackathon.entity.MedicationRecord;
import chanmin.sisters.hackathon.service.MedicationRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mr")
@RequiredArgsConstructor
public class MedicationRecordController {

    private final MedicationRecordService medicationRecordService;

    @GetMapping
    public List<MedicationRecord> getAllRecords() {
        return medicationRecordService.getAllRecords();
    }

    @GetMapping("/{mrId}")
    public ResponseEntity<MedicationRecord> getRecord(@PathVariable Long mrId) {
        return ResponseEntity.ok(medicationRecordService.getRecordById(mrId));
    }

    @PostMapping
    public ResponseEntity<MedicationRecord> createRecord(@RequestBody MedicationRecord record) {
        return ResponseEntity.ok(medicationRecordService.createRecord(record));
    }

    @PutMapping("/{mrId}")
    public ResponseEntity<MedicationRecord> updateRecord(@PathVariable Long mrId, @RequestBody MedicationRecord updated) {
        return ResponseEntity.ok(medicationRecordService.updateRecord(mrId, updated));
    }

    @DeleteMapping("/{mrId}")
    public ResponseEntity<Void> deleteRecord(@PathVariable Long mrId) {
        medicationRecordService.deleteRecord(mrId);
        return ResponseEntity.noContent().build();
    }
}
