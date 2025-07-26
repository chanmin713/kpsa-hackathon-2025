package chanmin.sisters.hackathon.service;


import chanmin.sisters.hackathon.entity.HospitalRecord;
import chanmin.sisters.hackathon.repository.HospitalRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HospitalRecordService {

    private final HospitalRecordRepository hospitalRecordRepository;

    public List<HospitalRecord> getAllHospitalRecords() {
        return hospitalRecordRepository.findAll();
    }

    public HospitalRecord getHospitalRecordById(Long id) {
        return hospitalRecordRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 병원 기록이 없습니다. id=" + id));
    }

    public HospitalRecord createHospitalRecord(HospitalRecord hospitalRecord) {
        return hospitalRecordRepository.save(hospitalRecord);
    }

    public HospitalRecord updateHospitalRecord(Long id, HospitalRecord updatedRecord) {
        HospitalRecord record = getHospitalRecordById(id);
        record.setUser(updatedRecord.getUser());
        record.setDatetime(updatedRecord.getDatetime());
        record.setLocation(updatedRecord.getLocation());
        record.setSymptom(updatedRecord.getSymptom());
        record.setMemo(updatedRecord.getMemo());
        return hospitalRecordRepository.save(record);
    }

    public void deleteHospitalRecord(Long id) {
        hospitalRecordRepository.deleteById(id);
    }
}