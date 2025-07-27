export interface FloatingButtonProps {
    children: React.ReactElement;
    onClick: () => void;
    disabled?: boolean;
}

export default function FloatingButton({ children, onClick, disabled }: FloatingButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                fixed bottom-[100px] right-6
                w-16 h-16
                bg-blue-500 text-white
                rounded-full shadow-lg
                flex items-center justify-center
                hover:bg-blue-600
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-200
            `}
        >
            {children}
        </button>
    );
}
