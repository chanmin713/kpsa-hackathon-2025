import { useEffect, useState } from "react";
import type { Disease } from "../../types/user";
import DiseaseItem from "./DiseaseItem";
import { fetchDiseases } from "../../apis/diseaseInformation";

export default function DiseaseList() {
  const [diseases, setDiseases] = useState<Disease[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const list = await fetchDiseases();
      setDiseases(list);
    };
    fetch();
  }, []);

  return (
    <div className="w-full divide-y">
      {diseases.map((item, idx) => (
        <DiseaseItem
          key={idx}
          disease={item}
          disabled={idx !== 0}
        />
      ))}
    </div>
  );
}
