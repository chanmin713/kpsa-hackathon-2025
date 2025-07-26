import { useParams, useNavigate } from "react-router-dom";
import { diseaseData } from "../../data/diseaseInformation";
import BackIcon from '../../assets/Icons/BackIcon.svg'

const DiseaseInformationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const index = Number(id);
    const item = diseaseData[index];

    if (!item) return <div className="p-6">질환 정보를 찾을 수 없습니다.</div>;

    return (
        <div>
            <img src={BackIcon} onClick={() => navigate(-1)} className="pt-6 px-6 mb-8 ml-[-5px]" />
            <h1 className="px-6 text-2xl font-bold mb-2">{item.title}</h1>
            <div className="px-6 flex justify-between mb-6 text-gray-500">
                <p>
                    {item.author}
                </p>
                <p>{item.date}</p>
            </div>
            <img src={item.img} className="mb-6" />
            <div className="px-6">{item.content}</div>
        </div>
    );
}

export default DiseaseInformationDetail
