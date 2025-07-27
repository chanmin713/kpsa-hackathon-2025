import { useState, useEffect } from "react";
import BottomNavigation from "../../components/BottomNavigation"
import RecordTab from "../../components/record/RecordTab"

import Hospital from '../../components/record/Hospital'
import Food from '../../components/record/Food'
import Inform from '../../components/record/Inform'
import Medicine from '../../components/record/Medicine'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { CalendarWrapper } from '../../styles/calendar.styles';

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

function Record() {
    const [activeTab, setActiveTab] = useState("병원 기록");
    const [selectedDate, setSelectedDate] = useState<Value>(new Date())

    const getSelectedDateAsDate = (): Date | null => {
        if (selectedDate instanceof Date) {
            return selectedDate;
        }
        if (Array.isArray(selectedDate) && selectedDate[0] instanceof Date) {
            return selectedDate[0];
        }
        return null;
    };

    const dateToPass = getSelectedDateAsDate();

    return (
        <>
            <div className="py-1 ml-3">
                <CalendarWrapper>
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        className="border-none"
                        formatDay={(locale, date) => date.getDate().toString()}
                    />
                </CalendarWrapper>
            </div>

            <div className="mr-2">
                <RecordTab activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="mt-4 px-6">
                {activeTab === "병원 기록" && <Hospital selectedDate={dateToPass} />}
                {activeTab === "식단 기록" && <Food selectedDate={dateToPass} />}
                {activeTab === "복약 기록" && <Medicine selectedDate={dateToPass} />}
                {activeTab === "증상 기록" && <Inform selectedDate={dateToPass} />}
            </div>
            <BottomNavigation />
        </>
    )
}

export default Record