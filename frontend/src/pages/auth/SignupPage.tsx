import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextButton from "../../components/buttons/TextButton";
import BackButton from "../../components/buttons/BackButton";
import type { User } from "../../types/user";
import { signup } from "../../apis/userAuth";
import { useAuthStore } from "../../storages/useAuthStorage";

function SignupPage() {
  const navigate = useNavigate();
  const { setUser, disease, setDisease } = useAuthStore();
  const [username, setUsername] = useState("");

  const onSignup = async () => {
    const user: User = await signup(username);
    setUser(user);
    setDisease(null);
    navigate("/");
  };

  const onSelectDisease = () => {
    navigate("/signup/disease");
  }

  const onLoginClick = () => navigate("/login");

  return (
    <div className="flex flex-col justify-between h-screen px-6">
      <span className="fixed top-6 left-6">
        <BackButton />
      </span>

      <div className="mt-36 gap-6">
        <div className="text-text-large font-bold">회원가입</div>

        <input
          type="text"
          placeholder="사용자 이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full max-w-md p-3 mb-4 focus:outline-none border-b-2 border-gray-300 focus:border-main transition-colors"
        />

        <input
          type="text"
          placeholder="병명"
          value={disease?.disease_name_kr}
          readOnly
          onClick={onSelectDisease}
          className="w-full max-w-md p-3 mb-4 border-b-2 border-gray-300"
        />
      </div>

      <div className="mb-32">
        <TextButton
          text="회원가입"
          onClick={onSignup}
          disabled={username.trim() === ""}
        />

        <p className="mt-6 text-sm text-center text-primary">
          이미 계정이 있나요?{" "}
          <button
            onClick={onLoginClick}
            className="text-main font-semibold hover:text-hover"
            type="button"
          >
            로그인
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
