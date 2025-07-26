interface TextButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export default function TextButton({
  text,
  onClick,
  disabled,
  variant = "primary",
}: TextButtonProps) {
  const baseClasses = "w-full flex items-center justify-center font-bold transition-colors py-2";

  const variants = {
    primary: "bg-main text-white hover:bg-hover",
    secondary: "bg-white text-main hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? "bg-secondary text-primary" : variants[variant]} h-[55px] rounded-md`}
      type="button"
    >
      {text}
    </button>
  );
}
