import React from "react";
import css from "./SlidingText.module.css";

function SlidingText({ text, speed, props }) {
  const animationDuration = speed ? `${speed}s` : "5s"; // Default to 10 seconds if no speed is provided

  return (
    <div className={css.slidingTextContainer} style={{ overflow: "hidden" }}>
      <div className={css.slidingText}>
        <span>{text} </span>
        <span>{text} </span> 
      </div>
    </div>
  );
}

export default SlidingText;
