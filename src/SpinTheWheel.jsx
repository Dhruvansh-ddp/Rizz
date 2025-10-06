import { useState, useRef } from "react";
import "./SpinTheWheel.css";

const SpinTheWheel = () => {
  const wheelRef = useRef(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");
  const [rotation, setRotation] = useState(0);
  const [sections, setSections] = useState([
    { text: "Chips", color: "#FF6384", weight: 1 },
    { text: "Ratlami Sev", color: "#36A2EB", weight: 1 },
    { text: "10₹ off", color: "#FFCE56", weight: 0.5 },
    { text: "Better luck\nnext time", color: "#4BC0C0", weight: 0.3 },
    { text: "Sing Bhujiya", color: "#9966FF", weight: 1 },
    { text: "5₹ off", color: "#C9CBCF", weight: 1 },
    { text: "Nachos", color: "#8AC34A", weight: 1.5 },
  ]);

  // Calculate angles for sections
  const totalWeight = sections.reduce((acc, s) => acc + s.weight, 0);
  let currentAngle = 0;
  const sectionsWithAngles = sections.map((section) => {
    const angle = (section.weight / totalWeight) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    return { ...section, startAngle, endAngle: currentAngle, angle };
  });

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setResult("");

    // Calculate spin rotation
    const minSpins = 5;
    const maxSpins = 10;
    const spins = minSpins + Math.random() * (maxSpins - minSpins);
    const extraDegrees = Math.random() * 360;
    const totalRotation = spins * 360 + extraDegrees;
    const finalRotation = rotation + totalRotation;

    // Set the new rotation
    setRotation(finalRotation);

    // Calculate winning section
    const normalizedAngle = (360 - (finalRotation % 360)) % 360;
    const winner =
      sectionsWithAngles.find(
        (s) => normalizedAngle >= s.startAngle && normalizedAngle < s.endAngle
      ) || sectionsWithAngles[0];

    // Show result after 5 seconds
    setTimeout(() => {
      setSpinning(false);
      setResult(winner.text.replace("\n", " "));
    }, 5000);
  };

  const handleSectionChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const addSection = () => {
    setSections([
      ...sections,
      {
        text: "New Section",
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
        weight: 1,
      },
    ]);
  };

  const removeSection = (index) => {
    if (sections.length <= 2) return;
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  return (
    <div className="spin-wheel-container">
      <h1 className="spin-wheel-title">🎡 Spin The Wheel 🎡</h1>

      <div className="wheel-wrapper">
        <div className="wheel-container">
          {/* Wheel */}
          <svg
            ref={wheelRef}
            width="500"
            height="500"
            viewBox="0 0 500 500"
            className={`wheel-svg ${spinning ? "spinning" : ""}`}
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {/* Outer decorative ring with gradient */}
            <defs>
              <linearGradient
                id="ringGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#FFD700", stopOpacity: 1 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#FFA500", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FF6347", stopOpacity: 1 }}
                />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle
              cx="250"
              cy="250"
              r="235"
              fill="none"
              stroke="url(#ringGradient)"
              strokeWidth="8"
              filter="url(#glow)"
            />

            {/* Inner decorative ring */}
            <circle
              cx="250"
              cy="250"
              r="223"
              fill="none"
              stroke="#FFD700"
              strokeWidth="2"
              opacity="0.5"
            />

            {/* Decorative dots with glow */}
            {[...Array(32)].map((_, i) => {
              const angle = (i * 11.25 * Math.PI) / 180;
              const x = 250 + 240 * Math.cos(angle);
              const y = 250 + 240 * Math.sin(angle);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#FFD700"
                  filter="url(#glow)"
                />
              );
            })}

            {/* Wheel sections */}
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

              const textAngle =
                (section.startAngle + section.endAngle) / 2 - 90;
              const textRad = (textAngle * Math.PI) / 180;
              const textX = 250 + 150 * Math.cos(textRad);
              const textY = 250 + 150 * Math.sin(textRad);

              // Split text by newline for multi-line support
              const textLines = section.text.split("\n");

              return (
                <g key={index}>
                  <path
                    d={path}
                    fill={section.color}
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
                      style={{
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                        filter: "drop-shadow(0 0 3px rgba(0,0,0,0.9))",
                      }}
                    >
                      {line}
                    </text>
                  ))}
                </g>
              );
            })}

            {/* Center circle with gradient */}
            <defs>
              <radialGradient id="centerGradient">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ffffff", stopOpacity: 1 }}
                />
                <stop
                  offset="70%"
                  style={{ stopColor: "#f5f5f5", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#e0e0e0", stopOpacity: 1 }}
                />
              </radialGradient>
            </defs>

            <circle
              cx="250"
              cy="250"
              r="78"
              fill="url(#centerGradient)"
              stroke="url(#ringGradient)"
              strokeWidth="6"
              filter="url(#glow)"
            />

            <text
              x="250"
              y="238"
              textAnchor="middle"
              fontSize="28"
              fontWeight="bold"
              fill="url(#ringGradient)"
            >
              🎁
            </text>
            <text
              x="250"
              y="262"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="#333"
            >
              SPIN TO
            </text>
            <text
              x="250"
              y="278"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="#333"
            >
              WIN
            </text>
          </svg>

          {/* Enhanced Pointer */}
          <div className="pointer-wrapper">
            <div className="pointer">
              <div className="pointer-inner" />
            </div>
          </div>
        </div>

        <button onClick={spinWheel} disabled={spinning} className="spin-button">
          <span>{spinning ? "🎰 SPINNING..." : "🎯 SPIN NOW!"}</span>
        </button>

        {result && (
          <div className="result-container">
            <div className="result-emoji">🎉</div>
            <h2 className="result-text">You won: {result}!</h2>
            <div className="result-emoji">🎊</div>
          </div>
        )}
      </div>

      {/* Customization */}
      <div className="customization-container">
        <h2 className="customization-title">⚙️ Customize Your Wheel</h2>

        <button onClick={addSection} className="add-button">
          ➕ Add Section
        </button>

        <div className="sections-container">
          {sections.map((section, index) => (
            <div key={index} className="section-item">
              <input
                type="text"
                id={`text-${index}`}
                name={`text-${index}`}
                value={section.text}
                onChange={(e) =>
                  handleSectionChange(index, "text", e.target.value)
                }
                placeholder="Section Text (use \n for new line)"
                className="text-input"
              />
              <input
                type="color"
                id={`color-${index}`}
                name={`color-${index}`}
                value={section.color}
                onChange={(e) =>
                  handleSectionChange(index, "color", e.target.value)
                }
                className="color-input"
              />
              <input
                type="number"
                id={`weight-${index}`}
                name={`weight-${index}`}
                value={section.weight}
                onChange={(e) =>
                  handleSectionChange(
                    index,
                    "weight",
                    parseFloat(e.target.value) || 1
                  )
                }
                min="0.1"
                step="0.1"
                placeholder="Weight"
                className="weight-input"
              />
              <button
                onClick={() => removeSection(index)}
                className="remove-button"
              >
                🗑️ Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpinTheWheel;
