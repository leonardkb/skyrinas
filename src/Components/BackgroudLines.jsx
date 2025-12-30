export default function BackgroundLines() {
  const gap = 22; // 👈 controls spacing

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
    >
      <g
        stroke="rgba(43, 46, 44, 0.12)"
        strokeWidth="2.5"
        fill="none"
      >
        {Array.from({ length: 28 }).map((_, i) => (
          <path
            key={i}
            d={`
              M 1400 ${80 + i * gap}
              C 900 ${60 + i * gap},
                400 ${200 + i * gap * 0.6},
                -300 ${350 + i * gap * 0.4}
            `}
          />
        ))}
      </g>
    </svg>
  );
}
