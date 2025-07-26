import { X } from "lucide-react"

type MedicineItemProps = {
    name: string
    kcal: string
}

const FoodItem = ({ name, kcal }: MedicineItemProps) => {
    return (
        <div
            className="flex items-center justify-between p-4 mb-3 rounded-xl bg-white shadow-md"
        >
            <div className="flex flex-col">
                <span className="font-semibold text-base text-black">{name}</span>
                <span className="text-sm text-gray-500">{kcal}</span>
            </div>
            <X color="gray" />
        </div>
    )
}

export default FoodItem
