package chanmin.sisters.hackathon.controller;

import chanmin.sisters.hackathon.service.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/data")
@RequiredArgsConstructor
public class ApiController {

    private final ApiService apiService;

    // 의약품 임상시험 정보조회
    @GetMapping(value = "/medi-test", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody String getDrugInfo1(
    ) {
        return apiService.MdcinClincTestInfoService02();
    }

    // 의약품개요정보(e약은요)
    @GetMapping(value = "/medi-info", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody String getDrugInfo2(
    ) {
        return apiService.DrbEasyDrugInfoService();
    }

}
