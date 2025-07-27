import TextButton from "../../components/buttons/TextButton";
import { useNavigate } from "react-router-dom";
import RotatingPills from "../../components/common/Wave";
import { useSignupStore } from "../../storages/useSignupStorage";
import { useEffect } from "react";

function LandingPage() {
  const navigate = useNavigate();
  const onLoginClick = () => navigate("/login");
  const onSignupClick = () => navigate("/signup");

  const { setUsername, setDisease } = useSignupStore();
  useEffect(() => {
    setUsername(null);
    setDisease(null);
  }, []);

  return (
    <div className="flex flex-col justify-between items-center h-screen px-6 py-12 bg-main">
      {/* 알약 모양 회전 애니메이션 */}
      <RotatingPills />
      <div className="fixed top-1/3 right-6 flex flex-col items-end text-white">
      <div className="">희귀 질환 환자들을 위한 커뮤니티</div>
      <div className="text-3xl font-bold">레어프렌즈</div>
      </div>

      {/* 버튼 */}
      <div className="w-full space-y-4 mb-10">
        <TextButton text="로그인" onClick={onLoginClick} variant="secondary"/>
        <TextButton text="회원가입" onClick={onSignupClick} />
      </div>
    </div>
  );
}

export default LandingPage;
