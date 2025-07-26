package chanmin.sisters.hackathon.service;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
public class ApiService {

    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${api.publicdata.service-key}")
    private String serviceKey;

    private static final String MdcinClincTestInfoService02_BASE_URL = "https://apis.data.go.kr/1471000/MdcinClincTestInfoService02/getMdcinClincTestInfoList02";
    private static final String DrbEasyDrugInfoService_BASE_URL = "https://apis.data.go.kr/1471000/DrbEasyDrugInfoService";


    // 의약품 임상시험 정보조회
    public String MdcinClincTestInfoService02() {
        String uri = UriComponentsBuilder.fromHttpUrl(MdcinClincTestInfoService02_BASE_URL)
                .queryParam("serviceKey", serviceKey)
                .queryParam("pageNo", "1")
                .queryParam("numOfRows", "20")
                .queryParam("type", "json")
                .build()
                .toUriString();

        ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);
        return response.getBody();
    }


    // 의약품개요정보(e약은요)
    public String DrbEasyDrugInfoService() {
        String uri = UriComponentsBuilder.fromHttpUrl(DrbEasyDrugInfoService_BASE_URL)
                .queryParam("serviceKey", serviceKey)
                .queryParam("pageNo", "1")
                .queryParam("numOfRows", "20")
                .queryParam("type", "json")
                .build()
                .toUriString();

        ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);
        return response.getBody();
    }

}