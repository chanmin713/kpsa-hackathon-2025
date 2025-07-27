import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackIcon from '../../assets/Icons/BackIcon.svg'
import TextButton from "../../components/buttons/TextButton"
import api from "../../apis/axios";
import { useAuthStore } from "../../storages/useAuthStorage";
import Modal from "../../components/common/Modal";
import Button from "../../components/buttons/Button";

const WriteSymptom = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [symptom, setSymptom] = useState("")
    const [memo, setMemo] = useState("")
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState("");

    const handleModalClose = () => setShowModal(false);

    const { user } = useAuthStore();

    const handleSave = async () => {
        if (!date || !time || !symptom || !memo) {
            // alert("모든 필드를 입력해 주세요.");
            setModalText("모든 필드를 입력해 주세요.");
            setShowModal(true);
            
            return;
        }

        if (!user) {
            // alert("로그인이 필요합니다.");
            setModalText("로그인이 필요합니다.");
            setShowModal(true);
            return;
        }

        const start_time = new Date(`${date} ${time}`).toISOString();

        const requestBody = {
            user,
            start_time,
            symptoms: symptom,
            memo,
        };

        try {
            await api.post("/sr", requestBody);
            alert("저장되었습니다.");
            navigate(-1);
        } catch (err) {
            console.error("저장 실패:", err);
            alert("저장에 실패했습니다.");
        }
    };

    const today = new Date().toISOString().split(" ")[0];

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
                    onClick={handleSave}

                />
            </div>
            {showModal && (
                <Modal onClose={handleModalClose}>
                    <div className="text-center">
                    <p className="text-lg font-semibold mb-4">{modalText}</p>
                    <Button onClick={handleModalClose}>
                        <span>확인</span>
                    </Button>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default WriteSymptom