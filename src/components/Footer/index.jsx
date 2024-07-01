import { Box } from "@mui/material";
import SocialLinks from "./SocialLinks";
import CopyrightNotice from "./CopyrightNotice";
import { WidthFull } from "@mui/icons-material";

export default function Footer(props) {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  };

  return (
    <Box {...props} component="footer" sx={style}>
      <SocialLinks />
      <CopyrightNotice />
    </Box>
  );
}
