import { X } from "lucide-react"

type MedicineItemProps = {
    name: string
    schedule: string
}

const MedicineItem = ({ name, schedule }: MedicineItemProps) => {
    return (
        <div
            className="flex items-center justify-between p-4 mb-3 rounded-xl bg-white shadow-md"
        >
            <div className="flex gap-5 items-center">
                <span className="font-semibold text-base text-black">{name}</span>
                <span className="text-sm text-gray-500">{schedule}</span>
            </div>
            <X color="gray" />
        </div>
    )
}

export default MedicineItem
