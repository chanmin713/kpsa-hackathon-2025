import { useState } from 'react'
import HospitalIcon from '../../assets/Icons/HospitalIcon.svg'
import FoodIcon from '../../assets/Icons/FoodIcon.svg'
import MedicineIcon from '../../assets/Icons/MedicineIcon.svg'
import HeartRateIcon from '../../assets/Icons/HeartRateIcon.svg'

function RecordTab(props: {
    activeTab: string
    setActiveTab: (tab: string) => void
}) {
    const { activeTab, setActiveTab } = props;

    const tabs = [
        { label: '병원 기록', icon: HospitalIcon },
        { label: '식단 기록', icon: FoodIcon },
        { label: '복약 기록', icon: MedicineIcon },
        { label: '증상 기록', icon: HeartRateIcon },
    ]

    return (
        <div className="flex h-10 gap-2 justify-between px-4 py-6">
            {tabs.map(tab => {
                const isActive = activeTab === tab.label
                return (
                    <div
                        key={tab.label}
                        onClick={() => setActiveTab(tab.label)}
                        className="flex flex-col items-center gap-1 px-2 cursor-pointer"
                    >
                        <img src={tab.icon} alt="icon" className="w-[42px] h-[42px]" />
                        <span
                            className={`text-sm ${isActive
                                ? 'border-b-4 pb-1 border-blue-300 font-bold text-black'
                                : 'border-b-4 border-transparent text-gray-500'
                                }`}
                        >
                            {tab.label}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default RecordTab
