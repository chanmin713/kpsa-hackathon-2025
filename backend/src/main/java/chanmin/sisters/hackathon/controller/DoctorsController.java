package chanmin.sisters.hackathon.controller;


import chanmin.sisters.hackathon.entity.Doctors;
import chanmin.sisters.hackathon.service.DoctorsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@RequiredArgsConstructor
public class DoctorsController {

    private final DoctorsService doctorsService;

    @GetMapping
    public List<Doctors> getAllDoctors() {
        return doctorsService.getAllDoctors();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doctors> getDoctorById(@PathVariable Long id) {
        return ResponseEntity.ok(doctorsService.getDoctorById(id));
    }

    @PostMapping
    public ResponseEntity<Doctors> createDoctor(@RequestBody Doctors doctor) {
        return ResponseEntity.ok(doctorsService.createDoctor(doctor));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Doctors> updateDoctor(@PathVariable Long id, @RequestBody Doctors updated) {
        return ResponseEntity.ok(doctorsService.updateDoctor(id, updated));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDoctor(@PathVariable Long id) {
        doctorsService.deleteDoctor(id);
        return ResponseEntity.noContent().build();
    }
}