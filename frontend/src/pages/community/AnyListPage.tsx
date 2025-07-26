import PostList from "../../components/community/posts/PostList"
import { postList } from "../../mockups/posts"

function AnyListPage() {
  
  return (
    <>
      <div className="w-full h-full">
        <PostList postList={postList} />
      </div>
    </>
  )
}

export default AnyListPage