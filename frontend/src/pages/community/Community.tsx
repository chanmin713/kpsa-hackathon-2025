import { useEffect, useState } from "react";
import BottomNavigation from "../../components/BottomNavigation"
import PostListPage from "./PostListPage";
import CommunityScrollView from "../../components/community/CommunityScrollView";
import AlertIcon from "../../assets/Icons/AlertIcon.svg";
import InfoListPage from "./InfoListPage";
import QuestionListPage from "./QuestionListPage";
import AnyListPage from "./AnyListPage";
import { Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../../storages/usePostStorage";

function Community() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("전체");
  const { setTitle, setCategory, setContent } = usePostStore();

  useEffect(() => {
    const savedTab = localStorage.getItem("activeCommunityTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    localStorage.setItem("activeCommunityTab", tab);
  };

  const onEditButtonClick = () => {
    navigate("/community/post/new")
    setTitle(null);
    setCategory("FREE");
    setContent(null);
  }
  
  return (
    <div className="flex flex-col h-screen">
      {/* 헤더 (스크롤 X) */}
      <div>
        <div className="flex justify-end p-5 px-6 gap-x-2">
          <span onClick={onEditButtonClick}>
            <Edit size={24} />
          </span>
          <img src={AlertIcon} alt="알림" />
        </div>
        <CommunityScrollView
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
      </div>
      <div className="flex-1 overflow-y-auto px-6 mt-2 mb-[80px]">
        {activeTab === "전체" && <PostListPage />}
        {activeTab === "정보" && <InfoListPage />}
        {activeTab === "질문" && <QuestionListPage />}
        {activeTab === "자유게시판" && <AnyListPage />}
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Community