import { Settings } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import IconButton from "../../buttons/IconButton";
import { useState } from "react";
import Modal from "../../common/Modal";
import Button from "../../buttons/Button";

export default function SettingButton() {
  const [showModal, setShowModal] = useState(false);

  const onSettingsClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <IconButton icon={Settings} onClick={onSettingsClick}/>
        {showModal && (
          <Modal onClose={handleModalClose}>
            <div className="text-center">
              <p className="text-lg font-semibold mb-4">더 많은 기능을 기대해 주세요.</p>
              <Button onClick={handleModalClose}>
                  <span>확인</span>
              </Button>
            </div>
          </Modal>
        )}
    </>
  );
}
