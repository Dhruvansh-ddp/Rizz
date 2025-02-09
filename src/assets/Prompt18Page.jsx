import React, { useState } from "react";
import "./Prompt1Page.css";

const Prompt18Page = () => {
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
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzI4d200c2E2Mm5ld2M5d3B3dG55bXNlc200cXN0aGFyZHR4dmJtMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W4Qt24539k3W35lM6x/giphy.gif"
                  alt="Stars Align"
                />
                <p>
                  Did you know stars align every thousand years? Just like how
                  we aligned today...
                </p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>The stars should align back again for the world's sake.</p>
                <button onClick={handleRetryClick}>Hmm...</button>
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
            <img
              className="h-[200px]"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTRpM3F1ZjZ3ZGY4dmJpajZxd2N4bWFydWJpYXo3cThsY2g5ajgydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRwWz0HCEzN1xUY/giphy.gif"
              alt="Heart Moon"
            />
            <p>
              Let's shoot for the stars and see where our constellations lead
              us?
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt18Page;
