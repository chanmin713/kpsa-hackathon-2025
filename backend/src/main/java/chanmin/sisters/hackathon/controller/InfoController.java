package chanmin.sisters.hackathon.controller;


import chanmin.sisters.hackathon.entity.Info;
import chanmin.sisters.hackathon.service.InfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/info")
@RequiredArgsConstructor
public class InfoController {

    private final InfoService infoService;

    @GetMapping
    public List<Info> getAllInfo() {
        return infoService.getAllInfo();
    }

    @GetMapping("/{infoId}")
    public ResponseEntity<Info> getInfoById(@PathVariable Long infoId) {
        return ResponseEntity.ok(infoService.getInfoById(infoId));
    }

    @PostMapping
    public ResponseEntity<Info> createInfo(@RequestBody Info info) {
        return ResponseEntity.ok(infoService.createInfo(info));
    }

    @PutMapping("/{infoId}")
    public ResponseEntity<Info> updateInfo(@PathVariable Long infoId, @RequestBody Info updatedInfo) {
        return ResponseEntity.ok(infoService.updateInfo(infoId, updatedInfo));
    }

    @DeleteMapping("/{infoId}")
    public ResponseEntity<Void> deleteInfo(@PathVariable Long infoId) {
        infoService.deleteInfo(infoId);
        return ResponseEntity.noContent().build();
    }
}
