import React, { type JSX } from "react";

export interface PostButtonProps {
  icon: JSX.Element;
  count?: number;
  onClick: (e: React.MouseEvent) => void;   // ⬅️ 이벤트 전달
  selectedColor: string;
  isSelected?: boolean;
}

export default function PostButton({
  icon,
  count = 0,
  onClick,
  selectedColor,
  isSelected,
}: PostButtonProps) {
  const color = isSelected ? selectedColor : "#75757A";

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-text-small"
      style={{ color }}
      type="button"
    >
      <span className="w-5 h-5">{icon}</span>
      {count > 0 && <span>{count}</span>}
    </button>
  );
}
