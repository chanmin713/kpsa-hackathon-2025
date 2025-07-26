import { Settings } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import IconButton from "../../buttons/IconButton";

export default function SettingButton() {
  // const navigate = useNavigate();
  const onSettingsClick = () => {
    alert("settiings");
  }

  return (
    <IconButton icon={Settings} onClick={onSettingsClick}/>
  );
}
