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
                  src="https://media.tenor.com/6MnOJTBoeeEAAAAM/tom-and-jerry-cat.gif"
                  alt="Chocolate"
                />
                <p>
                  They say sweet is the way to someone's heart. Would you like
                  to be my sweet?
                </p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <img
                  className="h-[200px]"
                  src="https://media.tenor.com/8wxUQVqU9J0AAAAM/cutecat-cute.gif"
                  alt="Chocolate"
                />
                <p>Okay then I'll save you for Dessert</p>
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
              src="https://media1.tenor.com/m/9DUuq3luvkgAAAAC/love-quotes.gif"
              alt="Chocolate"
            />

            <p>You are the sweetest thing I know.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt17Page;
