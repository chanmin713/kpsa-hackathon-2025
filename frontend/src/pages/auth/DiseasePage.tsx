import BackButton from "../../components/buttons/BackButton";
import { useAuthStore } from "../../storages/useAuthStorage";

function DiseasePage() {
    const { setDiseaseId, removeDiseaseId } = useAuthStore();

    return (
        <>
            <BackButton />
            <p>질병 선택 페이지</p>
        </>
    )
}

export default DiseasePage