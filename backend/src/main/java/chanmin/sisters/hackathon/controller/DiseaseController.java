package chanmin.sisters.hackathon.controller;

import chanmin.sisters.hackathon.entity.Disease;
import chanmin.sisters.hackathon.service.DiseaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diseases")
@RequiredArgsConstructor
public class DiseaseController {

    private final DiseaseService diseaseService;

    @GetMapping
    public List<Disease> getAllDiseases() {
        return diseaseService.getAllDiseases();
    }

    @GetMapping("/{diseaseId}")
    public ResponseEntity<Disease> getDisease(@PathVariable Long diseaseId) {
        return ResponseEntity.ok(diseaseService.getDiseaseById(diseaseId));
    }

    @PostMapping
    public ResponseEntity<Disease> createDisease(@RequestBody Disease disease) {
        return ResponseEntity.ok(diseaseService.createDisease(disease));
    }

    @PutMapping("/{diseaseId}")
    public ResponseEntity<Disease> updateDisease(@PathVariable Long diseaseId, @RequestBody Disease updatedDisease) {
        return ResponseEntity.ok(diseaseService.updateDisease(diseaseId, updatedDisease));
    }

    @DeleteMapping("/{diseaseId}")
    public ResponseEntity<Void> deleteDisease(@PathVariable Long diseaseId) {
        diseaseService.deleteDisease(diseaseId);
        return ResponseEntity.noContent().build();
    }
}
