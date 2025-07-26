package chanmin.sisters.hackathon.controller;

import chanmin.sisters.hackathon.entity.Medication;
import chanmin.sisters.hackathon.service.MedicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medications")
@RequiredArgsConstructor
public class MedicationController {

    private final MedicationService medicationService;

    @GetMapping
    public List<Medication> getAllMedications() {
        return medicationService.getAllMedications();
    }

    @GetMapping("/{mediId}")
    public ResponseEntity<Medication> getMedication(@PathVariable Long mediId) {
        return ResponseEntity.ok(medicationService.getMedicationById(mediId));
    }

    @PostMapping
    public ResponseEntity<Medication> createMedication(@RequestBody Medication medication) {
        return ResponseEntity.ok(medicationService.createMedication(medication));
    }

    @PutMapping("/{mediId}")
    public ResponseEntity<Medication> updateMedication(@PathVariable Long mediId, @RequestBody Medication updated) {
        return ResponseEntity.ok(medicationService.updateMedication(mediId, updated));
    }

    @DeleteMapping("/{mediId}")
    public ResponseEntity<Void> deleteMedication(@PathVariable Long mediId) {
        medicationService.deleteMedication(mediId);
        return ResponseEntity.noContent().build();
    }
}
