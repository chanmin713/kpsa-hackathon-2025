package chanmin.sisters.hackathon.global;


import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.UUID;

@Slf4j
@Data
public class AwsS3ObjectStorage {

    private AmazonS3 amazonS3; // AmazonS3 클라이언트, 빈으로 주입
    private String bucket; // S3 버킷 이름, 빈 주입 시 setter 사용
    private String aiS3Url; // S3 URL, 빈 주입 시 setter 사용

    /**
     * 생성자 - AmazonS3 객체를 주입받아 초기화
     *
     * @param amazonS3 AWS S3 클라이언트
     */
    public AwsS3ObjectStorage(AmazonS3 amazonS3) {
        this.amazonS3 = amazonS3;
    }

    /**
     * MultipartFile을 News AWS S3에 업로드하는 메서드
     *
     * @param multipartFile 업로드할 파일
     * @return 업로드된 파일의 S3 URL
     */
    public String uploadImageFile(MultipartFile multipartFile) {
        // 파일이 없거나 비어 있는 경우 예외 발생
        if (multipartFile == null || multipartFile.isEmpty()) {
            throw new IllegalArgumentException("파일이 없거나 비어 있습니다.");
        }

        // 원본 파일명 가져오기
        String originalFileName = multipartFile.getOriginalFilename();
        if (originalFileName == null || originalFileName.trim().isEmpty()) {
            throw new IllegalArgumentException("유효하지 않은 파일명입니다.");
        }

        // UUID를 사용하여 고유한 파일명 생성 (중복 방지)
        String fileName = UUID.randomUUID() + "_" + originalFileName;

        // 나머지 코드는 동일
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(multipartFile.getSize());
        metadata.setContentType(multipartFile.getContentType());

        try {
            amazonS3.putObject(bucket, fileName, multipartFile.getInputStream(), metadata);
        } catch (IOException e) {
            log.error("파일 업로드 에러 : {}", originalFileName, e);
            throw new RuntimeException("파일 업로드 실패", e);
        }

        // 업로드된 파일의 S3 URL 반환
        return amazonS3.getUrl(bucket, fileName).toString();
    }


    /**
     * AWS S3에서 파일을 삭제하는 메서드
     *
     * @param fileUrl 삭제할 파일의 URL
     */
    public void deleteFile(String fileUrl) {
        try {
            // URL을 URI 객체로 변환
            URI uri = new URI(fileUrl);
            String key = uri.getPath(); // URI에서 경로(path) 추출

            // 경로(path) 앞에 '/'가 있다면 제거하여 S3 객체 키 형식으로 변환
            if (key.startsWith("/")) {
                key = key.substring(1);
            }

            // S3에서 해당 파일이 존재하는지 확인
            if (amazonS3.doesObjectExist(bucket, key)) {
                // 파일이 존재하면 삭제
                amazonS3.deleteObject(bucket, key);
                log.info("파일 삭제 성공 : {}", key);
            } else {
                // 존재하지 않는 파일에 대한 삭제 요청 시 예외 발생
                log.warn("파일을 발견하지 못함 : {}", key);
                throw new RuntimeException("S3에 파일이 존재하지 않습니다: " + key);
            }
        } catch (URISyntaxException e) {
            // 유효하지 않은 URL 예외 처리
            log.error("유효하지 않은 URL: {}", fileUrl, e);
            throw new IllegalArgumentException("유효하지 않은 URL입니다.", e);
        } catch (Exception e) {
            // 기타 예외 처리
            log.error("파일 삭제 실패 : {}", fileUrl, e);
            throw new RuntimeException("파일 삭제 실패", e);
        }
    }
}
