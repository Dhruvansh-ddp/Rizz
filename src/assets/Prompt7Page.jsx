import React, { useState } from "react";
import "./Prompt1Page.css";

import { useNavigate } from "react-router-dom";

const Prompt7Page = () => {
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
                <p>Is your name WIFI?</p>
                {/* <button onClick={handleYesClick}>Yes</button> */}
                <button onClick={handleNoClick}>No, Why?</button>
              </div>
            )}
            {showOptions && (
              <div>
                <img
                  className="h-[200px]"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWRlcWM2ZTc1YzllM3N2cDY0Y3pxbHN3c2MxeXhhb3RocHJyZzhqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f3qJsJ6C3F1X51OwsQ/giphy.gif"
                  alt="photographer"
                />
                <p>Because I am feeling connection</p>
                {/* <button onClick={handleRetryClick}>Retry</button> */}
              </div>
            )}
            {showDareButton && (
              <div>
                <button onClick={handleDareButtonClick}>What happened?</button>
              </div>
            )}
          </>
        ) : (
          <div>
            {/* <h2>Truth or Dare</h2> */}
            <p>So you are also feeling connection</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt7Page;
