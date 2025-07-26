import BottomNavigation from "../../components/BottomNavigation"
import PostList from "../../components/community/PostList"
import { postList } from "../../mockups/posts"

function Community() {
  return (
    <>
      <div className="w-full h-full">
        <PostList postList={postList} />
      </div>
      <BottomNavigation />
    </>
  )
}

export default Community