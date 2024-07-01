import React, { useState } from "react";
import css from "./Slider.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Slider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };

  const goToNext = () => {
    console.log("goToNext");
    setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const Dot = ({ index }) => {
    return (
      <button
        onClick={() => setActiveIndex(index)}
        className={[css.dot, index === activeIndex && css.dot_active].join(" ")}
      ></button>
    );
  };

  console.log("rendner", activeIndex);
  return (
    <div className={css.container}>
      <button className={css.left} onClick={goToPrevious}>
        <ArrowBackIosNewIcon />
      </button>
      {children && (
        <div className={css.items}>
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              style: {
                ...child.props.style,
                transform: `translateX(${50 - activeIndex * 100}%)`,
                filter: index === activeIndex ? "none" : "brightness(0.4)",
                transition: "transform 0.5s, filter 0.5s",
              },
            })
          )}
        </div>
      )}
      <button className={css.right} onClick={goToNext}>
        <ArrowForwardIosIcon />
      </button>

      {children && (
        <div className={css.dots_container}>
          {React.Children.map(children, (child, index) => (
            <Dot index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
