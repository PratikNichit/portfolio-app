import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar } from "./Components/NavBar";
import { Stack } from "@mui/material";
import { Intro } from "./Intro";
import { About } from "./About";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#000000", // Text color on primary background
    },
    secondary: {
      main: "#7610f7", // Secondary color
      contrastText: "#000000", // Text color on secondary background
    },
    warning: {
      main: "#ffa726", // Warning color (e.g., amber)
      contrastText: "#000000", // Text color on warning background
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
