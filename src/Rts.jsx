// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// // import Home from "./Home";
// import About from "./About";
// import Project from "./Project";
// import Blog from "./Blog";
// import Contact from "./Contact";
import PromptsPage from "./PromptsPage";
import PromptPage from "./PromptPage";
import SpinTheWheel from "./SpinTheWheel";
import GameHot from "./games/GameHot";
import Home from "./Home";

const Rts = () => {
  return (
    <Router className="router">
      {/* <Sidebar className="sidebar" /> */}

      <div className="sub-container">
        {/* <Navbar className="navbar" /> */}

        <Routes className="routes">
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/pick-up-lines" element={<PromptsPage />} />
          <Route path="/:promptId" element={<PromptPage />} />
          <Route path="/spin-the-wheel" element={<SpinTheWheel />} />
          <Route path="/truth-or-dare" element={<GameHot />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Rts;
