import { keyframes } from "@mui/system";

export function createSlideKeyframes({
  x = 0,
  _x = 0,
  y = 0,
  _y = 0,
  unit = "px",
}) {
  return keyframes`
    from{
        transform: translate(${x + unit}, ${y + unit});
    }   
    to{
        transform: translate(${_x + unit}, ${_y + unit});
    }
`;
}
