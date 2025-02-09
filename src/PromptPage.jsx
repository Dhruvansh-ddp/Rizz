import { useParams } from "react-router-dom";
// import "./assets/Prompt1Page.css"; // Consider if you need this import

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
import Prompt14Page from "./assets/Prompt14Page.jsx";
import Prompt15Page from "./assets/Prompt15Page.jsx";
import Prompt16Page from "./assets/Prompt16Page.jsx";
import Prompt17Page from "./assets/Prompt17Page.jsx";
import Prompt18Page from "./assets/Prompt18Page.jsx";
import Prompt19Page from "./assets/Prompt19Page.jsx";
import Prompt20Page from "./assets/Prompt20Page.jsx";
import Prompt21Page from "./assets/Prompt21Page.jsx";
import Prompt22Page from "./assets/Prompt22Page.jsx";

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
      case "14":
        return <Prompt14Page />;
      case "15":
        return <Prompt15Page />;
      case "16":
        return <Prompt16Page />;
      case "17":
        return <Prompt17Page />;
      case "18":
        return <Prompt18Page />;
      case "19":
        return <Prompt19Page />;
      case "20":
        return <Prompt20Page />;
      case "21":
        return <Prompt21Page />;
      case "22":
        return <Prompt22Page />;

      default:
        return null;
    }
  };

  return <div>{renderPromptPage(promptId)}</div>;
};

export default PromptPage;
