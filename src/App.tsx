import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HomePage } from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectDetails } from "./ProjectDetails";

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
    info: {
      main: "#000000", // Warning
      contrastText: "#ffffff",
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProjectDetails/:title" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
