import { useState } from "react"

function ScrollView(props: {
    activeTab: string
    setActiveTab: (tab: string) => void
}) {
    const { activeTab, setActiveTab } = props
    const tabs = ['뉴스', '질환 정보', '지원금', '임상시험', '병원/의료진  ']

    return (
        <div style={{ display: 'flex', height: '35px', gap: '5px' }}>
            {tabs.map(tab => (
                <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        lineHeight: '35px',
                        fontWeight: activeTab === tab ? '700' : '400',
                        borderBottom: activeTab === tab ? '3px solid #ccc' : '3px solid transparent',
                    }}
                >
                    {tab}
                </div>
            ))}
        </div>
    )
}

export default ScrollView
