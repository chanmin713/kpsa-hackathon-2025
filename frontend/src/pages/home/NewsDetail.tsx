import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNewsById } from "../../apis/news";
import type { NewsDetailData } from "../../apis/news";
import BackIcon from '../../assets/Icons/BackIcon.svg';

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState<NewsDetailData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetchNewsById(Number(id))
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

    if (loading) return <div className="p-6">뉴스를 불러오는 중입니다...</div>;
    if (error || !item) return <div className="p-6">뉴스를 찾을 수 없습니다.</div>;

    return (
        <div>
            <img
                src={BackIcon}
                alt="뒤로가기"
                onClick={() => navigate(-1)}
                className="pt-6 px-6 mb-8 ml-[-5px] cursor-pointer"
            />

            <div className="px-6">
                <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
                <div className="flex justify-between text-gray-500 mb-6 text-sm">
                    <span>{item.author} · {item.company}</span>
                    <span>{item.date}</span>
                </div>
            </div>

            <img src={item.img} alt="뉴스 이미지" className="w-full mb-6" />
            <div className="px-6 text-base whitespace-pre-line mb-10">{item.content}</div>
        </div>
    );
};

export default NewsDetail;
