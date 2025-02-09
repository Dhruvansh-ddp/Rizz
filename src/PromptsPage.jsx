import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, CheckCheck } from "lucide-react";
import "./PromptsPage.css";

const PromptsPage = () => {
  const [copiedId, setCopiedId] = useState(null);

  // Special prompts that get emoji indicators
  const specialPrompts = {
    // 1: "🔥", // Marriage proposal prompt
    2: "🌶️", // Virginity prompt
    // 3: "👅", // Tongue prompt
    // 4: "💝", // Love confession prompt
    // 7: "🦋", // Chemistry prompt
    13: "✨", // Stars prompt
    15: "☕", // Coffee prompt
    // 20: "💫", // Extra special prompt
  };

  const handleCopy = (promptId) => {
    const link = `https://valentine-rizz.vercel.app/${promptId}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopiedId(promptId);
        setTimeout(() => setCopiedId(null), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
<<<<<<< HEAD
    <div>
      <h2> Rizz Lines </h2>
      <ul>
        {prompts.map((prompt) => (
          <li key={prompt}>
            <Link to={`/${prompt}`}>{prompt}</Link>
          </li>
=======
    <div className="prompts-container">
      <h2 className="prompts-title">Pickup Line Prompts</h2>
      <div className="prompts-grid">
        {Array.from(Array(22), (_, index) => index + 1).map((prompt) => (
          <div key={prompt} className="prompt-card">
            <Link to={`/${prompt}`} className="prompt-link">
              <span>Prompt {prompt}</span>
              {specialPrompts[prompt] && (
                <span className="prompt-emoji">{specialPrompts[prompt]}</span>
              )}
            </Link>
            <button
              onClick={() => handleCopy(prompt)}
              className="copy-button"
              title="Copy link"
            >
              {copiedId === prompt ? (
                <CheckCheck className="check-icon" />
              ) : (
                <Copy className="copy-icon" />
              )}
            </button>
          </div>
>>>>>>> a1f30cf (new prop)
        ))}
      </div>
    </div>
  );
};

export default PromptsPage;

// // import React from 'react';
// import { Link } from "react-router-dom";

// const PromptsPage = () => {
//   // Generate an array of prompts
//   const prompts = Array.from(Array(22), (_, index) => index + 1);

//   return (
//     <div>
//       <h2>Pickup Line Prompts</h2>
//       <ul>
//         {prompts.map((prompt) => (
//           <li key={prompt}>
//             <Link to={`/${prompt}`}>{prompt}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PromptsPage;
