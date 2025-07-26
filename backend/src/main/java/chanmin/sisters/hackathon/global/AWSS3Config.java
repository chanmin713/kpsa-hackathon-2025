package chanmin.sisters.hackathon.global;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AWSS3Config {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;
    @Value("${cloud.aws.credentials.access-key}")
    private String accessKey;
    @Value("${cloud.aws.credentials.secret-key}")
    private String secretKey;
    @Value("${cloud.aws.region.static}")
    private String region;

    /**
     * Amazon S3 클라이언트 빈 생성
     *
     * - AWS 자격 증명 (accessKey, secretKey) 을 사용하여 AmazonS3 클라이언트를 생성합니다.
     * - 지정된 리전을 기반으로 S3 클라이언트를 설정합니다.
     * - 해당 클라이언트는 S3와의 상호작용(파일 업로드, 삭제 등)에 사용됩니다.
     *
     * @return AmazonS3Client S3 클라이언트 객체
     */
    @Bean
    public AmazonS3Client amazonS3Client() {
        BasicAWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, secretKey);
        return (AmazonS3Client) AmazonS3ClientBuilder.standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();
    }

    /**
     * AwsS3ObjectStorage 빈 생성
     *
     * - Amazon S3 클라이언트를 주입받아 AwsS3ObjectStorage 객체를 생성합니다.
     * - 버킷 정보를 설정하여 S3에서 파일을 저장 및 삭제할 수 있도록 구성합니다.
     *
     * @param amazonS3 Amazon S3 클라이언트 빈
     * @return AwsS3ObjectStorage S3 파일 관리 객체
     */
    @Bean
    public AwsS3ObjectStorage awsS3ObjectStorageUpload(AmazonS3 amazonS3) {
        AwsS3ObjectStorage awsS3ObjectStorageUpload = new AwsS3ObjectStorage(amazonS3);
        awsS3ObjectStorageUpload.setBucket(bucket);
        return awsS3ObjectStorageUpload;
    }
}