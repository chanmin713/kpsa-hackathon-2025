import DiseaseList from "../../components/auth/DiseaseList";
import BackButton from "../../components/buttons/BackButton";

function DiseasePage() {
  return (
    <>
      <span className="fixed top-6 left-6">
        <BackButton />
      </span>
      <div className="mt-20">
        <div className="text-text-large text-bold mx-6 mb-4">
          진단 받았거나<br/>
          의심가는 질환을 알려주세요
        </div>
        <DiseaseList />
      </div>
      
    </>
  )
}

export default DiseasePage