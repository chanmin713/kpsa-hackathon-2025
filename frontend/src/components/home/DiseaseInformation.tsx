import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SortDropdown from "./SortDropdown";
import api from "../../apis/axios";

type DiseaseInformationItem = {
  info_id: number;
  img: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

const DiseaseInformation = () => {
  const navigate = useNavigate();
  const [diseaseList, setDiseaseList] = useState<DiseaseInformationItem[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await api.get<DiseaseInformationItem[]>("/info");
        setDiseaseList(res.data);
      } catch (err) {
        console.error("뉴스 불러오기 실패:", err);
      }
    };

    fetchInfo();
  }, []);

  return (
    <div className="max-h-[710px] bg-white py-1.5 flex flex-col">
      <div className="flex justify-between items-center mb-3 flex-shrink-0">
        <p>
          총 <span className="font-bold">{diseaseList.length}</span>건
        </p>
        <SortDropdown />
      </div>

      <div className="overflow-y-auto flex-grow">
        {diseaseList.map((item) => (
          <div key={item.info_id} className="flex justify-between items-start py-3 border-b border-gray-200"
            onClick={() => navigate(`/info/${item.info_id}`)}>
            <div className="flex-1">
              <div className="text-base font-bold leading-snug">
                {item.title.length > 50
                  ? item.title.slice(0, 50) + "..."
                  : item.title}
              </div>
              <div className="text-base mt-1">
                {item.content.length > 55
                  ? item.content.slice(0, 55) + "..."
                  : item.content}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {item.author} &nbsp;&nbsp; {item.date}
              </div>
            </div>
            {item.img && (
              <img
                src={item.img}
                className="w-[80px] h-[80px] rounded-lg object-cover ml-3"
                alt={item.title}
              />
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseaseInformation;
