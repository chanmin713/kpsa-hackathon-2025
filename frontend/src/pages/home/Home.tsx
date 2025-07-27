import { useState, useEffect } from "react";
import BottomNavigation from "../../components/BottomNavigation";
import ScrollView from "../../components/home/ScrollView";
import AlertIcon from "../../assets/Icons/AlertIcon.svg";

import News from "../../components/home/News";
import DiseaseInformation from "../../components/home/DiseaseInformation";
import Benefit from "../../components/home/Benefit";
import ClinicalTrial from "../../components/home/ClinicalTrial";
import HospitalDoctors from "../../components/home/HospitalDoctors";

import Logo from '../../assets/Images/logo.svg'
import SearchIcon from '../../assets/Icons/SearchIcon.svg'

import FloatingButton from '../../components/buttons/FloatingButton';
import DoctorIcon from '../../assets/Icons/DoctorIcon.svg'
import ChatModal from "./ChatModal";

function Home() {
    const [activeTab, setActiveTab] = useState("뉴스");

    useEffect(() => {
        const savedTab = localStorage.getItem("activeTab");
        if (savedTab) {
            setActiveTab(savedTab);
        }
    }, []);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        localStorage.setItem("activeTab", tab);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
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

            <div className="mr-2">
                <ScrollView activeTab={activeTab} setActiveTab={handleTabChange} />
            </div>
            <div className="mt-4 px-6">
                {activeTab === "뉴스" && <News />}
                {activeTab === "질환 정보" && <DiseaseInformation />}
                {activeTab === "지원금" && <Benefit />}
                {activeTab === "임상시험" && <ClinicalTrial />}
                {activeTab === "병원/의료진" && <HospitalDoctors />}
            </div>

            <FloatingButton onClick={() => setIsModalOpen(true)}>
                <img src={DoctorIcon} />
            </FloatingButton>

            {isModalOpen && <ChatModal onClose={() => setIsModalOpen(false)} />}

            <BottomNavigation />
        </>
    );
}

export default Home;
