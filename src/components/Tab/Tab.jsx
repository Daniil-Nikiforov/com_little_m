import React, { useState } from "react";
import "./Tab.css";

function Tab({ props }) {
  const [col, setCol] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function handleOnClick(e) {
    props.collapse = !props.collapse;
    setCol(!props.collapse);
    setIsVisible(!props.collapse);

    // if (!props.collapse) {
    //   e.target.style.height = "50px";
    // } else {
    //   e.target.style.height = "35px";
    // }
  }
  return (
    <div className={`tab-flex ${isVisible ? "tab-open" : ""}`}>
      <div className="svg-tab-div" onClick={handleOnClick}>
        <div className="tab-svg">
          <span>{props.collapse ? "+" : "-"}</span>
        </div>

        <div className="tab-text-header">{props.mainText}</div>

        <div className={`tab-text-collapsed ${isVisible ? "visible" : ""}`}>
          {props.collapsedText}
        </div>
      </div>
    </div>
  );
}

export default Tab;
