import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../apis/axios";
import { useAuthStore } from "../../storages/useAuthStorage";
import type { User } from "../../types/user";

type FoodRecordItem = {
    food_id: number;
    user: User;
    food_name: string;
    food_kcal: number;
    food_date: string;
};

const Food = () => {
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const [foodList, setFoodList] = useState<FoodRecordItem[]>([]);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const res = await api.get<FoodRecordItem[]>("/food");

                if (user) {
                    const filtered = res.data.filter(
                        (item) => item.user.user_id === user.user_id
                    );
                    setFoodList(filtered);
                } else {
                    console.warn("로그인된 유저 정보가 없습니다.");
                    setFoodList([]);
                }
            } catch (err) {
                console.error("음식 기록 불러오기 실패:", err);
            }
        };

        fetchFood();
    }, [user]);

    return (
        <div>
            <div className="px-2 mt-[65px] flex justify-end">
                <span
                    className="bg-gray-400 px-2 py-1 rounded-md text-white"
                    onClick={() => navigate(`/writefood`)}
                >
                    글쓰기
                </span>
            </div>
            <div className="max-h-[575px] overflow-y-auto bg-white">
                {foodList.map((item) => {
                    const date = new Date(item.food_date);
                    const formattedDate = date.toLocaleDateString();
                    const formattedTime = date.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    });

                    return (
                        <div
                            key={item.food_id}
                            className="flex justify-between items-start py-4 border-b border-gray-200"
                        >
                            <div className="flex-1">
                                <div className="text-base font-bold leading-snug text-lg">
                                    {formattedDate} {formattedTime}
                                </div>
                                <div className="text-sm">
                                    음식 | &nbsp;{item.food_name}
                                </div>
                                <div className="text-sm">
                                    kcal | &nbsp;{item.food_kcal} kcal
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Food;
