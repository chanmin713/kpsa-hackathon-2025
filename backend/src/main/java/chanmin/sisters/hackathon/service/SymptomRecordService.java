package chanmin.sisters.hackathon.service;


import chanmin.sisters.hackathon.entity.SymptomRecord;
import chanmin.sisters.hackathon.repository.SymptomRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SymptomRecordService {

    private final SymptomRecordRepository symptomRecordRepository;

    public List<SymptomRecord> getAllSymptomRecords() {
        return symptomRecordRepository.findAll();
    }

    public SymptomRecord getSymptomRecordById(Long id) {
        return symptomRecordRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 증상 기록이 없습니다. id=" + id));
    }

    public SymptomRecord createSymptomRecord(SymptomRecord record) {
        return symptomRecordRepository.save(record);
    }

    public SymptomRecord updateSymptomRecord(Long id, SymptomRecord updated) {
        SymptomRecord record = getSymptomRecordById(id);
        record.setUser(updated.getUser());
        record.setStart_time(updated.getStart_time());
        record.setSymptoms(updated.getSymptoms());
        record.setMemo(updated.getMemo());
        return symptomRecordRepository.save(record);
    }

    public void deleteSymptomRecord(Long id) {
        symptomRecordRepository.deleteById(id);
    }
}
