import { useNavigate } from "react-router-dom"
import BackIcon from '../../assets/Icons/BackIcon.svg'


const MedicineSearch = () => {

    const navigate = useNavigate()

    return (
        <>
            <img src={BackIcon} onClick={() => navigate(-1)} className="pt-6 px-6 mb-8 ml-[-5px]" />
            <h1 className="px-6 text-2xl font-bold mb-2">어떤 약을 추가할까요?</h1>
            <div className="flex px-6">약 검색</div>
        </>
    )
}

export default MedicineSearch