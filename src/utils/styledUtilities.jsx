import { styled } from "@mui/system";

export function createGradientText({
  angle = "to right",
  start,
  end,
  component = "div",
}) {
  return styled(component)`
    background: linear-gradient(${angle}, ${start}, ${end});
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    color: ${start};
    ); /* Fallback: while loading or if gradient fails */
  `;
}
