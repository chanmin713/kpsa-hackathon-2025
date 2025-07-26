import { useNavigate } from "react-router-dom";
import { newsData } from "../../data/news";

const News = () => {
  const navigate = useNavigate();

  return (
    <div className="max-h-[660px] overflow-y-auto bg-white py-1.5">
      {newsData.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-start py-3 border-b border-gray-200 cursor-pointer"
          onClick={() => navigate(`/news/${idx}`)}
        >
          <div className="flex-1">
            <div className="text-base font-bold leading-snug">
              {item.title.length > 50
                ? item.title.slice(0, 50) + "..."
                : item.title}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {item.company} &nbsp;&nbsp; {item.date}
            </div>
          </div>
          <img src={item.img} className="w-[80px] h-[80px] rounded-lg object-cover" />
        </div>
      ))}
    </div>
  );
};

export default News;
