import { useMemo, useRef, useState } from "react";
import "../styles/EqualWheel.css";

/**
 * EqualWheel
 * - Renders an equal-probability spinning wheel with given segments
 * - Calls onWinner(segment, index) when spin completes
 */
const EqualWheel = ({ segments = [], onWinner }) => {
  const wheelRef = useRef(null);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const segmentAngle = segments.length > 0 ? 360 / segments.length : 0;

  const sectionsWithAngles = useMemo(() => {
    let currentAngle = 0;
    return segments.map((section) => {
      const startAngle = currentAngle;
      const endAngle = currentAngle + segmentAngle;
      currentAngle = endAngle;
      return { ...section, startAngle, endAngle, angle: segmentAngle };
    });
  }, [segments, segmentAngle]);

  const spinWheel = () => {
    if (spinning || segments.length === 0) return;
    setSpinning(true);

    const minSpins = 5;
    const maxSpins = 8;
    const spins = minSpins + Math.random() * (maxSpins - minSpins);
    const extraDegrees = Math.random() * 360;
    const totalRotation = rotation + spins * 360 + extraDegrees;
    setRotation(totalRotation);

    const normalizedAngle = (360 - (totalRotation % 360)) % 360;
    let winnerIndex = sectionsWithAngles.findIndex(
      (s) => normalizedAngle >= s.startAngle && normalizedAngle < s.endAngle
    );
    if (winnerIndex < 0) winnerIndex = 0;

    setTimeout(() => {
      setSpinning(false);
      if (onWinner) onWinner(segments[winnerIndex], winnerIndex);
    }, 5000);
  };

  return (
    <div className="equal-wheel-wrapper">
      <div className="equal-wheel-container">
        <svg
          ref={wheelRef}
          width="500"
          height="500"
          viewBox="0 0 500 500"
          className={`equal-wheel-svg ${spinning ? "spinning" : ""}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <defs>
            <linearGradient id="eqRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#FFA500", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#FF6347", stopOpacity: 1 }} />
            </linearGradient>
            <filter id="eqGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="eqCenterGradient">
              <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
              <stop offset="70%" style={{ stopColor: "#f5f5f5", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#e0e0e0", stopOpacity: 1 }} />
            </radialGradient>
          </defs>

          <circle cx="250" cy="250" r="235" fill="none" stroke="url(#eqRingGradient)" strokeWidth="8" filter="url(#eqGlow)" />
          <circle cx="250" cy="250" r="223" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.5" />

          {Array.from({ length: 32 }).map((_, i) => {
            const angle = (i * 11.25 * Math.PI) / 180;
            const x = 250 + 240 * Math.cos(angle);
            const y = 250 + 240 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="4" fill="#FFD700" filter="url(#eqGlow)" />;
          })}

          {sectionsWithAngles.map((section, index) => {
            const startRad = ((section.startAngle - 90) * Math.PI) / 180;
            const endRad = ((section.endAngle - 90) * Math.PI) / 180;
            const largeArc = section.angle > 180 ? 1 : 0;

            const x1 = 250 + 80 * Math.cos(startRad);
            const y1 = 250 + 80 * Math.sin(startRad);
            const x2 = 250 + 220 * Math.cos(startRad);
            const y2 = 250 + 220 * Math.sin(startRad);
            const x3 = 250 + 220 * Math.cos(endRad);
            const y3 = 250 + 220 * Math.sin(endRad);
            const x4 = 250 + 80 * Math.cos(endRad);
            const y4 = 250 + 80 * Math.sin(endRad);

            const path = `M ${x1} ${y1} L ${x2} ${y2} A 220 220 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A 80 80 0 ${largeArc} 0 ${x1} ${y1} Z`;

            const textAngle = (section.startAngle + section.endAngle) / 2 - 90;
            const textRad = (textAngle * Math.PI) / 180;
            const textX = 250 + 150 * Math.cos(textRad);
            const textY = 250 + 150 * Math.sin(textRad);

            const textLines = (section.text || "").split("\n");

            return (
              <g key={index}>
                <path
                  d={path}
                  fill={section.color || "#888"}
                  stroke="white"
                  strokeWidth="3"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
                />
                {textLines.map((line, lineIndex) => (
                  <text
                    key={lineIndex}
                    x={textX}
                    y={textY + (lineIndex - (textLines.length - 1) / 2) * 18}
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)", filter: "drop-shadow(0 0 3px rgba(0,0,0,0.9))" }}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}

          <circle cx="250" cy="250" r="78" fill="url(#eqCenterGradient)" stroke="url(#eqRingGradient)" strokeWidth="6" filter="url(#eqGlow)" />
          <text x="250" y="240" textAnchor="middle" fontSize="24" fontWeight="bold" fill="url(#eqRingGradient)">🎲</text>
          <text x="250" y="265" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">PICK PLAYER</text>
        </svg>

        <div className="equal-pointer-wrapper">
          <div className="equal-pointer">
            <div className="equal-pointer-inner" />
          </div>
        </div>
      </div>

      <button onClick={spinWheel} disabled={spinning || segments.length === 0} className="equal-spin-button">
        <span>{spinning ? "🎰 SPINNING..." : "🎯 SPIN"}</span>
      </button>
    </div>
  );
};

export default EqualWheel;