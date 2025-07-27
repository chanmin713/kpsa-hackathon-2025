type MedicineItemProps = {
    name: string
    explaination: string

}

const MedicineItem2 = ({ name, explaination }: MedicineItemProps) => {
    return (
        <div
            className="flex items-center justify-between p-4 mb-3 rounded-xl bg-white shadow-md"
        >
            <div className="flex flex-col">
                <span className="font-semibold text-base text-black">{name}</span>
                <span className="text-sm text-gray-500">{explaination}</span>
            </div>
        </div>
    )
}

export default MedicineItem2
