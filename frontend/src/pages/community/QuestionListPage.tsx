import { useEffect, useState } from "react";
import PostList from "../../components/community/posts/PostList"
import type { PostInfo } from "../../types/posts";
import { boardsByCategory } from "../../apis/board";

function QuestionListPage() {

  const [posts, setPosts] = useState<PostInfo[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const list = await boardsByCategory('QNA');
      setPosts(list);
    };
    fetch();
  }, []);
  
  return (
    <>
      <div className="w-full h-full">
        <PostList postList={posts} />
      </div>
    </>
  )
}

export default QuestionListPage