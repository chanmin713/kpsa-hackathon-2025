import { clinicalData } from "../../data/clinical";

const ClinicalTrial = () => {

    return (
        <div className="max-h-[575px] overflow-y-auto bg-white py-1.5">
            {clinicalData.map((item, idx) => (
                <div className="flex flex-col ">
                    <div className="w-[100px] h-2 bg-gray-200 rounded-sm relative overflow-hidden mb-2 mt-2">
                        <div
                            className="h-full bg-blue-500 transition-all duration-300"
                            style={{ width: `${(Number(item.step) / 4) * 100}%` }}
                        ></div>
                        {/* 단계 구분선 */}
                        {[1, 2, 3].map((n) => (
                            <div
                                key={n}
                                className="absolute top-0 h-full w-[1px] bg-white/70"
                                style={{ left: `${(n / 4) * 100}%` }}
                            />
                        ))}
                    </div>
                    <div key={idx} className="flex border-b border-gray-200 pb-4 mt-1">
                        <div className="flex flex-1 justify-between items-center">
                            <div className="text-base font-bold text-lg leading-snug flex-1 text-left">
                                {item.title.length > 16
                                    ? item.title.slice(0, 16) + "..."
                                    : item.title}
                            </div>
                            <div className="min-w-[4rem] flex justify-center items-center">
                                <div
                                    className={
                                        `text-base px-2 py-1 text-sm rounded-md w-fit
                                        ${item.available === "완료" ? "bg-green-100 text-green-800" : ""}
                                        ${["모집중", "진행중", "등록중"].includes(item.available) ? "bg-blue-100 text-blue-800" : ""}
                                        ${["모집전", "중단"].includes(item.available) ? "bg-gray-100 text-gray-700" : ""}
                                    `}
                                >
                                    {item.available}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ClinicalTrial