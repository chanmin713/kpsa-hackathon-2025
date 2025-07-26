package chanmin.sisters.hackathon.service;

import chanmin.sisters.hackathon.entity.MedicationRecord;
import chanmin.sisters.hackathon.repository.MedicationRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MedicationRecordService {

    private final MedicationRecordRepository medicationRecordRepository;

    public List<MedicationRecord> getAllRecords() {
        return medicationRecordRepository.findAll();
    }

    public MedicationRecord getRecordById(Long id) {
        return medicationRecordRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 복용 기록이 없습니다. id=" + id));
    }

    public MedicationRecord createRecord(MedicationRecord record) {
        return medicationRecordRepository.save(record);
    }

    public MedicationRecord updateRecord(Long id, MedicationRecord updated) {
        MedicationRecord record = getRecordById(id);
        record.setCycle(updated.getCycle());
        record.setUser(updated.getUser());
        record.setMr_time(updated.getMr_time());
        record.setMr_hospital(updated.getMr_hospital());
        record.setMemo(updated.getMemo());
        return medicationRecordRepository.save(record);
    }

    public void deleteRecord(Long id) {
        medicationRecordRepository.deleteById(id);
    }
}
