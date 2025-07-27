function ScrollView(props: {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}) {
    const { activeTab, setActiveTab } = props;
    const tabs = ['뉴스', '질환 정보', '지원금', '임상시험', '병원/의료진'];

    return (
        <div className="flex h-[35px] gap-[5px]">
            {tabs.map((tab) => (
                <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 text-center leading-[35px] cursor-pointer ${
                        activeTab === tab
                            ? 'font-bold border-b-[3px] border-blue-300'
                            : 'font-normal border-b-[3px] border-transparent'
                    }`}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
}

export default ScrollView;
