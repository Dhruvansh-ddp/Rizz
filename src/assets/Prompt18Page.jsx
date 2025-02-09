import { useState } from "react";
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
                  src="https://media1.tenor.com/m/eSK4SyEXPr4AAAAC/anime-himmel.gif"
                  alt="Stars Align"
                />
                <p>
                  Did you know stars align every thousand years?
                  <br />
                  Just like how we aligned today...
                </p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>The stars should align back again for the world's sake.</p>
                {/* <button onClick={handleRetryClick}>Hmm...</button> */}
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
              src="https://media.tenor.com/hokZOkasF8wAAAAi/%3C3-star.gif"
              alt="Heart Moon"
            />
            <p>
              Let's shoot for the stars and see where our constellations lead
              us?
            </p>
            <button onClick={handleRetryClick}>Umm Interesting</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt18Page;
