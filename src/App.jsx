// Styles - Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
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
