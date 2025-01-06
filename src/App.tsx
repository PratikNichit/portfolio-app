import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar } from "./Components/NavBar";
import { Stack } from "@mui/material";
import { IntroPage } from "./IntroPage";
import { AboutPage } from "./AboutPage";
import { ExperiencePage } from "./ExperiencePage";
import { ProjectPage } from "./ProjectPage";
import { ContactMe } from "./ContactMe";
import { FooterSection } from "./FooterSection";
import data from "./data.json";

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
  const projectList = data.projectPage.ProjectList;

  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ m: 0, p: 0 }}>
        {console.log(projectList)}
        <NavBar />
        <IntroPage />
        <AboutPage />
        <ExperiencePage />
        <ProjectPage ProjectList={projectList} />
        <ContactMe />
        <FooterSection />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
