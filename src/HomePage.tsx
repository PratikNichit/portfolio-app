import { NavBar } from "./Components/NavBar";
import { Stack } from "@mui/material";
import { IntroPage } from "./IntroPage";
import { AboutPage } from "./AboutPage";
import { ExperiencePage } from "./ExperiencePage";
import { ProjectPage } from "./ProjectPage";
import { ContactMe } from "./ContactMe";
import { FooterSection } from "./FooterSection";
import data from "./data.json";

export const HomePage = () => {
  const projectList = data.projectPage.ProjectList;
  return (
    <Stack sx={{ m: 0, p: 0 }}>
      <NavBar />
      <IntroPage />
      <AboutPage />
      <ExperiencePage />
      <ProjectPage ProjectList={projectList} />
      <ContactMe />
      <FooterSection />
    </Stack>
  );
};
