import React from "react";
import "./YouTubePlayer.css";
import ReactPlayer from "react-player";
import YouTube from "react-youtube";

function YouTubePlayer(props) {
  return (
    <div className="youTube-container">
      <YouTube videoId={props.videoId} iframeClassName="react-player" />
    </div>
  );
}

export default YouTubePlayer;
