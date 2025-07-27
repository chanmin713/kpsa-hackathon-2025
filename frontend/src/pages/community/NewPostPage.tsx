import BackButton from "../../components/buttons/BackButton";
import { useState } from "react";
import { Save, ChevronDown } from "lucide-react";
import { useAuthStore } from "../../storages/useAuthStorage";
import { usePostStore } from "../../storages/usePostStorage";
import { motion, AnimatePresence } from "framer-motion";
import type { category, PostPost } from "../../types/posts";
import { postBoard } from "../../apis/board";
import { useNavigate } from "react-router-dom";

const CATEGORY_LABELS: Record<category, string> = {
  TOTAL: "전체",
  INFO: "정보",
  QNA: "질문",
  FREE: "자유",
};

function NewPostPage() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { title, content, category, setTitle, setContent, setCategory } = usePostStore();
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const onSave = async () => {
    if (!title || !content || !category) {
      alert("모든 항목을 작성해주세요.");
      return;
    }

    if (!user) return;

    const post: PostPost = {
      user: {
        user_id: user.user_id
      },
      title,
      content,
      category
    };
    
    await postBoard(post);

    setTitle(null);
    setContent(null);
    setCategory("FREE");

    navigate(-1);
  };

  const onCategorySelect = (selected: category) => {
    setCategory(selected);
    setShowCategoryModal(false);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-white">
      {/* 헤더 고정 영역 */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 px-6 pt-6 pb-4 shadow-md">
        <BackButton />
        <button
          onClick={onSave}
          className="absolute top-6 right-6 text-primary"
          type="button"
        >
          <Save width={24} height={24} />
        </button>

        <input
          type="text"
          value={title ?? ""}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          className="mt-4 w-full text-xl font-bold border-b border-gray-300 focus:outline-none p-2"
        />

        <div className="mt-2">
          <button
            onClick={() => setShowCategoryModal(true)}
            className="flex items-center justify-between w-full px-4 py-3 border border-gray-300 rounded-lg"
          >
            <span>{CATEGORY_LABELS[category]}</span>
            <ChevronDown />
          </button>
        </div>
      </div>

      {/* 컨텐츠 스크롤 영역 */}
      <div className="pt-[220px] h-full overflow-y-auto px-6 pb-24">
        <textarea
          value={content ?? ""}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
          className="w-full min-h-[calc(100vh-220px)] resize-none p-4 text-base focus:outline-none"
        />
      </div>

      {/* 카테고리 선택 모달 */}
      <AnimatePresence>
        {showCategoryModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCategoryModal(false)}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 right-0 bottom-0 bg-white border-t rounded-t-2xl shadow-xl p-4 z-50"
            >
              <h2 className="text-lg font-bold mb-2">카테고리 선택</h2>
              <ul>
                {(Object.keys(CATEGORY_LABELS) as category[]).map((cat) => (
                  <li key={cat}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded hover:bg-gray-100 ${
                        cat === category ? "bg-gray-100 font-bold" : ""
                      }`}
                      onClick={() => onCategorySelect(cat)}
                    >
                      {CATEGORY_LABELS[cat]}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}


export default NewPostPage;
