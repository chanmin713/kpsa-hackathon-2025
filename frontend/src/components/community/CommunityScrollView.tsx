function CommunityScrollView(props: {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}) {
    const { activeTab, setActiveTab } = props;
    const tabs = ['전체', '정보', '질문', '자유게시판'];

    return (
        <div className="w-full flex justify-center">
            <div className="inline-flex h-[35px] gap-[25px]">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`min-w-[80px] text-center leading-[35px] cursor-pointer border-b-[3px] ${
                            activeTab === tab
                                ? 'font-bold border-blue-300'
                                : 'font-normal border-transparent'
                        }`}
                    >
                        {tab}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommunityScrollView;
