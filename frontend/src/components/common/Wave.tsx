export default function RotatingPills() {
  return (
    <div className="relative w-full h-40 overflow-hidden">
      {/* 큰 알약: 왼쪽 약간 이동 */}
      <div
        className="absolute top-1/2 left-1/4 w-[140px] h-[60px] bg-white rounded-full opacity-70 shadow-lg"
        style={{
          transformOrigin: "center",
          transform: "translate(calc(-50% - 20px), -50%)",
          animation: "rotateClockwise 20s linear infinite",
        }}
      />
      {/* 작은 알약: 오른쪽 약간 이동 */}
      <div
        className="absolute top-1/3 left-1/2 w-[90px] h-[40px] bg-sky-300 rounded-full shadow-md"
        style={{
          transformOrigin: "center",
          transform: "translate(calc(-50% + 20px), -50%)",
          animation: "rotateCounterClockwise 25s linear infinite",
        }}
      />

      <style>
        {`
          @keyframes rotateClockwise {
            from { transform: translate(calc(-50% - 20px), -50%) rotate(0deg); }
            to { transform: translate(calc(-50% - 20px), -50%) rotate(360deg); }
          }
          @keyframes rotateCounterClockwise {
            from { transform: translate(calc(-50% + 20px), -50%) rotate(0deg); }
            to { transform: translate(calc(-50% + 20px), -50%) rotate(-360deg); }
          }
        `}
      </style>
    </div>
  );
}
