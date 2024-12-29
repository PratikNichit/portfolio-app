import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar } from "./Components/NavBar";
import { Stack } from "@mui/material";
import { Intro } from "./Intro";
import { About } from "./About";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // primary
      contrastText: "#000000",
    },
    secondary: {
      main: "#7610f7", // Secondary
      contrastText: "#ffff",
    },
    warning: {
      main: "#ffa726", // Warning
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: "Quicksand, Inconsolata, Arial, sans-serif",
    h1: { fontFamily: "Inconsolata, monospace" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <NavBar />
        <Intro />
        <About />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
