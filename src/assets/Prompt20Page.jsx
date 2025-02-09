import React, { useState } from "react";
import "./Prompt1Page.css";

const Prompt20Page = () => {
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
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmU0b3FtdGN3bTVoNm1wZWJ2b3A3eGV3cWJ5MjFhM2luejVvd2d1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g0KssQYVlcU1W/giphy.gif"
                  alt="Coffee"
                />
                <p>
                  They say coffee is the perfect first date. Would you be my cup
                  of perfection?
                </p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>I am just trying to caffeine free myself.</p>
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
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazlzMXlxbG80aWJndzFoYXZycGI5dTVpNmN5M242NnV2anV0cmljayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYu0u2OO94mH29W/giphy.gif"
              alt="Coffee Love"
            />
            <p>I'd love to brew up a sweet romance with you.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt20Page;
