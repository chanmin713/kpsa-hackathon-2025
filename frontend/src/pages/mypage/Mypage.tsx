import { File, Heart, LayoutDashboard, MailQuestion, MessageCircleReply, Pen, Pill, Scroll, Speaker } from "lucide-react";
import BottomNavigation from "../../components/BottomNavigation";
import AccordionList from "../../components/mypage/accordion/AccordionList";
import Banner from "../../components/mypage/banner/Banner";
import ProfileButton from "../../components/mypage/buttons/ProfileButton";
import SettingButton from "../../components/mypage/buttons/SettingButton";
// import { useNavigate } from "react-router-dom";
import type { IconListItemProps } from "../../components/mypage/accordion/IconListItem";
import IconList from "../../components/mypage/accordion/IconList";

interface AccordionDataItem {
  title: string;
  content: React.ReactNode;
}

function Home() {
    // const navigate = useNavigate();

    const infoMenu: IconListItemProps[] = [
        {
            icon: MessageCircleReply,
            title: "내 댓글",
            onClick: () => alert("내 댓글")
        },
        {
            icon: Heart,
            title: "좋아요",
            onClick: () => alert("좋아요")
        },
        {
            icon: Scroll,
            title: "스크랩",
            onClick: () => alert("스크랩")
        }
    ]

    const communityMenu: IconListItemProps[] = [
        {
            icon: Pen,
            title: "내 글",
            onClick: () => alert("내 글")
        },
        {
            icon: MessageCircleReply,
            title: "내 댓글",
            onClick: () => alert("내 댓글")
        },
        {
            icon: Heart,
            title: "좋아요",
            onClick: () => alert("좋아요")
        }
    ]

    const recordMenu: IconListItemProps[] = [
        {
            icon: File,
            title: "PDF 다운로드",
            onClick: () => alert("PDF 다운로드")
        },
        {
            icon: LayoutDashboard,
            title: "대시보드",
            onClick: () => alert("대시보드")
        },
        {
            icon: Pill,
            title: "처방",
            onClick: () => alert("처방")
        }
    ]

    const extraMenu: IconListItemProps[] = [
        {
            icon: Speaker,
            title: "공지사항",
            onClick: () => alert("공지사항")
        },
        {
            icon: MailQuestion,
            title: "문의 및 의견",
            onClick: () => alert("문의 및 의견")
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
                <Banner days={5} coins={1800} />
                <AccordionList items={menus} />
            </div>
            <BottomNavigation />
        </div>
    );
}

export default Home;
