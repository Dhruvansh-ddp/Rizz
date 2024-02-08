import { useState } from "react";
import "./Prompt1Page.css";

// import { useNavigate } from "react-router-dom";

const Prompt12Page = () => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [showDareStatement, setShowDareStatement] = useState(false);
  const [showDareButton, setShowDareButton] = useState(false);
  // const navigate = useNavigate();

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

  // const handleRetryClick = () => {
  //   setShowQuestion(true);
  //   setShowOptions(false);
  //   setShowDareStatement(false);
  //   setShowDareButton(false);
  // };

  // const handleDareButtonClick = () => {
  //   setShowQuestion(false);
  //   setShowOptions(false);
  //   setShowDareStatement(true);
  //   setShowDareButton(false);
  // };

  return (
    <div className="p-all">
      <div className="prompt1-container">
        {!showDareStatement ? (
          <>
            {showQuestion && (
              <div>
                <h2>Question of the Day</h2>
                <p>Do you have todays movie tickets?</p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>Let me buy you one</p>
                {/* <button onClick={handleRetryClick}>Retry</button> */}
              </div>
            )}
            {showDareButton && (
              <div>
                <p>
                  {" "}
                  Seems like you can read my mind, you already planned it out.
                </p>
                {/* <button onClick={handleDareButtonClick}>Dare</button> */}
              </div>
            )}
          </>
        ) : (
          <div>
            <h2>Truth or Dare</h2>
            <p>Marry Me</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt12Page;
