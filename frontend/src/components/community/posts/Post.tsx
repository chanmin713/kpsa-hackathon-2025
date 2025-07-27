import { useNavigate } from "react-router-dom";
import PostProfile from "./PostHeader";
import PostButton from "./PostButton";
import type { PostInfo } from "../../../types/posts";
import { Heart, MessageSquare } from "lucide-react";

export interface PostProps {
  post: PostInfo;
  onReplyClick: () => void;
  onLikeClick: () => void;
}

function Post({
  post,
  onReplyClick,
  onLikeClick,
}: PostProps) {
  const navigate = useNavigate();
  const goDetail = () => navigate(`/community/post/${post.board_id}`);

  return (
    <article
      onClick={goDetail}
      className="w-full cursor-pointer border-b py-4 flex flex-col gap-3"
    >
      <div className="whitespace-pre-wrap break-words text-text-large text-bold">{post.title}</div>
      <div className="whitespace-pre-wrap break-words line-clamp-2 text-primary">{post.content}</div>

      <div className="flex items-center justify-between pt-2">
        <PostProfile user={post.user} />
        <div className="flex items-center gap-2">
          <PostButton
            icon={<MessageSquare />}
            onClick={(e) => {
              e.stopPropagation();
              onReplyClick();
            }}
            selectedColor="#0064E0"
          />
          <PostButton
            icon={<Heart />}
            onClick={(e) => {
              e.stopPropagation();
              onLikeClick();
            }}
            selectedColor="red"
          />
        </div>
      </div>
    </article>
  );
}

export default Post;
