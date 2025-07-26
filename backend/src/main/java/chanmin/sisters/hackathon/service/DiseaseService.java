package chanmin.sisters.hackathon.service;

import chanmin.sisters.hackathon.entity.Disease;
import chanmin.sisters.hackathon.repository.DiseaseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DiseaseService {

    private final DiseaseRepository diseaseRepository;

    public List<Disease> getAllDiseases() {
        return diseaseRepository.findAll();
    }

    public Disease getDiseaseById(Long id) {
        return diseaseRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 질병이 없습니다. id=" + id));
    }

    public Disease createDisease(Disease disease) {
        return diseaseRepository.save(disease);
    }

    public Disease updateDisease(Long id, Disease updatedDisease) {
        Disease disease = getDiseaseById(id);
        disease.setDisease_name_kr(updatedDisease.getDisease_name_kr());
        disease.setDisease_name_en(updatedDisease.getDisease_name_en());
        return diseaseRepository.save(disease);
    }

    public void deleteDisease(Long id) {
        diseaseRepository.deleteById(id);
    }
}
