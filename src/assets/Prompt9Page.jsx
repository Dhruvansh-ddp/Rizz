import React, { useState } from "react";
import "./Prompt1Page.css";

import { useNavigate } from "react-router-dom";

const Prompt9Page = () => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [showDareStatement, setShowDareStatement] = useState(false);
  const [showDareButton, setShowDareButton] = useState(false);
  const navigate = useNavigate();

  const handleYesClick = () => {
    setShowQuestion(false);
    setShowOptions(false);
    setShowDareStatement(false);
    setShowDareButton(true);
  };

  const handleNoClick = () => {
    setShowQuestion(false);
    setShowOptions(true);
    setShowDareStatement(false);
    setShowDareButton(false);
  };

  const handleRetryClick = () => {
    setShowQuestion(true);
    setShowOptions(false);
    setShowDareStatement(false);
    setShowDareButton(false);
  };

  const handleDareButtonClick = () => {
    setShowQuestion(false);
    setShowOptions(false);
    setShowDareStatement(true);
    setShowDareButton(false);
  };

  return (
    <div className="p-all">
      <div className="prompt1-container">
        {!showDareStatement ? (
          <>
            {showQuestion && (
              <div>
                <h2>Truth or Dare</h2>
                <p>Are you a magician?</p>
                <button onClick={handleYesClick}>Yes, why?</button>
                <button onClick={handleNoClick}>No, why?</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>Well, you definitely cast a spell on me.</p>
                {/* <button onClick={handleRetryClick}>Retry</button> */}
              </div>
            )}
            {showDareButton && (
              <div>
                <p>Because whenever I look at you, everyone else disappears.</p>
                <button onClick={handleDareButtonClick}>Dare</button>
              </div>
            )}
          </>
        ) : (
          <div>
            <h2>Truth or Dare</h2>
            <p>Marry Me</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt9Page;
