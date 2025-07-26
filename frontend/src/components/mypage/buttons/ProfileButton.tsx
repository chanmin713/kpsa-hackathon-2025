import type { User } from "../../../types/user";
import foodIcon from "../../../assets/Icons/FoodIcon.svg";
import { ChevronRight } from "lucide-react";

function ProfileButton() {
    const user: User = {
        userId: 1,
        loginId: "dkdkdkdkd",
        diseaseId: 3,
        coin: 990
    }
    
    return (
        <div className="flex items-center gap-1">
            <img width={24} height={24} src={foodIcon} />
            <span>{user.loginId}</span>
            <ChevronRight color="text-secondary" width={24} height={24} />
        </div>
    )
}

export default ProfileButton