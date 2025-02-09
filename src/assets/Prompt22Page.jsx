import React, { useState } from "react";
import "./Prompt1Page.css";

const Prompt22Page = () => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [showDareStatement, setShowDareStatement] = useState(false);
  const [showDareButton, setShowDareButton] = useState(false);

  const handleYesClick = () => {
    setShowQuestion(false);
    setShowOptions(false);
    setShowDareStatement(true);
    setShowDareButton(false);
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
            <h2>Truth or Dare</h2>
            {showQuestion && (
              <div>
                <img
                  className="h-[200px]"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHN2b284ZGIxMWV1MzJxY25tbXhrNmh0a24wMmZlNTc5MWMzNTVwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d0Dd48w9bW1Hq/giphy.gif"
                  alt="Aurora"
                />
                <p>Is your name Aurora?</p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>Sorry, I have something to tell you</p>
                <button onClick={handleRetryClick}>Hmm...</button>
              </div>
            )}
            {showDareButton && (
              <div>
                <button onClick={handleDareButtonClick}>
                  Why are you asking?
                </button>
              </div>
            )}
          </>
        ) : (
          <div>
            <img
              className="h-[200px]"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHBsdHprdWpxaXk1OWg3cHF0cDFsbjB2cW92dDVwdXhncnh0bjhzYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Wz0fE1sUe97uW4E35z/giphy.gif"
              alt="Kiss "
            />
            <p>I knew it, You just woke me up</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt22Page;
