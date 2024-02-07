// import React from 'react';
import { useParams } from "react-router-dom";
// import "./assets/Prompt1Page.css";
import Prompt1Page from "./assets/Prompt1Page.jsx";
import Prompt2Page from "./assets/Prompt2Page.jsx";
import Prompt3Page from "./assets/Prompt3Page.jsx";
import Prompt4Page from "./assets/Prompt4Page.jsx";
import Prompt5Page from "./assets/Prompt5Page.jsx";
import Prompt6Page from "./assets/Prompt6Page.jsx";
import Prompt7Page from "./assets/Prompt7Page.jsx";
import Prompt8Page from "./assets/Prompt8Page.jsx";
import Prompt9Page from "./assets/Prompt9Page.jsx";
import Prompt10Page from "./assets/Prompt10Page.jsx";
import Prompt11Page from "./assets/Prompt11Page.jsx";
import Prompt12Page from "./assets/Prompt12Page.jsx";
import Prompt13Page from "./assets/Prompt13Page.jsx";

const PromptPage = () => {
  const { promptId } = useParams();

  // Render different prompt pages based on the promptId
  const renderPromptPage = (promptId) => {
    switch (promptId) {
      case "1":
        return <Prompt1Page />;

      case "2":
        return <Prompt2Page />;

      case "3":
        return <Prompt3Page />;

      case "4":
        return <Prompt4Page />;

      case "5":
        return <Prompt5Page />;

      case "6":
        return <Prompt6Page />;

      case "7":
        return <Prompt7Page />;

      case "8":
        return <Prompt8Page />;

      case "9":
        return <Prompt9Page />;

      case "10":
        return <Prompt10Page />;

      case "11":
        return <Prompt11Page />;

      case "12":
        return <Prompt12Page />;

      case "13":
        return <Prompt13Page />;

      default:
        return null;
    }
  };

  return (
    // <div className="promtpages">
    <div>
      {/* <h2>Prompt {promptId}</h2> */}
      {renderPromptPage(promptId)}
    </div>
  );
};

export default PromptPage;
