import { useLocation, useNavigate } from "react-router-dom"
import BackIcon from '../../assets/Icons/BackIcon.svg'
import SearchIcon from '../../assets/Icons/SearchIcon.svg'
import MedicineItem2 from "../../components/record/MedicineItem2"
import { useEffect, useState } from "react";
import api from "../../apis/axios";

type Medication = {
    medi_id: number;
    name: string;
    explaination: string;
};

const MedicineSearch = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const currentFormData = location.state?.currentFormData
    const [medications, setMedications] = useState<Medication[]>([]);

    const handleSelectMedicine = (med: any) => {
        navigate("/medicinecycle", {
            state: {
                selectedMedicine: med,
                currentFormData
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

    return (
        <>
            <img src={BackIcon} onClick={() => navigate(-1)} className="pt-6 px-6 mb-8 ml-[-5px]" />
            <h1 className="px-6 text-2xl font-bold mb-2">어떤 약을 추가할까요?</h1>

            <div className="my-5 mx-6 rounded-lg h-[50px] border-gray-400 border-[1px] flex justify-between items-center px-2">
                <input
                    type="text"
                    placeholder="검색"
                    className="flex-1 ml-2 outline-none w-[50px]"
                />
                <img src={SearchIcon} alt="search icon" className="w-7 h-7" />
            </div>
            <div className="px-6">
                {medications.map((med, idx) => (
                    <div key={idx} onClick={() => handleSelectMedicine(med)}>
                        <MedicineItem2 name={med.name} explaination={med.explaination} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default MedicineSearch