import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackIcon from '../../assets/Icons/BackIcon.svg'
import TextButton from "../../components/buttons/TextButton"


const WriteSymptom = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [symptom, setSymptom] = useState("")
    const [memo, setMemo] = useState("")

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-shrink-0">
                <img src={BackIcon} onClick={() => navigate(-1)} className="pt-6 px-6 mb-4 ml-[-5px]" />
            </div>
            <h1 className="px-6 mb-6 text-2xl font-bold">증상은 어땠나요?</h1>
            <div className="flex-grow overflow-y-auto px-6 flex flex-col gap-y-6 pb-28">
                <div>
                    <div className="mb-3">발생일시</div>
                    <div className="flex gap-5 justify-center">
                        <input
                            type="date"
                            value={date}
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
                    <div className="flex mb-3">증상</div>
                    <input
                        type="text"
                        value={symptom}
                        onChange={(e) => setSymptom(e.target.value)}
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

export default WriteSymptom