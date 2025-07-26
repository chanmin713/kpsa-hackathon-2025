import { useParams, useNavigate } from "react-router-dom";
import { doctorsData } from "../../data/doctors";
import BackIcon from '../../assets/Icons/BackIcon.svg'

const HospitalDoctorsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const index = Number(id);
    const item = doctorsData[index];

    if (!item) return <div className="p-6">병원 정보를 찾을 수 없습니다.</div>;

    return (
        <div>
            <img src={BackIcon} onClick={() => navigate(-1)} className="pt-6 px-6 mb-8 ml-[-5px]" />
            <h1 className="px-6 text-2xl font-bold mb-2">{item.title}</h1>
            <div className="flex px-6 justify-between mb-6 text-gray-500"> {item.hospital} </div>
            <img src={item.profile} className="mb-6" />
            <div className="flex px-6">{item.content}</div>
        </div>
    );
}

export default HospitalDoctorsDetail
