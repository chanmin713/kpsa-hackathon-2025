import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../apis/axios"
import { useAuthStore } from "../../storages/useAuthStorage"

type MedicineRecord = {
    mr_id: number
    mr_time: string
    mr_hospital: string
    memo: string
    cycle: {
        cycle_string: string
        medicine: {
            name: string
        }
    }
}

const Medicine = ({ selectedDate }: { selectedDate: Date | null }) => {
    const navigate = useNavigate()
    const [medicineRecords, setMedicineRecords] = useState<MedicineRecord[]>([])
    const { user } = useAuthStore()

    const parseLocalDate = (dateString: string) => {
        const [year, month, day] = dateString.split('T')[0].split('-').map(Number);
        return new Date(year, month - 1, day);
    };

    useEffect(() => {
        const fetchMedicineRecords = async () => {
            try {
                const response = await api.get(`/mr?user_id=${user?.user_id}`)

                const sortedRecords = response.data.sort((a: MedicineRecord, b: MedicineRecord) => {
                    return new Date(b.mr_time).getTime() - new Date(a.mr_time).getTime();
                })

                setMedicineRecords(sortedRecords)
            } catch (error) {
                console.error("복약 기록 불러오기 실패:", error)
            }
        }

        if (user?.user_id) {
            fetchMedicineRecords()
        }
    }, [user?.user_id])

    const isSameDate = (date1: Date, date2: Date) =>
        date1.toISOString().split("T")[0] === date2.toISOString().split("T")[0];

    return (
        <div>
            <div className="px-2 mt-[65px] flex justify-end">
                <span className="bg-gray-400 px-2 py-1 rounded-md text-white" onClick={() => navigate(`/writemedicine`)}>글쓰기</span>
            </div>
            <div className="mt-2 max-h-[170px] overflow-y-auto bg-white">
                {medicineRecords
                    .filter(item => {
                        if (!selectedDate) return false;
                        const itemDate = parseLocalDate(item.mr_time);
                        return isSameDate(itemDate, selectedDate);
                    })
                    .map((item, idx) => {
                        const date = new Date(item.mr_time)
                        const formattedDate = date.toLocaleDateString()
                        const formattedTime = date.toLocaleTimeString()

                        return (
                            <div key={idx} className="flex justify-between items-start py-4 border-b border-gray-200">
                                <div className="flex-1">
                                    <div className="text-base font-bold leading-snug text-lg">
                                        {formattedDate} {formattedTime}
                                    </div>
                                    <div className="text-sm">
                                        처&nbsp;&nbsp;방&nbsp;약 | &nbsp;
                                        {item.cycle.medicine.name}
                                    </div>
                                    <div className="text-sm">
                                        병&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;원 |  &nbsp;
                                        {item.mr_hospital}
                                    </div>
                                    <div className="text-base text-sm">메&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;모 | &nbsp;
                                        {item.memo}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Medicine
