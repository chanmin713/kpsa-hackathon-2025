import { useNavigate } from "react-router-dom"
import { hospitalData } from "../../data/hospital"

const Hospital = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="px-2 mt-[65px] flex justify-end">
                <span className="bg-gray-400 px-2 py-1 rounded-md text-white" onClick={() => navigate(`/writehospital`)}>글쓰기</span>
            </div>
            <div className="max-h-[575px] overflow-y-auto bg-white">
                {hospitalData.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start py-4 border-b border-gray-200">
                        <div className="flex-1">
                            
                            <div className="text-base font-bold leading-snug text-lg">
                                {item.date} {item.time}
                            </div>
                            <div className="text-sm">
                                병 원 |  &nbsp;
                                {item.hospital}
                            </div>
                            <div className="text-sm">
                                검 사 |  &nbsp;
                                {item.diagnosis}
                            </div>
                            <div className="text-base text-sm">메 모 | &nbsp;
                                {item.memo}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Hospital
