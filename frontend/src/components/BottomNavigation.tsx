import { Link, useLocation } from "react-router-dom";
import { CustomedNavBar } from "../styles/bottomNavigation";

import ContentIcon from "../assets/icons/ContentIcon.svg";
import MyIcon from "../assets/icons/MyIcon.svg";
import RecordIcon from "../assets/icons/RecordIcon.svg";
import ComunityIcon from "../assets/icons/ComunityIcon.svg";

import ContentActiveIcon from "../assets/icons/ContentActiveIcon.svg";
import ComunityActiveIcon from "../assets/icons/CommunityActiveIcon.svg";
import RecordActiveIcon from "../assets/icons/RecordActiveIcon.svg";
import MyActiveIcon from "../assets/icons/MyActiveIcon.svg";

function BottomNavigation() {
    const location = useLocation();

    const navItems = [
        {
            to: "/",
            label: "정보",
            icon: ContentIcon,
            activeIcon: ContentActiveIcon,
        },
        {
            to: "/community",
            label: "커뮤니티",
            icon: ComunityIcon,
            activeIcon: ComunityActiveIcon,
        },
        {
            to: "/record",
            label: "기록",
            icon: RecordIcon,
            activeIcon: RecordActiveIcon,
        },
        {
            to: "/mypage",
            label: "MY",
            icon: MyIcon,
            activeIcon: MyActiveIcon,
        },
    ];

    return (
        <CustomedNavBar>
            <nav
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                {navItems.map((item) => {
                    const isActive = location.pathname === item.to;
                    const iconSrc = isActive ? item.activeIcon : item.icon;
                    const textColor = isActive ? "black" : "gray";

                    return (
                        <Link
                            key={item.to}
                            to={item.to}
                            style={{
                                paddingTop: "8px",
                                textDecoration: "none",
                                fontSize: "12px",
                                color: textColor,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={iconSrc}
                                style={{ width: "23px", height: "23px" }}
                                alt={`${item.label} 아이콘`}
                            />
                            <p
                                className="font-semibold mt-1"
                                style={{ color: textColor }}
                            >
                                {item.label}
                            </p>
                        </Link>
                    );
                })}
            </nav>
        </CustomedNavBar>
    );
}

export default BottomNavigation;
