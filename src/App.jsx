// Styles - Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "@fontsource/barlow-condensed/100.css";
import "@fontsource/barlow-condensed/200.css";
import "@fontsource/barlow-condensed/300.css";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/900.css";
import "@fontsource/barlow/100.css";
import "@fontsource/barlow/200.css";
import "@fontsource/barlow/300.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow/900.css";
// Styles - Theme
import theme from "./utils/theme";
// Styles - Components
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
// Stylesheet
import "./App.css";
// Context
import { AppContextProvider } from "./utils/context";
// Components
import { Container, Box } from "@mui/material";
import Footer from "./components/Footer";
import Section_Projects from "./components/sections/Projects";
import Section_About from "./components/sections/About";
import Section_Landing from "./components/sections/Landing";

import SlidingText from "./components/SlidingText";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </ThemeProvider>
  );
}

function Main() {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
    padding: "3rem",
    width: "100%",
    transition: "height 0.3s ease",
  };

  return (
    <Container sx={style}>
      <main>
        <Section_Landing></Section_Landing>
        <Section_About></Section_About>
        <Section_Projects></Section_Projects>
      </main>
      <Footer />
    </Container>
  );
}
