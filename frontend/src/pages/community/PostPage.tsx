import BackButton from "../../components/buttons/BackButton";
import { Heart, MessageSquare } from "lucide-react";
import { useParams } from "react-router-dom";
import { commentList, postList } from "../../mockups/posts";
import CommentList from "../../components/community/comments/CommentList";
import foodIcon from "../../assets/Icons/FoodIcon.svg";

function PostPage() {
  const { id } = useParams();
  const post = postList[Number(id)-1];
  const onLikeClick = () => {
    alert(id);
  }

  return (
    <div className="relative p-6 min-h-screen">
      <BackButton />

      <h1 className="text-2xl font-bold mt-4">{post.title}</h1>

      <div className="text-sm text-gray-500 mt-2 flex items-center gap-2">
        <img
          src={foodIcon}
          alt="프로필"
          className="w-6 h-6 rounded-full object-cover"
        />
        <span>{post.user.loginId}</span>
      </div>

      <div className="whitespace-pre-wrap mt-6 text-base text-gray-800">
        {post.content}
      </div>

      <button
        onClick={onLikeClick}
        className="fixed right-6 flex items-center gap-1 bg-white shadow-md rounded-full px-4 py-2 mt-4 text-sm text-gray-600"
      >
        <Heart
          className="w-5 h-5"
          fill={post.isLiked ? "red" : "none"}
          stroke={post.isLiked ? "red" : "#75757A"}
        />
        <span>{post.likes}</span>
      </button>
      <div className="flex gap-1 items-center mt-16 mb-2 text-sm text-gray-600 font-medium">
        <MessageSquare className="w-5 h-5" />
        <span className="ml-1">댓글 {commentList.length}개</span>
      </div>
      <CommentList commentList={commentList} />
    </div>
  );
}

export default PostPage;
