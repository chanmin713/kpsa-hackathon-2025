import { useNavigate } from "react-router-dom";
import type { Disease } from "../../types/user";
import { useSignupStore } from "../../storages/useSignupStorage";

interface DiseaseItemProps {
  disease: Disease;
  disabled?: boolean;
}

export default function DiseaseItem({ disease, disabled = false }: DiseaseItemProps) {
  const { setDisease } = useSignupStore();
  const navigate = useNavigate();

  const onClick = () => {
    if (disabled) return;
    setDisease(disease);
    navigate(-1);
  };

  const krTextClass = disabled ? "text-primary" : "text-black";
  const enTextClass = disabled ? "text-secondary" : "text-primary";

  return (
    <div
      className={`border-b border-secondary ${disabled ? "cursor-default opacity-60" : "cursor-pointer"}`}
      onClick={onClick}
    >
      <div className="w-full flex flex-col items-center px-6 py-3 text-left gap-1">
        <div className={`text-base ${krTextClass}`}>{disease.disease_name_kr}</div>
        <div className={`text-text-small ${enTextClass}`}>{disease.disease_name_en}</div>
      </div>
    </div>
  );
}
