import { useParams, useNavigate } from "react-router-dom";
import { fetchDiseaseById } from "../../apis/diseaseInformation";
import type { DiseaseInformationData } from "../../apis/diseaseInformation";

import BackIcon from '../../assets/Icons/BackIcon.svg'
import { useEffect, useState } from "react";

const DiseaseInformationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState<DiseaseInformationData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetchDiseaseById(Number(id))
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

    if (loading) return <div className="p-6">질환 정보를 불러오는 중입니다...</div>;
    if (error || !item) return <div className="p-6">질환 정보를 찾을 수 없습니다.</div>;

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
            {item.img && (
                <img
                    src={item.img}
                    className="w-[80px] h-[80px] rounded-lg object-cover ml-3"
                    alt={item.title}
                />
            )}
            <div className="px-6">{item.content}</div>
        </div>
    );
}

export default DiseaseInformationDetail
