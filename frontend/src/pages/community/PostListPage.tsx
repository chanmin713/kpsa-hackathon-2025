import PostList from "../../components/community/posts/PostList"
import { postList } from "../../mockups/posts"

function PostListPage() {
  
  return (
    <>
      <div className="w-full h-full">
        <PostList postList={postList} />
      </div>
    </>
  )
}

export default PostListPage