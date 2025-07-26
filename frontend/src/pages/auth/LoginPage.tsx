import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextButton from "../../components/buttons/TextButton";
import BackButton from "../../components/buttons/BackButton";
import { login } from "../../apis/userAuth";
import type { User } from "../../types/user";
import { useAuthStore } from "../../storages/useAuthStorage";

function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [username, setUsername] = useState("");

  const onLogin = async () => {
    const user: User = await login(username);
    setUser(user);
    navigate("/");
  };

  const onSignupClick = () => navigate("/signup");

  return (
    <div className="flex flex-col justify-between h-screen px-6">
      <span className="fixed top-6 left-6">
        <BackButton />
      </span>
      <div className="mt-36 gap-6">
        <div className="text-text-large text-bold">로그인</div>
        <input
          type="text"
          placeholder="ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full max-w-md p-3 mb-4 focus:outline-none border-b-2 border-gray-300 focus:border-main"
        />
      </div>
      
      <div className="mb-32">
        <TextButton text="로그인" onClick={onLogin} disabled={username.trim() === ""} />

        <p className="mt-6 text-sm text-center text-primary">
          계정이 없나요?{" "}
          <button
            onClick={onSignupClick}
            className="text-main font-semibold hover:text-hover"
            type="button"
          >
            회원가입
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
