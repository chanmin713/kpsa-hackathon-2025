import { File, Heart, LayoutDashboard, MailQuestion, MessageCircleReply, Pen, Pill, Scroll, Speaker } from "lucide-react";
import BottomNavigation from "../../components/BottomNavigation";
import AccordionList from "../../components/mypage/accordion/AccordionList";
import Banner from "../../components/mypage/banner/Banner";
import ProfileButton from "../../components/mypage/buttons/ProfileButton";
import SettingButton from "../../components/mypage/buttons/SettingButton";
// import { useNavigate } from "react-router-dom";
import type { IconListItemProps } from "../../components/mypage/accordion/IconListItem";
import IconList from "../../components/mypage/accordion/IconList";
import Modal from "../../components/common/Modal";
import Button from "../../components/buttons/Button";
import { useState } from "react";

interface AccordionDataItem {
  title: string;
  content: React.ReactNode;
}

function Home() {
    // const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
    setShowModal(true);
    };

    const handleModalClose = () => {
    setShowModal(false);
    };

    const infoMenu: IconListItemProps[] = [
        {
            icon: MessageCircleReply,
            title: "내 댓글",
            onClick: handleModalOpen
        },
        {
            icon: Heart,
            title: "좋아요",
            onClick: handleModalOpen
        },
        {
            icon: Scroll,
            title: "스크랩",
            onClick: handleModalOpen
        }
    ]
    const communityMenu: IconListItemProps[] = [
        {
            icon: Pen,
            title: "내 글",
            onClick: handleModalOpen
        },
        {
            icon: MessageCircleReply,
            title: "내 댓글",
            onClick: handleModalOpen
        },
        {
            icon: Heart,
            title: "좋아요",
            onClick: handleModalOpen
        }
    ]
    const recordMenu: IconListItemProps[] = [
        {
            icon: File,
            title: "PDF 다운로드",
            onClick: handleModalOpen
        },
        {
            icon: LayoutDashboard,
            title: "대시보드",
            onClick: handleModalOpen
        },
        {
            icon: Pill,
            title: "처방",
            onClick: handleModalOpen
        }
    ]
    const extraMenu: IconListItemProps[] = [
        {
            icon: Speaker,
            title: "공지사항",
            onClick: handleModalOpen
        },
        {
            icon: MailQuestion,
            title: "문의 및 의견",
            onClick: handleModalOpen
        }
    ]
    const menus: AccordionDataItem[] = [
        {
            title: "정보",
            content: <IconList items={infoMenu} />,
        },
        {
            title: "커뮤니티",
            content: <IconList items={communityMenu} />,
        },
        {
            title: "기록",
            content: <IconList items={recordMenu} />,
        },
        {
            title: "커머스",
            content: <div className="text-secondary px-6 py-3">서비스 준비 중입니다.</div>,
        },
        {
            title: "기타",
            content: <IconList items={extraMenu} />
        }
    ]

    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-between p-5 px-6">
                <ProfileButton/>
                <SettingButton/>
            </div>
            <div className="flex-1 overflow-y-auto mb-[80px]">
                <Banner />
                <AccordionList items={menus} />
            </div>
            <BottomNavigation />

            {showModal && (
                <Modal onClose={handleModalClose}>
                <div className="text-center">
                    <p className="text-lg font-semibold mb-4">더 많은 기능을 기대해 주세요.</p>
                    <Button onClick={handleModalClose}>
                        <span>확인</span>
                    </Button>
                </div>
                </Modal>
            )}
        </div>
    );
}

export default Home;
