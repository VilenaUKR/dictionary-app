import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="phonetic mt-3 mb-1">
        <div>
          <ReactAudioPlayer
            className="audio-player"
            src={props.phonetic.audio}
            autoPlay={false}
            controls={true}
          />
        </div>
        <div className="phoneticText">{props.phonetic.text}</div>
      </div>
    );
  } else {
    return null;
  }
}
