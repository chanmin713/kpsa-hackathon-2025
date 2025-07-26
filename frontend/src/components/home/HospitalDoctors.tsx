import { useNavigate } from "react-router-dom";
import { doctorsData } from "../../data/doctors";
import SortDropdown from "./SortDropdown";


const HospitalDoctors = () => {
    const navigate = useNavigate();

    return (
        <div className="max-h-[710px] bg-white py-1.5 flex flex-col">
            <div className="flex justify-between items-center mb-3 flex-shrink-0">
                <p>
                    총 <span className="font-bold">{doctorsData.length}</span>건
                </p>
                <SortDropdown />
            </div>

            <div className="overflow-y-auto flex-grow">
                {doctorsData.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start py-3 border-b border-gray-200"
                        onClick={() => navigate(`/doctors/${idx}`)}>
                        <div className="flex-1">
                            <div className="text-base font-bold leading-snug">{item.title}</div>
                            <div className="text-base mt-1">
                                {item.content.length > 48
                                    ? item.content.slice(0, 48) + "..."
                                    : item.content}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                {item.hospital}
                            </div>
                        </div>
                        <img src={item.profile} className="w-[80px] h-[80px] rounded-lg object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HospitalDoctors;
