import React from "react";
import "./PriceItem2.css";

function PriceItem2(props) {
  return (
    <div className="item">
      <span>{props.title}</span>
      <span className="subline"></span>
      <span>{props.price}</span>
    </div>
  );
}

export default PriceItem2;
