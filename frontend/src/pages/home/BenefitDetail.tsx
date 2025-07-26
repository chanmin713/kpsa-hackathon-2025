import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBenefitById } from "../../apis/benefit";
import type { BenefitDetailData } from "../../apis/benefit";
import BackIcon from '../../assets/Icons/BackIcon.svg';

const BenefitDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState<BenefitDetailData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetchBenefitById(Number(id))
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

    if (loading) return <div className="p-6">지원금 정보를 불러오는 중입니다...</div>;
    if (error || !item) return <div className="p-6">지원금 정보를 찾을 수 없습니다.</div>;

    return (
        <div className="p-6">
            <img src={BackIcon} onClick={() => navigate(-1)} className="mb-8 ml-[-5px]" />
            <h1 className="text-2xl font-bold mb-8">{item.title}</h1>
            <div className="flex flex-col space-y-1">
                <div><span className="font-bold">지원 범위</span> | {item.boundary}</div>
                <div><span className="font-bold">지원 질환</span> | {item.disease}</div>
                <div><span className="font-bold">신청 장소</span> | {item.place}</div>
            </div>
            <div>상세 뉴스 내용이 여기에 표시됩니다.</div>
        </div>
    );
};

export default BenefitDetail;
