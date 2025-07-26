package chanmin.sisters.hackathon.controller;

import chanmin.sisters.hackathon.entity.HospitalRecord;
import chanmin.sisters.hackathon.service.HospitalRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hr")
@RequiredArgsConstructor
public class HospitalRecordController {

    private final HospitalRecordService hospitalRecordService;

    @GetMapping
    public List<HospitalRecord> getAllHospitalRecords() {
        return hospitalRecordService.getAllHospitalRecords();
    }

    @GetMapping("/{hrId}")
    public ResponseEntity<HospitalRecord> getHospitalRecordById(@PathVariable Long hrId) {
        return ResponseEntity.ok(hospitalRecordService.getHospitalRecordById(hrId));
    }

    @PostMapping
    public ResponseEntity<HospitalRecord> createHospitalRecord(@RequestBody HospitalRecord hospitalRecord) {
        return ResponseEntity.ok(hospitalRecordService.createHospitalRecord(hospitalRecord));
    }

    @PutMapping("/{hrId}")
    public ResponseEntity<HospitalRecord> updateHospitalRecord(@PathVariable Long hrId, @RequestBody HospitalRecord updated) {
        return ResponseEntity.ok(hospitalRecordService.updateHospitalRecord(hrId, updated));
    }

    @DeleteMapping("/{hrId}")
    public ResponseEntity<Void> deleteHospitalRecord(@PathVariable Long hrId) {
        hospitalRecordService.deleteHospitalRecord(hrId);
        return ResponseEntity.noContent().build();
    }
}