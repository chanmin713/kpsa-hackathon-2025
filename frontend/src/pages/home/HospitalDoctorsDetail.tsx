import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDoctorById } from "../../apis/doctor";
import type { DoctorData } from "../../apis/doctor";
import BackIcon from '../../assets/Icons/BackIcon.svg';

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

const HospitalDoctorsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState<DoctorData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetchDoctorById(Number(id))
            .then(data => {
                setItem(data);
                setError(false);
            })
            .catch(() => {
                setItem(null);
                setError(true);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className="p-6">의사 정보를 불러오는 중입니다...</div>;
    if (error || !item) return <div className="p-6">의사 정보를 찾을 수 없습니다.</div>;

    return (
        <div>
            <img src={BackIcon} onClick={() => navigate(-1)} className="pt-6 px-6 mb-8 ml-[-5px]" />
            <h1 className="px-6 text-2xl font-bold mb-2">{item.title}</h1>
            <div className="flex px-6 justify-between mb-6 text-gray-500"> {item.hospital} </div>
            <img src={doctorImageMap[item.img] || doctor1} className="mb-6" />
            <div className="flex px-6">{item.content}</div>
        </div>
    )
}

export default HospitalDoctorsDetail
