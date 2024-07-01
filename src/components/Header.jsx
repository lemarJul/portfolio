import React from "react";
import { Typography, Box } from "@mui/material";
import theme from "../utils/theme";
import jlIcon from "../assets/icons/jl-icon.png";
import { header, title, logo } from "./Header.module.css";

export default function Header(props) {
  // const style = {
  //   position: "relative",
  //   button: {
  //     position: "absolute",
  //     top: "1rem",
  //   },

  //   [theme.breakpoints.down("sm")]: {
  //     "& h1": {
  //       fontSize: "3rem",
  //     },
  //   },
  // };

  return (
    <header className={header}>
      <img className={logo} src={jlIcon} alt="JL Icon" />
      <h1 className={title}>Julien Lemarchand</h1>
    </header>
  );
}
