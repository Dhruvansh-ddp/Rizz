import React, { useState } from "react";
import "./Prompt1Page.css";

const Prompt14Page = () => {
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
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2I2ZzJoZHJ6Nm53NGFpY28xYjNxd2kydm9xZmc4bHFvMGw5djQ2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/70900Hnq27T0l2sHwk/giphy.gif"
                  alt="Winter Scene"
                />
                <p>
                  If kisses were snowflakes, would you help me make a blizzard?
                </p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <img
                  className="h-[200px]"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2I2ZzJoZHJ6Nm53NGFpY28xYjNxd2kydm9xZmc4bHFvMGw5djQ2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/70900Hnq27T0l2sHwk/giphy.gif"
                  alt="Winter Scene"
                />
                <p>Let's start with a gentle snow.</p>
                <button onClick={handleRetryClick}>Okay!</button>
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
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW14cWJ0ZnZ1aWhra243azJjYTRmdm51N2h0c3J6MXN1cWd4eXZ5NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8R3Q9r7p1o312/giphy.gif"
              alt="Winter Scene"
            />
            <p>I want to make it to the beach, will you help?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt14Page;
