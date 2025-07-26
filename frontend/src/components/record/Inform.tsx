import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import api from "../../apis/axios";
import { useAuthStore } from "../../storages/useAuthStorage";
import type { User } from "../../types/user";

type SymptomItem = {
    sr_id: number;
    user: User;
    start_time: string;
    symptoms: string;
    memo: string;
}

const Inform = () => {
    const navigate = useNavigate()
    const { user } = useAuthStore();
    const [srList, setSrList] = useState<SymptomItem[]>([]);

    useEffect(() => {
        const fetchSr = async () => {
            try {
                const res = await api.get<SymptomItem[]>("/sr");

                if (user) {
                    const filtered = res.data.filter(
                        (item) => item.user.user_id === user.user_id
                    );
                    setSrList(filtered);
                } else {
                    console.warn("로그인된 유저 정보가 없습니다.");
                    setSrList([]);
                }
            } catch (err) {
                console.error("병원 기록 불러오기 실패:", err);
            }
        };

        fetchSr();
    }, [user]);

    return (
        <div>
            <div className="px-2 mt-[65px] flex justify-end">
                <span className="bg-gray-400 px-2 py-1 rounded-md text-white" onClick={() => navigate(`/writesymptom`)}>글쓰기</span>
            </div>
            <div className="max-h-[575px] overflow-y-auto bg-white">
                {srList.map((item) => (
                    <div key={item.sr_id} className="flex justify-between items-start py-4 border-b border-gray-200">
                        <div className="flex-1">
                            <div className="text-base font-bold leading-snug text-lg">
                                {item.start_time}
                            </div>
                            <div className="text-sm">
                                증 상 |  &nbsp;
                                {item.symptoms}
                            </div>
                            <div className="text-base text-sm">메 모 | &nbsp;
                                {item.memo}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Inform
