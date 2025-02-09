import React, { useState } from "react";
import "./Prompt1Page.css";

const Prompt21Page = () => {
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
                  src="https://media1.tenor.com/m/xPprxSKuEcMAAAAd/hanamaruobake-hanamaru.gif"
                  alt="Writing"
                />
                <p>
                  If poetry was a language, would you let me write verses about
                  you?
                </p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>I like to rhyme, thank you.</p>
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
            {/* <img
              className="h-[200px]"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHF4NzF3eXpmemN3emlhd3l5NG11bjRzZTNlMjRtbW1xOGJqaGM4YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6c0v0v0S1W100/giphy.gif"
              alt="Writing Heart"
            /> */}
            <p>You are the poem I never knew I wanted to write.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt21Page;
