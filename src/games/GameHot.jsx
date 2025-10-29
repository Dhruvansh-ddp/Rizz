import { useEffect, useMemo, useState } from "react";
import EqualWheel from "./components/EqualWheel";
import "./styles/GameHot.css";

import { truths as friendlyTruths, dares as friendlyDares } from "./data/friendly";
import { truths as hotTruths, dares as hotDares } from "./data/hot";
import { truths as extremeTruths, dares as extremeDares } from "./data/extreme";
import { truths as kinkTruths, dares as kinkDares } from "./data/kink";

const palettes = [
  ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#C9CBCF", "#8AC34A"],
  ["#F94144", "#F3722C", "#F8961E", "#F9844A", "#F9C74F", "#90BE6D", "#43AA8B", "#577590"],
];

const categories = {
  friendly: { truths: friendlyTruths, dares: friendlyDares, mature: false },
  hot: { truths: hotTruths, dares: hotDares, mature: true },
  extreme: { truths: extremeTruths, dares: extremeDares, mature: true },
  kink: { truths: kinkTruths, dares: kinkDares, mature: true },
};

const GameHot = () => {
  const [mode, setMode] = useState("couples"); // couples | friends
  const [category, setCategory] = useState("friendly");
  const [players, setPlayers] = useState(["Partner A", "Partner B"]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [resultType, setResultType] = useState(""); // Truth | Dare
  const [resultText, setResultText] = useState("");

  useEffect(() => {
    if (mode === "couples") {
      setPlayers(["Partner A", "Partner B"]);
    } else {
      setPlayers(["Player 1", "Player 2", "Player 3"]);
    }
    setSelectedPlayer(null);
    setResultType("");
    setResultText("");
  }, [mode]);

  const currentCategory = categories[category];

  const segments = useMemo(() => {
    const palette = palettes[0];
    return players.map((name, i) => ({ text: name, color: palette[i % palette.length] }));
  }, [players]);

  const onWheelWinner = (segment) => {
    setSelectedPlayer(segment?.text || null);
    setResultType("");
    setResultText("");
  };

  const pickPrompt = (type) => {
    const items = type === "Truth" ? currentCategory.truths : currentCategory.dares;
    if (!items || items.length === 0) return;
    const item = items[Math.floor(Math.random() * items.length)];
    setResultType(type);
    setResultText(item);
  };

  const randomTruthOrDare = () => {
    const type = Math.random() < 0.5 ? "Truth" : "Dare";
    pickPrompt(type);
  };

  const resetGame = () => {
    setSelectedPlayer(null);
    setResultType("");
    setResultText("");
  };

  const updatePlayer = (index, value) => {
    setPlayers((prev) => prev.map((p, i) => (i === index ? value : p)));
  };

  const addFriend = () => setPlayers((prev) => [...prev, `Player ${prev.length + 1}`]);
  const removeFriend = (index) => setPlayers((prev) => prev.filter((_, i) => i !== index));

  return (
    <div className="gamehot-container">
      <h1 className="gamehot-title">🔥 Kinky Truth & Dares</h1>

      <div className="gamehot-controls">
        <div className="control-group">
          <label className="control-label">Mode</label>
          <div className="pill-row">
            <button className={`pill ${mode === "couples" ? "active" : ""}`} onClick={() => setMode("couples")}>
              Couples
            </button>
            <button className={`pill ${mode === "friends" ? "active" : ""}`} onClick={() => setMode("friends")}>
              Friends
            </button>
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">Category</label>
          <div className="pill-row">
            {Object.keys(categories).map((key) => (
              <button key={key} className={`pill ${category === key ? "active" : ""}`} onClick={() => setCategory(key)}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          {currentCategory.mature && (
            <div className="content-warning">
              18+ content warning: Play respectfully, consensually, and honor boundaries.
            </div>
          )}
        </div>
      </div>

      <div className="gamehot-main">
        <div className="players-card">
          <h2 className="section-title">Players</h2>
          {mode === "couples" ? (
            <div className="players-grid">
              {players.slice(0, 2).map((p, i) => (
                <input key={i} className="name-input" value={p} onChange={(e) => updatePlayer(i, e.target.value)} placeholder={`Partner ${i + 1}`} />
              ))}
            </div>
          ) : (
            <div className="players-list">
              {players.map((p, i) => (
                <div key={i} className="players-row">
                  <input className="name-input" value={p} onChange={(e) => updatePlayer(i, e.target.value)} placeholder={`Player ${i + 1}`} />
                  <button className="icon-btn" onClick={() => removeFriend(i)} aria-label="Remove">🗑️</button>
                </div>
              ))}
              <button className="add-btn" onClick={addFriend}>➕ Add Player</button>
            </div>
          )}
        </div>

        <div className="wheel-card">
          <h2 className="section-title">Wheel</h2>
          <EqualWheel segments={segments} onWinner={onWheelWinner} />
        </div>

        <div className="result-card">
          <h2 className="section-title">Result</h2>
          {selectedPlayer ? (
            <div className="result-block">
              <div className="winner-line">Selected player: <span className="winner-name">{selectedPlayer}</span></div>
              <div className="action-row">
                <button className="action-btn truth" onClick={() => pickPrompt("Truth")}>Truth</button>
                <button className="action-btn dare" onClick={() => pickPrompt("Dare")}>Dare</button>
                <button className="action-btn random" onClick={randomTruthOrDare}>Can't decide? Random Truth/Dare</button>
                <button className="action-btn reset" onClick={resetGame}>Reset</button>
              </div>
              {resultText && (
                <div className="prompt-box">
                  <div className="prompt-type">{resultType}</div>
                  <div className="prompt-text">{resultText}</div>
                </div>
              )}
            </div>
          ) : (
            <div className="result-placeholder">Spin the wheel to pick a player.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameHot;