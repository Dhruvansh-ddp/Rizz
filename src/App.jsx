// import React from 'react';
import Routes from "./Rts";
import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const App = () => {
  return (
    <div className="main-container">
      <Routes />
      {/* Quick access link to the new game page */}
      {/*   <div style={{ textAlign: "center", marginTop: "12px" }}>
        <a href="/game-hot" style={{ color: "#ff6b6b", textDecoration: "none", fontWeight: "bold" }}>
          ▶ Play Kinky Truth & Dares
        </a>
      </div>*/}
    </div>
  );
};

export default App;
