package chanmin.sisters.hackathon.service;


import chanmin.sisters.hackathon.entity.Benefit;
import chanmin.sisters.hackathon.repository.BenefitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BenefitService {

    private final BenefitRepository benefitRepository;

    public List<Benefit> getAllBenefits() {
        return benefitRepository.findAll();
    }

    public Benefit getBenefitById(Long id) {
        return benefitRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 혜택 정보가 없습니다. id=" + id));
    }

    public Benefit createBenefit(Benefit benefit) {
        return benefitRepository.save(benefit);
    }

    public Benefit updateBenefit(Long id, Benefit updated) {
        Benefit benefit = getBenefitById(id);
        benefit.setTitle(updated.getTitle());
        benefit.setBoundary(updated.getBoundary());
        benefit.setDisease(updated.getDisease());
        benefit.setPlace(updated.getPlace());
        return benefitRepository.save(benefit);
    }

    public void deleteBenefit(Long id) {
        benefitRepository.deleteById(id);
    }
}