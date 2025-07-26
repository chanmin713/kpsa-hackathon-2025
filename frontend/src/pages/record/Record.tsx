import { useState, useEffect } from "react";
import BottomNavigation from "../../components/BottomNavigation"
import RecordTab from "../../components/record/RecordTab"

import Hospital from '../../components/record/Hospital'
import Food from '../../components/record/Food'
import Inform from '../../components/record/Inform'
import Medicine from '../../components/record/Medicine'

function Record() {
    const [activeTab, setActiveTab] = useState("병원 기록");

    return (
        <>
            <div className="mr-2">
                <RecordTab activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
            <div className="mt-4 px-6">
                {activeTab === "병원 기록" && <Hospital />}
                {activeTab === "식단 기록" && <Food />}
                {activeTab === "복약 기록" && <Medicine />}
                {activeTab === "증상 기록" && <Inform />}
            </div>
            <BottomNavigation />
        </>
    )
}

export default Record