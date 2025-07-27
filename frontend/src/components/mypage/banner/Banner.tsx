import { useState } from "react";
import Button from "../../buttons/Button";
import Modal from "../../common/Modal";
import { useAuthStore } from "../../../storages/useAuthStorage";

export default function Banner() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { user } = useAuthStore();

  const handleClick = () => {
    if (!checkedIn) {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCheckedIn(true);
  };

  return (
<div className="w-full px-4 box-border mb-5">
  <div className="relative flex justify-between items-center bg-main text-white p-4 rounded-xl min-h-[100px] shadow-md">
        {/* 출석 정보 (왼쪽 상단/하단) */}
        <div className="flex flex-col justify-between h-full">
          <div className="text-text-large font-bold">
            연속 출석 {5}일째 🔥
          </div>
          <div className="text-text-small mt-2 text-white/80">
            현재 코인 수: {user?.user_coin ?? 0}개
          </div>
        </div>

        {/* 출석 버튼 (오른쪽) */}
        <div>
          <Button
            disabled={checkedIn}
            onClick={handleClick}
          >
            <span className="bg-white text-main px-4 py-2 rounded-md"
                style={{
                    background: checkedIn ? "bg-white/100" : "bg-white"
                }}
            >
                {checkedIn ? "출석 완료" : "출석하기"}
            </span>
          </Button>
        </div>
      </div>

      {showModal && (
        <Modal onClose={handleModalClose}>
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">출석 완료!</p>
            <Button onClick={handleModalClose}>
                <span>확인</span>
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
