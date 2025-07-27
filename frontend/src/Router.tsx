import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import MyPage from "./pages/mypage/Mypage"
import Community from "./pages/community/Community"
import Record from "./pages/record/Record"
import LoginPage from "./pages/auth/LoginPage"
import SignupPage from "./pages/auth/SignupPage"
import LandingPage from "./pages/auth/LandingPage"
import DiseasePage from "./pages/auth/DiseasePage"
import PostPage from "./pages/community/PostPage"
import ClinicalTrial from "./components/home/ClinicalTrial"
import WriteMedicine from "./pages/record/WriteMedicine"
import WriteFood from "./pages/record/WriteFood"
import WriteSymptom from "./pages/record/WriteSymptom"
import WriteHospital from "./pages/record/WriteHospital"

import NewsDetail from "./pages/home/NewsDetail"
import DiseaseInformationDetail from "./pages/home/DiseaseInformationDetail"
import BenefitDetail from "./pages/home/BenefitDetail"
import HospitalDoctorsDetail from "./pages/home/HospitalDoctorsDetail"
import MedicineSearch from "./pages/record/MedicineSearch"
import NewPostPage from "./pages/community/NewPostPage"
import MedicineCycle from "./pages/record/MedicineCycle"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/post/:id" element={<PostPage />} />
        <Route path="/community/post/new" element={<NewPostPage />} />
        <Route path="/record" element={<Record />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/disease" element={<DiseasePage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/info/:id" element={<DiseaseInformationDetail />} />
        <Route path="/benefits/:id" element={<BenefitDetail />} />
        <Route path="/doctors/:id" element={<HospitalDoctorsDetail />} />
        <Route path="/clinical" element={<ClinicalTrial />} />
        <Route path="/writefood" element={<WriteFood />} />
        <Route path="/writehospital" element={<WriteHospital />} />
        <Route path="/writemedicine" element={<WriteMedicine />} />
        <Route path="/writesymptom" element={<WriteSymptom />} />
        <Route path="/medicinesearch" element={<MedicineSearch />} />
        <Route path="/medicinecycle" element={<MedicineCycle />} />
      </Routes>
    </BrowserRouter>
  )
}
