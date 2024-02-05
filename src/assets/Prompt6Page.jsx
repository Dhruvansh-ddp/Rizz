import React, { useState } from "react";
import "./Prompt1Page.css";

import { useNavigate } from "react-router-dom";

const Prompt6Page = () => {
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
                <p>Are you a camera?</p>
                {/* <button onClick={handleYesClick}>Yes</button> */}
                <button onClick={handleNoClick}>Why?</button>
              </div>
            )}
            {showOptions && (
              <div>
                <img
                  className="h-[200px]"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3FxNHpneG15eDFtMjVicHM0aDVsN2w2dWt2b2Z0aXZxM3J6azFvaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q5Q3ni8x1D58yFETZd/giphy-downsized-large.gif"
                  alt="Tom"
                />
                <p>Because every time I look at you, I smile</p>
                {/* <button onClick={handleRetryClick}>Retry</button> */}
              </div>
            )}
            {showDareButton && (
              <div>
                <button onClick={handleDareButtonClick}>Dare</button>
              </div>
            )}
          </>
        ) : (
          <div>
            {/* <h2>Truth or Dare</h2> */}
            <p>Marry Me</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt6Page;
