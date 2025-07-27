// import { useNavigate } from "react-router-dom";
import type { CommentInfo, PostInfo } from "../../../types/posts";
import Comment from "./Comment";
import CommentInput from "./CommentTextBox";

export interface CommentListProps {
  commentList: CommentInfo[];
  post: PostInfo | null;
  onNewComment: () => void;
}

function CommentList({ commentList, post, onNewComment }: CommentListProps) {
  return (
    <section className="flex flex-col w-full">
      {post && commentList.map((comment) => (
        <Comment
          key={comment.comment_id}
          comment={comment}
        />
      ))}
      <CommentInput post={post} refreshComment={onNewComment} />
    </section>
  );
}

export default CommentList;
