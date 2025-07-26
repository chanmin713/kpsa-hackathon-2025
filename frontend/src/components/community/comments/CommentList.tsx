// import { useNavigate } from "react-router-dom";
import type { CommentInfo } from "../../../types/posts";
import Comment from "./Comment";
import CommentInput from "./CommentTextBox";

export interface CommentListProps {
  commentList: CommentInfo[];
}

function CommentList({ commentList }: CommentListProps) {
  return (
    <section className="flex flex-col w-full">
      {commentList.map((comment) => (
        <Comment
          key={comment.commentId}
          comment={comment}
        />
      ))}
      <CommentInput />
    </section>
  );
}

export default CommentList;
