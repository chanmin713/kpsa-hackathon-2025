package chanmin.sisters.hackathon.controller;

import chanmin.sisters.hackathon.entity.Cycle;
import chanmin.sisters.hackathon.service.CycleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cycle")
@RequiredArgsConstructor
public class CycleController {

    private final CycleService cycleService;

    @GetMapping
    public List<Cycle> getAllCycles() {
        return cycleService.getAllCycles();
    }

    @GetMapping("/{cycleId}")
    public ResponseEntity<Cycle> getCycle(@PathVariable Long cycleId) {
        return ResponseEntity.ok(cycleService.getCycleById(cycleId));
    }

    @PostMapping
    public ResponseEntity<Cycle> createCycle(@RequestBody Cycle cycle) {
        return ResponseEntity.ok(cycleService.createCycle(cycle));
    }

    @PutMapping("/{cycleId}")
    public ResponseEntity<Cycle> updateCycle(@PathVariable Long cycleId, @RequestBody Cycle updated) {
        return ResponseEntity.ok(cycleService.updateCycle(cycleId, updated));
    }

    @DeleteMapping("/{cycleId}")
    public ResponseEntity<Void> deleteCycle(@PathVariable Long cycleId) {
        cycleService.deleteCycle(cycleId);
        return ResponseEntity.noContent().build();
    }
}
