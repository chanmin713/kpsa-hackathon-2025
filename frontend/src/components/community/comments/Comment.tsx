import type { CommentInfo } from "../../../types/posts";
import PostProfile from "../posts/PostHeader";

export interface CommentProps {
  comment: CommentInfo
}

function Comment({ comment }: CommentProps) {
  return (
    <article
      className="w-full cursor-pointer border-b py-4 flex flex-col gap-3"
    >
      <PostProfile user={comment.user} />
      <div className="whitespace-pre-wrap break-words text-primary">{comment.content}</div>
    </article>
  );
}

export default Comment;
