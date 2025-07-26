import { useNavigate } from "react-router-dom";
import PostHeader from "./PostHeader";
import PostButton from "./PostButton";
import type { PostInfo } from "../../types/posts";
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
  const goDetail = () => navigate(`/community/post/${post.boardId}`);

  return (
    <article
      onClick={goDetail}
      className="w-full cursor-pointer border-b p-4 flex flex-col gap-3"
    >
      <div className="whitespace-pre-wrap break-words text-text-large text-bold">{post.title}</div>
      <div className="whitespace-pre-wrap break-words line-clamp-2 text-primary">{post.content}</div>

      <div className="flex items-center justify-between pt-2">
        {/* 왼쪽: 프로필 */}
        <PostHeader user={post.user} />

        {/* 오른쪽: 버튼 */}
        <div className="flex items-center gap-2">
          <PostButton
            icon={<MessageSquare />}
            count={post.replies}
            onClick={(e) => {
              e.stopPropagation();
              onReplyClick();
            }}
            selectedColor="#0064E0"
            isSelected={post.isReplied}
          />
          <PostButton
            icon={<Heart fill={post.isLiked ? "red" : "none"} />}
            count={post.likes}
            onClick={(e) => {
              e.stopPropagation();
              onLikeClick();
            }}
            selectedColor="red"
            isSelected={post.isLiked}
          />
        </div>
      </div>
    </article>
  );
}

export default Post;
