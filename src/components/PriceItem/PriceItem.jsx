import React from "react";
import "./PriceItem.css";

function PriceItem(props) {
  return (
    <div className="item">
      <span>{props.title}</span>
      <span className="subline"></span>
      <span>{props.price}</span>
    </div>
  );
}

export default PriceItem;
