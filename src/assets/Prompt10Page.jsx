import { useState } from "react";
import "./Prompt1Page.css";

// import { useNavigate } from "react-router-dom";

const Prompt10Page = () => {
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
                <h2>Sweet Question </h2>
                <p>Is your name Google?</p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <p>
                  Well, you should be, beacause you have everything I have been
                  looking for.
                </p>
                {/* <button onClick={handleRetryClick}>Retry</button> */}
              </div>
            )}
            {showDareButton && (
              <div>
                <p> Because you have got everything I am searching for</p>
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

export default Prompt10Page;
