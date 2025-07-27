import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import BackIcon from '../../assets/Icons/BackIcon.svg'
import TextButton from "../../components/buttons/TextButton"
import MedicineItem from "../../components/record/MedicineItem"
import type { Pill } from "../../data/pill"
import api from "../../apis/axios"
import { useAuthStore } from "../../storages/useAuthStorage";

const WriteMedicine = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [hospital, setHospital] = useState("")
    const [memo, setMemo] = useState("")
    const today = new Date().toISOString().split(" ")[0];

    const location = useLocation()
    const [medicines, setMedicines] = useState<Pill[]>([])

    const { user } = useAuthStore();


    useEffect(() => {
        const selected: Pill | undefined = location.state?.selectedMedicine
        const shouldPreserveState = location.state?.preserveState
        const restoreFormData = location.state?.restoreFormData

        if (restoreFormData) {
            setDate(restoreFormData.date || "")
            setTime(restoreFormData.time || "")
            setHospital(restoreFormData.hospital || "")
            setMemo(restoreFormData.memo || "")
            if (restoreFormData.medicines) {
                setMedicines(restoreFormData.medicines)
            }
        }

        if (selected) {
            setMedicines((prev) => {
                const alreadyExists = prev.some((item) => item.medi_id === selected.medi_id)
                if (alreadyExists) return prev
                return [...prev, selected]
            })

            if (shouldPreserveState) {
                navigate("/writemedicine", { replace: true, state: null })
            }
        }
    }, [location.state, navigate])


    const handleSave = async () => {
        if (!date || !time || !hospital || !memo) {
            alert("모든 필드를 입력해 주세요.");
            return;
        }

        if (!user) {
            alert("로그인이 필요합니다.");
            return;
        }

        if (medicines.length === 0) {
            alert("약을 한 개 이상 추가해 주세요.");
            return;
        }

        const datetime = new Date(`${date}T${time}`).toISOString();

        try {
            for (const medicine of medicines) {
                const requestBody = {
                    user,
                    disease: user.disease ?? {
                        disease_id: 0,
                        disease_name_kr: "기본질환",
                        disease_name_en: "default"
                    },
                    cycle: {
                        cycle_id: medicine.cycle_id || 0,
                        cycle_string: medicine.schedule || "하루 1회",
                        medicine: {
                            medi_id: medicine.medi_id,
                            name: medicine.name,
                            explaination: medicine.explaination,
                        }
                    },
                    mr_time: datetime,
                    mr_hospital: hospital,
                    memo
                };

                // ✅ 전송 전에 console.log로 확인
                console.log("📦 보내는 데이터:", requestBody);

                await api.post("/mr", requestBody);
            }

            alert("모든 약 정보가 저장되었습니다.");
            navigate("/record");
        } catch (err) {
            console.error("❌ 저장 실패!", err);
            alert("저장에 실패했습니다. 콘솔을 확인해 주세요.");
        }
    };



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
                            onClick={() => navigate('/medicinesearch', {
                                state: {
                                    currentFormData: { date, time, hospital, memo, medicines }
                                }
                            })}
                        >
                            + 추가하기
                        </span>
                    </div>

                    {medicines.map((med, idx) => (
                        <MedicineItem
                            key={idx}
                            name={med.name}
                            explaination={med.schedule || med.explaination}
                            onRemove={() => setMedicines((prev) => prev.filter((_, i) => i !== idx))}
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
                    onClick={handleSave}
                />
            </div>
        </div>
    )
}

export default WriteMedicine
