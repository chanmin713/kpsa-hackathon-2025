import type { User } from "../../../types/user";
import foodIcon from "../../../assets/Icons/FoodIcon.svg";
import { ChevronRight } from "lucide-react";
import { useAuthStore } from "../../../storages/useAuthStorage";

function ProfileButton() {
    const userInfo: User = {
        user_id: 1,
        username: "김환자",
        disease: {
            disease_id: 1,
            disease_name_kr: "크론병",
            disease_name_en: "Crohn's disease"
        },
        user_coin: 990,
        start_date: "",
        end_date: ""
    }

    const { user } = useAuthStore();
    
    return (
        <div className="flex items-center gap-1">
            <img width={24} height={24} src={foodIcon} />
            <span>{user?.username ?? userInfo.username}</span>
            <ChevronRight color="text-secondary" width={24} height={24} />
        </div>
    )
}

export default ProfileButton