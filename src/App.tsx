import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar } from "./Components/NavBar";
import { Stack } from "@mui/material";
import { IntroPage } from "./IntroPage";
import { AboutPage } from "./AboutPage";
import { ExperiencePage } from "./ExperiencePage";
import { ProjectPage } from "./ProjectPage";
import { ContactMe } from "./ContactMe";

const ProjectList = [
  {
    tittle: "Ecomzy",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, illo quos sit aliquid commodi ipsum",
    imageUrl: "https://picsum.photos/300",
    projectOverView:
      "An e-commerce website where users can browse, add items to the cart, and purchase products. Includes an admin panel for inventory management.",
    techUsed: ["React", "Node.js", "MongoDB", "Material-UI"],
    gitLink: "https://github.com/yourusername/ecomzy",
    ViewLink: "https://ecomzy.example.com",
  },
  {
    tittle: "Sticky Notes",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, illo quos sit aliquid commodi ipsum",
    imageUrl: "https://picsum.photos/300",
    projectOverView:
      "A web app for creating, updating, and deleting notes and to-do lists, with persistent storage using local storage.",
    techUsed: ["React", "Tailwind CSS", "Firebase"],
    gitLink: "https://github.com/yourusername/stickynotes",
  },
  {
    tittle: "RaiseIT",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, illo quos sit aliquid commodi ipsum",
    imageUrl: "https://picsum.photos/300",
    projectOverView:
      "A mobile app that allows users to report civic issues to local authorities with images and GPS coordinates.",
    techUsed: ["React Native", "Node.js", "Express", "MongoDB"],
    gitLink: "https://github.com/yourusername/raiseit",
    ViewLink: "https://raiseit.example.com",
  },
  {
    tittle: "Portfolio Website",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, illo quos sit aliquid commodi ipsum",
    imageUrl: "https://picsum.photos/300",
    projectOverView:
      "A portfolio website showcasing personal projects, skills, and work experience. Built with a responsive design.",
    techUsed: ["Next.js", "Tailwind CSS"],
    gitLink: "https://github.com/yourusername/portfolio",
  },
  {
    tittle: "Weather App",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, illo quos sit aliquid commodi ipsum",
    imageUrl: "https://picsum.photos/300",
    projectOverView:
      "A web app that fetches real-time weather updates for any location using a public API.",
    techUsed: ["React", "API Integration", "CSS"],
    gitLink: "https://github.com/yourusername/weather-app",
  },
  {
    tittle: "Weather App",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, illo quos sit aliquid commodi ipsum",
    imageUrl: "https://picsum.photos/300",
    projectOverView:
      "A web app that fetches real-time weather updates for any location using a public API.",
    techUsed: ["React", "API Integration", "CSS"],
    gitLink: "https://github.com/yourusername/weather-app",
  },
];

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
    info: {
      main: "#000000", // Warning
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
        <IntroPage />
        <AboutPage />
        <ExperiencePage />
        <ProjectPage ProjectList={ProjectList} />
        <ContactMe />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
