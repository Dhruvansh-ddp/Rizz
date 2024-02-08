// import React from 'react';
import { Link } from "react-router-dom";

const PromptsPage = () => {
  // Generate an array of prompts
  const prompts = Array.from(Array(50), (_, index) => index + 1);

  return (
    <div>
      <h2> Rizz Lines </h2>
      <ul>
        {prompts.map((prompt) => (
          <li key={prompt}>
            <Link to={`/${prompt}`}>{prompt}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromptsPage;
