import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackIcon from '../../assets/Icons/BackIcon.svg'
import TextButton from "../../components/buttons/TextButton"
import MedicineItem from "../../components/record/MedicineItem"

const WriteMedicine = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [hospital, setHospital] = useState("")
    const [memo, setMemo] = useState("")
    const today = new Date().toISOString().split("T")[0];

    const [medicines, setMedicines] = useState([
        { name: "타이레놀", schedule: "매일 식후 30분" },
        { name: "베이글", schedule: "매일 오후 12:00" },
        { name: "베이글", schedule: "매일 오후 12:00" },
        { name: "베이글", schedule: "매일 오후 12:00" },
        { name: "베이글", schedule: "매일 오후 12:00" },
    ])

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-shrink-0">
                <img src={BackIcon} onClick={() => navigate(-1)} className="pt-6 px-6 mb-4 ml-[-5px]" />
            </div>
            <h1 className="px-6 mb-6 text-2xl font-bold">사용하는 약이 있나요?</h1>
            <div className="flex-grow overflow-y-auto px-6 flex flex-col gap-y-6 pb-28">
                <div>
                    <div className="mb-3">처방일시</div>
                    <div className="flex gap-5 justify-center">
                        <input
                            type="date"
                            value={date}
                            max={today}
                            onChange={(e) => setDate(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600"
                        />
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between mb-5">
                        <span className="font-medium">약</span>
                        <span
                            className="font-semibold text-blue-400 cursor-pointer"
                            onClick={() => navigate('/medicinesearch')}
                        >
                            + 추가하기
                        </span>
                    </div>

                    {medicines.map((med, idx) => (
                        <MedicineItem
                            key={idx}
                            name={med.name}
                            schedule={med.schedule}
                        />
                    ))}
                </div>

                <div>
                    <div className="flex mb-3">처방병원</div>
                    <input
                        type="text"
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                        className="border w-full border-gray-300 rounded-lg px-4 py-2 text-gray-600"
                    />
                </div>

                <div>
                    <div className="flex mb-3">메모</div>
                    <textarea
                        value={memo}
                        onChange={(e) => setMemo(e.target.value)}
                        className="border w-full h-[200px] border-gray-300 rounded-lg px-4 py-2 text-gray-600 resize-none"
                    />
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full px-6 pb-6 bg-white">
                <TextButton
                    text="저장"
                    variant="primary"
                    onClick={() => {
                        // 저장 로직 작성
                    }}
                />
            </div>
        </div>
    )
}

export default WriteMedicine
