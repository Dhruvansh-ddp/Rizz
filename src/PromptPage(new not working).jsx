// PromptPage.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import { promptData } from "./Data";
import "./assets/Prompt1Page.css";

const PromptPage = () => {
  const { id } = useParams();
  const [showQuestion, setShowQuestion] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [showDareStatement, setShowDareStatement] = useState(false);
  const [showDareButton, setShowDareButton] = useState(false);

  const currentPrompt = promptData.find((prompt) => prompt.id === parseInt(id));

  if (!currentPrompt) {
    return <div>Prompt not found</div>;
  }

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
            <h2>{currentPrompt.title}</h2>
            {showQuestion && (
              <div>
                {currentPrompt.initialImage && (
                  <img
                    className="h-[200px]"
                    src={currentPrompt.initialImage}
                    alt={currentPrompt.initialImageAlt}
                  />
                )}
                <p>{currentPrompt.question}</p>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            )}
            {showOptions && (
              <div>
                {currentPrompt.noOptionContent.image && (
                  <img
                    className="h-[200px]"
                    src={currentPrompt.noOptionContent.image}
                    alt={currentPrompt.noOptionContent.imageAlt}
                  />
                )}
                <p>{currentPrompt.noOptionContent.message}</p>
                {currentPrompt.noOptionContent.buttonText && (
                  <button onClick={handleRetryClick}>
                    {currentPrompt.noOptionContent.buttonText}
                  </button>
                )}
              </div>
            )}
            {showDareButton && (
              <div>
                {currentPrompt.dareContent.message && (
                  <button onClick={handleDareButtonClick}>Dare</button>
                )}
                {currentPrompt.noOptionContent.buttonText && (
                  <p>{currentPrompt.noOptionContent.buttonText}</p>
                )}
              </div>
            )}
          </>
        ) : (
          <div>
            {currentPrompt.dareContent.image && (
              <img
                className="h-[200px]"
                src={currentPrompt.dareContent.image}
                alt={currentPrompt.dareContent.imageAlt}
              />
            )}
            <p>{currentPrompt.dareContent.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptPage;

// // PromptPage.jsx
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { promptData } from "./Data";
// import "./assets/Prompt1Page.css";

// const PromptPage = () => {
//   const { id } = useParams();
//   const [showQuestion, setShowQuestion] = useState(true);
//   const [showOptions, setShowOptions] = useState(false);
//   const [showDareStatement, setShowDareStatement] = useState(false);
//   const [showDareButton, setShowDareButton] = useState(false);

//   const currentPrompt = promptData.find((prompt) => prompt.id === parseInt(id));

//   if (!currentPrompt) {
//     return <div>Prompt not found</div>;
//   }

//   const handleYesClick = () => {
//     setShowQuestion(false);
//     setShowOptions(false);
//     setShowDareStatement(false);
//     setShowDareButton(true);
//   };

//   const handleNoClick = () => {
//     setShowQuestion(false);
//     setShowOptions(true);
//     setShowDareStatement(false);
//     setShowDareButton(false);
//   };

//   const handleRetryClick = () => {
//     setShowQuestion(true);
//     setShowOptions(false);
//     setShowDareStatement(false);
//     setShowDareButton(false);
//   };

//   const handleDareButtonClick = () => {
//     setShowQuestion(false);
//     setShowOptions(false);
//     setShowDareStatement(true);
//     setShowDareButton(false);
//   };

//   return (
//     <div className="p-all">
//       <div className="prompt-container">
//         {!showDareStatement ? (
//           <>
//             <h2>{currentPrompt.title}</h2>
//             {showQuestion && (
//               <div>
//                 {currentPrompt.initialImage && (
//                   <img
//                     className="h-[200px]"
//                     src={currentPrompt.initialImage}
//                     alt={currentPrompt.initialImageAlt}
//                   />
//                 )}
//                 <p>{currentPrompt.question}</p>
//                 <button onClick={handleYesClick}>Yes</button>
//                 <button onClick={handleNoClick}>No</button>
//               </div>
//             )}
//             {showOptions && (
//               <div>
//                 <img
//                   className="h-[200px]"
//                   src={currentPrompt.noOptionContent.image}
//                   alt={currentPrompt.noOptionContent.imageAlt}
//                 />
//                 <p>{currentPrompt.noOptionContent.message}</p>
//                 <button onClick={handleRetryClick}>
//                   {currentPrompt.noOptionContent.buttonText}
//                 </button>
//               </div>
//             )}
//             {showDareButton && (
//               <div>
//                 <button onClick={handleDareButtonClick}>Dare</button>
//               </div>
//             )}
//           </>
//         ) : (
//           <div>
//             <img
//               className="h-[200px]"
//               src={currentPrompt.dareContent.image}
//               alt={currentPrompt.dareContent.imageAlt}
//             />
//             <p>{currentPrompt.dareContent.message}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PromptPage;
