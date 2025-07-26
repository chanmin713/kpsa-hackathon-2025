// import { useNavigate } from "react-router-dom";
import type { PostInfo } from "../../../types/posts";
import Post from "./Post";

export interface PostListProps {
  postList: PostInfo[];
}

function PostList({ postList }: PostListProps) {
  // const navigate = useNavigate();
  const onReplyClick = (id: number) => {
    alert(id);
  }
  const onLikeClick = (id: number) => {
    alert(id);
  }

  return (
    <section className="flex flex-col w-full">
      {postList.map((post) => (
        <Post
          key={post.boardId}
          post={post}
          onReplyClick={() => onReplyClick(post.boardId)}
          onLikeClick={() => onLikeClick(post.boardId)}
        />
      ))}
    </section>
  );
}

export default PostList;
