import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import BackIcon from '../../assets/Icons/BackIcon.svg'
import PictureIcon from '../../assets/Icons/PictureIcon.svg'
import { LoadingOverlay, LoadingSpinner } from '../../styles/loading.styles'
import FoodItem from "../../components/record/FoodItem"
import TextButton from "../../components/buttons/TextButton"

const WriteFood = () => {
    const navigate = useNavigate()
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isLoading, setIsLoading] = useState(false)

    const [food, setFood] = useState([
        { name: "백미밥", kcal: "300kcal" },
        { name: "계란말이", kcal: "120kcal" },
        { name: "오이무침", kcal: "90kcal" },
        { name: "연근조림", kcal: "100kcal" },
        { name: "연근조림", kcal: "100kcal" },
        { name: "연근조림", kcal: "100kcal" },
    ])

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0]
    //     if (file) {
    //         console.log("선택된 파일:", file)

    //         setIsLoading(true)

    //         setTimeout(() => {
    //             setIsLoading(false)
    //         }, 3000)
    //     }
    // }


    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    console.log("선택된 파일:", file)
    setIsLoading(true)

    try {
        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch('http://localhost:3000/uploader', {
            method: 'POST',
            body: formData,
        })

        if (!response.ok) throw new Error("서버 응답 실패")

        const rawResult = await response.json()

        const result = typeof rawResult === "string"
        ? JSON.parse(rawResult)
        : rawResult

        console.log("서버 응답 파싱 후:", result)

        if (!Array.isArray(result)) throw new Error("결과가 배열이 아님")

        const mapped = result.map((item: any) => ({
        name: item.ClassName,
        kcal: "100kcal"
        }))

        setFood(mapped)

    } catch (error) {
        console.error("업로드 실패:", error)
        alert("이미지 분석 중 오류가 발생했습니다." + error)
    } finally {
        setIsLoading(false)
    }
}


    return (
        <>
            <img src={BackIcon} onClick={() => navigate(-1)} className="pt-6 px-6 mb-8 ml-[-5px]" />
            <h1 className="px-6 text-2xl font-bold mb-2">무엇을 먹었나요?</h1>
            <div onClick={handleUploadClick}
                className="flex flex-col w-full h-[250px] bg-gray-400 justify-center items-center">
                <img src={PictureIcon} className="w-[42px]" />
                <p className="text-white font-medium mt-2">음식 사진 업로드</p>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />


            </div>
            <div className="px-6 mt-5 flex flex-col gap-2 overflow-y-auto max-h-[420px]">
                {food.map((med, idx) => (
                    <FoodItem
                        key={idx}
                        name={med.name}
                        kcal={med.kcal}
                    />
                ))}
            </div>
            {isLoading && (
                <LoadingOverlay>
                    <LoadingSpinner />
                </LoadingOverlay>
            )}

            <div className="fixed bottom-0 left-0 w-full px-6 pb-6 bg-white">
                <TextButton
                    text="저장"
                    variant="primary"
                    onClick={() => {
                        // 저장 로직 작성
                    }}
                />
            </div>
        </>
    )
}

export default WriteFood