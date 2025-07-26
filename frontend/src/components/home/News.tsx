import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SortDropdown from "./SortDropdown";
import api from "../../apis/axios";

type NewsItem = {
  news_id: number;
  img: string;
  title: string;
  company: string;
  date: string;
};

const News = () => {
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await api.get<NewsItem[]>("/news");
        setNewsList(res.data);
      } catch (err) {
        console.error("뉴스 불러오기 실패:", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-h-[720px] bg-white py-1.5 flex flex-col">
      <div className="flex justify-between items-center mb-3 flex-shrink-0 px-4">
        <p>
          총 <span className="font-bold">{newsList.length}</span>건
        </p>
        <SortDropdown />
      </div>

      <div className="overflow-y-auto flex-grow px-4">
        {newsList.map((item) => (
          <div
            key={item.news_id}
            className="flex justify-between items-start py-3 border-b border-gray-200 cursor-pointer"
            onClick={() => navigate(`/news/${item.news_id}`)}
          >
            <div className="flex-1">
              <div className="text-base font-bold leading-snug">
                {item.title.length > 50 ? item.title.slice(0, 50) + "..." : item.title}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {item.company} &nbsp;&nbsp; {item.date}
              </div>
            </div>
            <img
              src={item.img}
              alt="뉴스 이미지"
              className="w-[80px] h-[80px] rounded-lg object-cover ml-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
