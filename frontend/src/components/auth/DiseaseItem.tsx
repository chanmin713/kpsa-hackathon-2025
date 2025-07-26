import type { Disease } from "../../types/user";

interface DiseaseItemProps {
    disease: Disease;
}

export default function DiseaseItem({disease}: DiseaseItemProps) {
    return (
        <div className="w-full ">
            {disease.disease_name_kr}
        </div>
    )
}