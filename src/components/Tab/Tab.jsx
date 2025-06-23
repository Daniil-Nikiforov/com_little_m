import React, { useState } from "react";
import "./Tab.css";

function Tab({ props }) {
  const [col, setCol] = useState(false);
  function handleOnClick(e) {
    props.collapse = !props.collapse;
    setCol(!props.collapse);
    let svg = e.target.querySelector(".tab-svg");
    if (!props.collapse) {
      e.target.style.height = "50px";
      svg.textContent = "-";
    } else {
      e.target.style.height = "35px";
      svg.textContent = "+";
    }
  }
  return (
    <div className="tab-flex">
      <div className="svg-tab-div" onClick={handleOnClick}>
        <div className="tab-svg">+</div>
        <div className="tab-text-header">
          {props.mainText}
          <div className="tab-text-div">
            {!props.collapse && (
              <div className="tab-text-collapsed">{props.collapsedText}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab;
