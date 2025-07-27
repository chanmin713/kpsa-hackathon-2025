import BackButton from "../../components/buttons/BackButton";
import { Heart, MessageSquare } from "lucide-react";
import { useParams } from "react-router-dom";
import CommentList from "../../components/community/comments/CommentList";
import foodIcon from "../../assets/Icons/FoodIcon.svg";
import { boardById, getCommentsById, getLikeCount, sendLike } from "../../apis/board";
import { useEffect, useState } from "react";
import type { CommentInfo, PostInfo } from "../../types/posts";
import { useAuthStore } from "../../storages/useAuthStorage";

function PostPage() {
  const { id } = useParams();
  const postId = Number(id);
  const { user } = useAuthStore();

  const [post, setPost] = useState<PostInfo | null>(null);
  const [comments, setComments] = useState<CommentInfo[]>([]);
  const [likeCnt, setLikeCnt] = useState<number>(0);

  useEffect(() => {
    const fetch = async () => {
      const item = await boardById(postId);
      setPost(item);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const list = await getCommentsById(postId);
      setComments(list);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const count = await getLikeCount(postId);
      setLikeCnt(count);
    };
    fetch();
  }, []);

  const onLikeClick = async () => {
    await sendLike(user?.user_id ?? 0, Number(id));
    const count = await getLikeCount(postId);
    setLikeCnt(count);
  }

  const fetchComments = async () => {
    const list = await getCommentsById(postId);
    setComments(list);
  };

  return (
    <div className="relative p-6 min-h-screen">
      <BackButton />

      <h1 className="text-2xl font-bold mt-4">{post?.title}</h1>

      <div className="text-sm text-gray-500 mt-2 flex items-center gap-2">
        <img
          src={foodIcon}
          alt="프로필"
          className="w-6 h-6 rounded-full object-cover"
        />
        <span>{post?.user.username}</span>
      </div>

      <div className="whitespace-pre-wrap mt-6 text-base text-gray-800">
        {post?.content}
      </div>

      <button
        onClick={onLikeClick}
        className="fixed right-6 flex items-center gap-1 bg-white shadow-md rounded-full px-4 py-2 mt-4 text-sm text-gray-600"
      >
        <Heart
          className="w-5 h-5"
        />
        <span>{likeCnt}</span>
      </button>
      <div className="flex gap-1 items-center mt-16 mb-2 text-sm text-gray-600 font-medium">
        <MessageSquare className="w-5 h-5" />
        <span className="ml-1">댓글 {comments.length}개</span>
      </div>
      <CommentList commentList={comments} post={post} onNewComment={fetchComments} />
    </div>
  );
}

export default PostPage;
