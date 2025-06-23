import React, { createElement } from "react";
import "./LinkWhite.css";

function LinkWhite(props) {
  function animationTimer() {
    setInterval(() => {
      const e = document.querySelector(".jump-btn");
      e.classList.add("animate");
      setTimeout(() => e.classList.remove("animate"), 500);
    }, 3000);
  }
  animationTimer();
  return (
    <a
      style={{
        background: `${props.bg}`,
        color: `${props.c}`,
      }}
      target="_blank"
      href={props.href}
      className={props.h === "ЗАПИСАТЬСЯ" ? "jump-btn" : null}
    >
      <div className="flex-div">
        <div className="svg-div">{props.svg}</div>
        <div className="middle-text">
          <div className="h-text">
            {props.icon && (
              <div className="icon-div">
                {props.icon} {props.h}
              </div>
            )}
            {!props.icon && props.h}
          </div>
          <div className="p-text2">{props.p}</div>
        </div>
      </div>
    </a>
  );
}

export default LinkWhite;
