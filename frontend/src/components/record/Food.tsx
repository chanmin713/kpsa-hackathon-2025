import { useNavigate } from "react-router-dom"
import { foodData } from "../../data/food"

const Food = ({ selectedDate }: { selectedDate: Date | null }) => {
    const navigate = useNavigate()

    const formatDate = (date: Date) => {
        return date.toISOString().slice(0, 10);
    };

    const isSameDate = (date1: Date, date2: Date) =>
        date1.toISOString().split("T")[0] === date2.toISOString().split("T")[0];

    return (
        <div>
            <div className="px-2 mt-[65px] flex justify-end">
                <span className="bg-gray-400 px-2 py-1 rounded-md text-white" onClick={() => navigate(`/writefood`)}>글쓰기</span>
            </div>
            <div className="max-h-[180px] overflow-y-auto bg-white">
                {foodData
                    .filter(item => {
                        if (!selectedDate) return false;
                        return item.date === formatDate(selectedDate);
                    })
                    .map((item, idx) => (
                        <div key={idx} className="flex justify-between items-start py-4 border-b border-gray-200">
                            <div className="flex-1">
                                <div className="text-base font-bold leading-snug text-lg">
                                    {item.date} {item.time}
                                </div>
                                <div className="text-sm">
                                    음식 |  &nbsp;
                                    {item.food}
                                </div>
                                <div className="text-sm">
                                    kcal |  &nbsp;
                                    {item.kcal}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default Food
