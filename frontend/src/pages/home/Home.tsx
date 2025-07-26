import { useState, useEffect } from "react";
import BottomNavigation from "../../components/BottomNavigation";
import ScrollView from "../../components/home/ScrollView";
import AlertIcon from "../../assets/Icons/AlertIcon.svg";

import News from "../../components/home/News";
import DiseaseInformation from "../../components/home/DiseaseInformation";
import Benefit from "../../components/home/Benefit";
import ClinicalTrial from "../../components/home/ClinicalTrial";
import HospitalDoctors from "../../components/home/HospitalDoctors";

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

    return (
        <>
            <div className="flex justify-end p-5 px-6">
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

            <BottomNavigation />
        </>
    );
}

export default Home;
