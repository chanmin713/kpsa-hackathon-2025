import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import SortDropdown from "./SortDropdown"
import api from "../../apis/axios";

type BenefitDetailItem = {
    benefit_id: number;
    title: string;
    boundary: string;
    disease: string;
    place: string;
}


const Benefit = () => {
    const navigate = useNavigate()

    const [benefitList, setBenefitList] = useState<BenefitDetailItem[]>([]);

    useEffect(() => {
        const fetchBenefit = async () => {
            try {
                const res = await api.get<BenefitDetailItem[]>("/benefits");
                setBenefitList(res.data);
            } catch (err) {
                console.error("뉴스 불러오기 실패:", err);
            }
        };

        fetchBenefit();
    }, []);

    return (
        <div className="max-h-[710px] bg-white py-1.5 flex flex-col">
            <div className="flex justify-between items-center mb-3 flex-shrink-0">
                <p>
                    총 <span className="font-bold">{benefitList.length}</span>건
                </p>
                <SortDropdown />
            </div>

            <div className="overflow-y-auto flex-grow">
                {benefitList.map((item) => (
                    <div key={item.benefit_id} className="flex justify-between items-start py-3 border-b border-gray-200"
                        onClick={() => navigate(`/benefits/${item.benefit_id}`)}>
                        <div className="flex-1">
                            <div className="text-base font-bold leading-snug">
                                {item.title.length > 50
                                    ? item.title.slice(0, 50) + "..."
                                    : item.title}
                            </div>
                            <div className="text-base text-sm mt-1">지원 범위 | &nbsp;
                                {item.boundary.length > 28
                                    ? item.boundary.slice(0, 28) + "..."
                                    : item.boundary}
                            </div>
                            <div className="text-base text-sm">지원 질환 | &nbsp;
                                {item.disease.length > 26
                                    ? item.disease.slice(0, 26) + "..."
                                    : item.disease}
                            </div>
                            <div className="text-base text-sm">신청 장소 | &nbsp;
                                {item.place.length > 27
                                    ? item.place.slice(0, 27) + "..."
                                    : item.place}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Benefit
