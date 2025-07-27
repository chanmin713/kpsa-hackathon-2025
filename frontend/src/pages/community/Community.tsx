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
import FloatingButton from "../../components/buttons/FloatingButton";
import ChatModal from "../home/ChatModal";
import DoctorIcon from '../../assets/Icons/DoctorIcon.svg'

import Logo from '../../assets/Images/logo.svg'
import SearchIcon from '../../assets/Icons/SearchIcon.svg'

function Community() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("전체");
  const { setTitle, setCategory, setContent } = usePostStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="flex justify-between p-5 px-6">
          <img src={Logo} className="w-[40px]" />
          <div className="w-[250px] rounded-lg border-gray-400 border-[1px] flex justify-between items-center px-2">
            <input
              type="text"
              placeholder="검색"
              className="flex-1 ml-2 outline-none text-sm w-[50px]"
            />
            <img src={SearchIcon} alt="search icon" className="w-5 h-5" />
          </div>
          <img src={AlertIcon} />
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

      <FloatingButton onClick={() => setIsModalOpen(true)}>
        <img src={DoctorIcon} />
      </FloatingButton>

      {isModalOpen && <ChatModal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default Community