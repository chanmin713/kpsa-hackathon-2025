package chanmin.sisters.hackathon.service;


import chanmin.sisters.hackathon.entity.Info;
import chanmin.sisters.hackathon.repository.InfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InfoService {

    private final InfoRepository infoRepository;

    public List<Info> getAllInfo() {
        return infoRepository.findAll();
    }

    public Info getInfoById(Long id) {
        return infoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 정보가 존재하지 않습니다. id=" + id));
    }

    public Info createInfo(Info info) {
        return infoRepository.save(info);
    }

    public Info updateInfo(Long id, Info updatedInfo) {
        Info info = getInfoById(id);
        info.setTitle(updatedInfo.getTitle());
        info.setContent(updatedInfo.getContent());
        info.setImg(updatedInfo.getImg());
        info.setAuthor(updatedInfo.getAuthor());
        info.setDate(updatedInfo.getDate());
        return infoRepository.save(info);
    }

    public void deleteInfo(Long id) {
        infoRepository.deleteById(id);
    }
}