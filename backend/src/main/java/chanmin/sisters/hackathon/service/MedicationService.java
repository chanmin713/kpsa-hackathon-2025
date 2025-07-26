package chanmin.sisters.hackathon.service;

import chanmin.sisters.hackathon.entity.Medication;
import chanmin.sisters.hackathon.repository.MedicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MedicationService {

    private final MedicationRepository medicationRepository;

    public List<Medication> getAllMedications() {
        return medicationRepository.findAll();
    }

    public Medication getMedicationById(Long id) {
        return medicationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 약이 없습니다. id=" + id));
    }

    public Medication createMedication(Medication medication) {
        return medicationRepository.save(medication);
    }

    public Medication updateMedication(Long id, Medication updated) {
        Medication medication = getMedicationById(id);
        medication.setName(updated.getName());
        medication.setExplaination(updated.getExplaination());
        return medicationRepository.save(medication);
    }

    public void deleteMedication(Long id) {
        medicationRepository.deleteById(id);
    }
}
