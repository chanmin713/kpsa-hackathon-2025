import { useNavigate } from "react-router-dom"
import { benefitData } from "../../data/benefit"

const Benefit = () => {
    const navigate = useNavigate()

    return (
        <div className="max-h-[575px] overflow-y-auto bg-white py-1.5">
            {benefitData.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start py-3 border-b border-gray-200"
                    onClick={() => navigate(`/benefit/${idx}`)}>
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
                            {item.disease.length > 28
                                ? item.disease.slice(0, 28) + "..."
                                : item.disease}
                        </div>
                        <div className="text-base text-sm">신청 장소 | &nbsp;
                            {item.place.length > 28
                                ? item.place.slice(0, 28) + "..."
                                : item.place}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Benefit
