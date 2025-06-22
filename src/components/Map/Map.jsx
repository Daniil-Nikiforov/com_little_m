import React from "react";
import map from "/public/map.png";
import marker from "/public/marker.png";
import markerShadow from "/public/marker-shadow.png";
import "./Map.css";

function Map() {
  return (
    <div className="map-div">
      <div className="map-img">
        <img src={marker} alt="marker" className="marker-img" />
        <img
          src={markerShadow}
          alt="markerShadow"
          className="markerShadow-img"
        />
      </div>
    </div>
  );
}

export default Map;
