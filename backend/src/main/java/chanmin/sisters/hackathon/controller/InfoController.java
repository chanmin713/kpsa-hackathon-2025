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

    @GetMapping("/{id}")
    public ResponseEntity<Info> getInfoById(@PathVariable Long id) {
        return ResponseEntity.ok(infoService.getInfoById(id));
    }

    @PostMapping
    public ResponseEntity<Info> createInfo(@RequestBody Info info) {
        return ResponseEntity.ok(infoService.createInfo(info));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Info> updateInfo(@PathVariable Long id, @RequestBody Info updatedInfo) {
        return ResponseEntity.ok(infoService.updateInfo(id, updatedInfo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInfo(@PathVariable Long id) {
        infoService.deleteInfo(id);
        return ResponseEntity.noContent().build();
    }
}
