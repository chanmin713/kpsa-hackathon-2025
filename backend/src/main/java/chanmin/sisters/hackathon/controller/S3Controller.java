package chanmin.sisters.hackathon.controller;

import chanmin.sisters.hackathon.global.AwsS3ObjectStorage;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/s3")
@RequiredArgsConstructor
public class S3Controller {

    private final AwsS3ObjectStorage awsS3ObjectStorage;

    @PostMapping("/upload/profile")
    public ResponseEntity<String> uploadProfile(@RequestPart("file") MultipartFile file) {
        String uploadedUrl = awsS3ObjectStorage.uploadImageFile(file);
        return ResponseEntity.ok(uploadedUrl);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteFile(@RequestParam("url") String fileUrl) {
        awsS3ObjectStorage.deleteFile(fileUrl);
        return ResponseEntity.ok("파일 삭제 완료");
    }
}
