import { useNavigate } from "react-router-dom"
import BackIcon from '../../assets/Icons/BackIcon.svg'


const WriteRecord = () => {

    const navigate = useNavigate()

    return (
        <>
            <img src={BackIcon} onClick={() => navigate(-1)} className="pt-6 px-6 mb-8 ml-[-5px]" />
            <h1 className="px-6 text-2xl font-bold mb-2">제목</h1>
            <div className="flex px-6 justify-between mb-6 text-gray-500"> 내용 </div>
            <div className="flex px-6">내용</div>
        </>
    )
}

export default WriteRecord