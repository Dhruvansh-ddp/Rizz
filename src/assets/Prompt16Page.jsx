import { useState } from "react";
import "./Prompt1Page.css";

const Prompt16Page = () => {
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
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2U3bXZ2bTh4aHN3cDAxYzQzMG13dWI5Mnp3Nm53aHFndWR3NmtzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yFRnQ40v3bE2Qz0K2w/giphy.gif"
                  alt="Cute Cat"
                />
                <p>If I were a cat, would you spend 9 lives with me?</p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>Well, I don't want you to throw up hairballs on me.</p>
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
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanNncG9wc3h0M2tlbmdtbW1lMXE3ejI5amJldmJwcG81dzl4eWltaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MD1E8wre22aBq/giphy.gif"
              alt="Cat Hug"
            />
            <p>Let's purrfect our love story, one life at a time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt16Page;
