package chanmin.sisters.hackathon.service;


import chanmin.sisters.hackathon.entity.Doctors;
import chanmin.sisters.hackathon.repository.DoctorsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DoctorsService {

    private final DoctorsRepository doctorsRepository;

    public List<Doctors> getAllDoctors() {
        return doctorsRepository.findAll();
    }

    public Doctors getDoctorById(Long id) {
        return doctorsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 의사가 존재하지 않습니다. id=" + id));
    }

    public Doctors createDoctor(Doctors doctor) {
        return doctorsRepository.save(doctor);
    }

    public Doctors updateDoctor(Long id, Doctors updated) {
        Doctors doctor = getDoctorById(id);
        doctor.setImg(updated.getImg());
        doctor.setTitle(updated.getTitle());
        doctor.setContent(updated.getContent());
        doctor.setHospital(updated.getHospital());
        return doctorsRepository.save(doctor);
    }

    public void deleteDoctor(Long id) {
        doctorsRepository.deleteById(id);
    }
}