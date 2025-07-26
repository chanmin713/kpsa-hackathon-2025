import type { User } from "../../../types/user";
import foodIcon from "../../../assets/Icons/FoodIcon.svg";

export interface PostProfileProps {
  user: User;
}

function PostProfile({user}: PostProfileProps) {

    return (
        <div className="flex items-center gap-1">
            <img width={24} height={24} src={foodIcon} />
            <span>{user.loginId}</span>
        </div>
    )
}

export default PostProfile