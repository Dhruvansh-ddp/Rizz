import React, { useState } from "react";
import "./Prompt1Page.css";

import { useNavigate } from "react-router-dom";

const Prompt3Page = () => {
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
            <h2>Truth or Dare</h2>
            {showQuestion && (
              <div>
                <img
                  className="h-[200px]"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGxjMTAzMmM1ZHZkMDZ6MGNmeG95aHZjODRtZWhuMzJuMDU3OTl4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jivGITd768psP80B2i/giphy.gif"
                  alt="shocked  cat"
                />
                <p>Do you know tongue is the strongest muscle?</p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>Alright, now you know</p>
                <button onClick={handleDareButtonClick}>Dare</button>
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
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjhoZDhkNmw1dTFpbjBtNnQ1aWFpMWlmeDMwZHhmaWUydjBoNGdlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2YWjP6SQStcCimcM/giphy.gif"
              alt="Winking Girl"
            />
            <p>Lets fight with it</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt3Page;
