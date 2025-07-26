package chanmin.sisters.hackathon.service;

import chanmin.sisters.hackathon.entity.Cycle;
import chanmin.sisters.hackathon.repository.CycleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CycleService {

    private final CycleRepository cycleRepository;

    public List<Cycle> getAllCycles() {
        return cycleRepository.findAll();
    }

    public Cycle getCycleById(Long id) {
        return cycleRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 복용 주기가 없습니다. id=" + id));
    }

    public Cycle createCycle(Cycle cycle) {
        return cycleRepository.save(cycle);
    }

    public Cycle updateCycle(Long id, Cycle updated) {
        Cycle cycle = getCycleById(id);
        cycle.setCycle_string(updated.getCycle_string());
        cycle.setMedicine(updated.getMedicine());
        return cycleRepository.save(cycle);
    }

    public void deleteCycle(Long id) {
        cycleRepository.deleteById(id);
    }
}
