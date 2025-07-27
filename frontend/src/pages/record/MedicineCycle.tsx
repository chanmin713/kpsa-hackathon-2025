import { useNavigate, useLocation } from "react-router-dom"
import BackIcon from '../../assets/Icons/BackIcon.svg'
import { useEffect, useState } from "react";
import api from "../../apis/axios";
import TextButton from "../../components/buttons/TextButton";

type Medication = {
    medi_id: number;
    name: string;
    explaination: string;
};

const MedicineCycle = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const selectedMedicine = location.state?.selectedMedicine
    const currentFormData = location.state?.currentFormData

    const [medications, setMedications] = useState<Medication[]>([]);
    const [dosage, setDosage] = useState("");
    const [cycle, setCycle] = useState("");

    const handleSelectMedicine = (med: any) => {
        navigate("/writemedicine", {
            state: {
                selectedMedicine: med,
                preserveState: true // 기존 상태 유지 플래그 추가
            }
        });
    };

    useEffect(() => {
        const fetchMedications = async () => {
            try {
                const response = await api.get<Medication[]>("/medications");
                setMedications(response.data);
            } catch (error) {
                console.error("약 목록 불러오기 실패:", error);
            }
        };

        fetchMedications();
    }, []);

    const handleSave = async () => {
        if (!dosage || !cycle) {
            alert("모든 필드를 입력해 주세요.");
            return;
        }

        try {
            const requestBody = {
                cycle_string: `${cycle} ${dosage}`,
                medicine: {
                    medi_id: selectedMedicine.medi_id,
                    name: selectedMedicine.name,
                    explaination: selectedMedicine.explaination
                }
            };

            const response = await api.post("/cycle", requestBody);

            navigate("/writemedicine", {
                state: {
                    selectedMedicine: {
                        ...selectedMedicine,
                        schedule: `${cycle} ${dosage}`,
                        cycle_id: response.data.cycle_id
                    },
                    preserveState: true,
                    restoreFormData: currentFormData
                }
            });

        } catch (error) {
            console.error("저장 실패:", error);
            alert("저장에 실패했습니다.");
        }
    };

    return (
        <>
            <img src={BackIcon} onClick={() => navigate(-1)} className="pt-6 px-6 mb-8 ml-[-5px]" />
            <h1 className="px-6 text-2xl font-bold mb-2">{selectedMedicine?.name}</h1>  {/* 수정 */}
            <div className="flex flex-col gap-8 mt-10">
                <div className="px-6 flex flex-col gap-3">
                    <p>1회 복용량</p>
                    <input
                        type="text"
                        value={dosage}
                        onChange={(e) => setDosage(e.target.value)}
                        className="border w-full border-gray-300 rounded-lg px-4 py-2 text-gray-600"
                    />
                </div>

                <div className="px-6 flex flex-col gap-3">
                    <p>복용 주기</p>
                    <input
                        type="text"
                        value={cycle}
                        onChange={(e) => setCycle(e.target.value)}
                        className="border w-full border-gray-300 rounded-lg px-4 py-2 text-gray-600"
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
        </>
    )
}

export default MedicineCycle