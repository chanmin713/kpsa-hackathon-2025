import type { User } from "../../types/user";
import { getUserProfile } from "../../utils/users";

export interface PostHeaderProps {
  user: User;
}

function PostHeader({user}: PostHeaderProps) {

    return (
        <div className="flex items-center gap-1">
            <img width={24} height={24} src={getUserProfile()} />
            <span>{user.loginId}</span>
        </div>
    )
}

export default PostHeader