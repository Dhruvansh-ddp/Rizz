import React, { useState } from "react";
import "./Prompt1Page.css";

const Prompt17Page = () => {
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
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3E2a2QwbzVtcm4xYXBjY2ZmcGg5NzNxdXo3OXRhNmYxem44MmJwcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U4Lhzz6jwVKPMU6I87/giphy.gif"
                  alt="Chocolate"
                />
                <p>
                  They say chocolate is the way to someone's heart. Would you
                  like to be my sweet?
                </p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>Sorry, I don't want to be a diabetic</p>
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
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm9yYXhrYWx0cG96NmJyc3RucXNxazB5M3NjdWk4NGRtb2ZicGZqMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YxT0v7lW71zQjQkE4N/giphy.gif"
              alt="Chocolate hearts"
            />
            <p>You are the sweetest thing I know.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt17Page;
