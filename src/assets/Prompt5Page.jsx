import React, { useState } from "react";
import "./Prompt1Page.css";

import { useNavigate } from "react-router-dom";

const Prompt5Page = () => {
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
            {/* <h2>Truth or Dare</h2> */}
            {showQuestion && (
              <div>
                <img
                  className="h-[200px]"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BnOGYzaXBlYTA3a2JrZjN4dTJpMXg4bmkwMWpzaXBucDcydDF2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NMBqdKUKQ3aLe/giphy.gif"
                  alt="photographer"
                />
                <p>Is your dade a photographer?</p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <img
                  className="h-[200px]"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3FxNHpneG15eDFtMjVicHM0aDVsN2w2dWt2b2Z0aXZxM3J6azFvaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q5Q3ni8x1D58yFETZd/giphy-downsized-large.gif"
                  alt="Tom"
                />
                <p>Then I should capture these most beautiful pictures</p>
                {/* <button onClick={handleRetryClick}>Retry</button> */}
              </div>
            )}
            {showDareButton && (
              <div>
                <button onClick={handleDareButtonClick}>Why?</button>
              </div>
            )}
          </>
        ) : (
          <div>
            {/* <h2>Truth or Dare</h2> */}
            <p>Because you are picture perfect</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt5Page;
