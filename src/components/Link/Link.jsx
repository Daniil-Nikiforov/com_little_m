import React from "react";
import "./Link.css";

function Link() {
  return (
    <a className="link">
      <div className="link-div">
        <svg
          role="none"
          data-mode="stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="15" cy="15" r="3"></circle>
          <path d="M13 17.5V22l2-1.5 2 1.5v-4.5M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3"></path>
          <path d="M6 15h2"></path>
        </svg>

        <div className="text-block">
          <div className="h-text">МОЙ САЙТ</div>
          <div className="p-text">Читать</div>
        </div>
      </div>
    </a>
  );
}

export default Link;
