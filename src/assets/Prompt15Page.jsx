import { useState } from "react";
import "./Prompt1Page.css";

const Prompt15Page = () => {
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
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWp2am92NjNoc29vOHFhYXJwd3Q2a20xdmJtODN1OWp2OTd6OHpsNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0ExbnG0B6Hn2bO9y/giphy.gif"
                  alt="Science Reaction"
                />
                <p>
                  Do you believe in chemistry? Because I think we've got a
                  reaction...
                </p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>I'm positive there's no noble gas in this relationship!</p>
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
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXVtbG9vYm5wNXM4aDNyOGV1ejZqNmJ5MzYxdWVlbWdqbmQ2b3BqNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LuvV5X6vF440g/giphy.gif"
              alt="Hearts Reaction"
            />
            <p>Let's bond and see where the reaction takes us?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt15Page;
