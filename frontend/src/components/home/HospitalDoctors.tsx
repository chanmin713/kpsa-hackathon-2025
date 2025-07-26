import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SortDropdown from "./SortDropdown";
import api from "../../apis/axios";

import doctor1 from '../../assets/Images/doctor3.png'
import doctor2 from '../../assets/Images/doctor2.png'
import doctor3 from '../../assets/Images/doctor1.png'
import doctor4 from '../../assets/Images/doctor4.png'
import doctor5 from '../../assets/Images/doctor5.png'
import doctor6 from '../../assets/Images/doctor6.png'
import doctor7 from '../../assets/Images/doctor7.png'

const doctorImageMap: { [key: string]: string } = {
    doctor1,
    doctor2,
    doctor3,
    doctor4,
    doctor5,
    doctor6,
    doctor7,
};

type DoctorItem = {
    doctor_id: number;
    img: string;
    title: string;
    content: string;
    hospital: string;
}

const HospitalDoctors = () => {
    const navigate = useNavigate();
    const [doctorList, setDoctorList] = useState<DoctorItem[]>([]);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const res = await api.get<DoctorItem[]>("/doctors");
                setDoctorList(res.data);
            } catch (err) {
                console.error("뉴스 불러오기 실패:", err);
            }
        };

        fetchDoctor();
    }, []);

    return (
        <div className="max-h-[710px] bg-white py-1.5 flex flex-col">
            <div className="flex justify-between items-center mb-3 flex-shrink-0">
                <p>
                    총 <span className="font-bold">{doctorList.length}</span>건
                </p>
                <SortDropdown />
            </div>

            <div className="overflow-y-auto flex-grow">
                {doctorList.map((item) => (
                    <div key={item.doctor_id} className="flex justify-between items-start py-3 border-b border-gray-200"
                        onClick={() => navigate(`/doctors/${item.doctor_id}`)}>
                        <div className="flex-1">
                            <div className="text-base font-bold leading-snug">{item.title}</div>
                            <div className="text-base mt-1">
                                {item.content.length > 48
                                    ? item.content.slice(0, 48) + "..."
                                    : item.content}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                {item.hospital}
                            </div>
                        </div>
                        <img
                            src={doctorImageMap[item.img] || doctor1}
                            className="w-[80px] h-[80px] rounded-lg object-cover ml-3"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HospitalDoctors;
