import { Typography } from "@mui/material";

export default function CopyrightNotice(props) {
  return (
    <Typography
      {...props}
      variant="body2"
      component="span"
      sx={{ color: "gray", fontSize: "0.8rem" }}
    >
      &copy; 2024 - by Julien Lemarchand
    </Typography>
  );
}
