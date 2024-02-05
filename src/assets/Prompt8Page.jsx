import React, { useState } from "react";
import "./Prompt1Page.css";

import { useNavigate } from "react-router-dom";

const Prompt8Page = () => {
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
            {showQuestion && (
              <div>
                <h2>Truth or Dare</h2>
                <img
                  className="h-[200px]"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXRycXVyZ3BvejdnbHJoeXdpbHQzNXVoM3czY2c4aWR5MGVmeHRneiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m0MfjLtKOgTPG/giphy-downsized-large.gif"
                  alt="photographer"
                />
                <p>Is your dad a baker?</p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                <img
                  className="h-[200px]"
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmZtODQ5MDRjazE0eHR4NmR2bXp0ZWFrc2hocDNzanA1dWdlbTFoNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XDchDU77dNigejOCBl/giphy.gif"
                  alt="photographer"
                />
                <p>Then who made you such a sweet?</p>
                {/* <button onClick={handleRetryClick}>Retry</button> */}
              </div>
            )}
            {showDareButton && (
              <div>
                <p> No wonder why you are such a cutie pie</p>
                {/* <button onClick={handleDareButtonClick}>Dare</button> */}
              </div>
            )}
          </>
        ) : (
          <div>
            <p>Marry Me</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt8Page;
