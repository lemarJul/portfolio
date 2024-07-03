import React, { useRef } from "react";
import FlexRow from "./FlexRow";
import profile from "../assets/img/profile.png";
import { styled } from "@mui/system";
import { createSlideKeyframes } from "../utils/animationsUtilities";
import { createGradientText } from "../utils/styledUtilities";

const Container = styled(FlexRow)`
  cursor: pointer;
  position: relative;
  background-color: var(--color-red);
  align-items: flex-start;
  ${({ style }) => style}
`;

const GradientText = createGradientText({
  angle: "to bottom",
  end: "var(--color-red)",
  start: "var(--color-yellow)",
});
const BackgroundText = styled(GradientText)`
  position: absolute;
  top: 20px;
  font-family: Barlow Condensed;
  font-weight: bolder;
  font-size: 250px;
  line-height: 0.9;
  animation: ${createSlideKeyframes({ y: 0, _y: 50 })} 6s infinite alternate
    ease-in-out;
`;
const MiddleGroundImg = styled("img")`
  position: absolute;
`;

const ForegroundText = styled(BackgroundText)`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

function ResumeDownload({ className, style, ...props }) {
  const foregroundTextRef = useRef(null);
  const showForeground = (e) => {
    foregroundTextRef.current.style.opacity = 1;
  };
  const hideForeground = (e) => {
    foregroundTextRef.current.style.opacity = 0;
  };
  return (
    <Container
      className={className}
      style={style}
      onMouseEnter={showForeground}
      onMouseLeave={hideForeground}
      {...props}
    >
      <BackgroundText>CV</BackgroundText>
      <MiddleGroundImg src={profile} alt="" />
      <ForegroundText ref={foregroundTextRef}>CV</ForegroundText>
    </Container>
  );
}

export default ResumeDownload;
