import { NavBar } from "./Components/NavBar";
import { Stack } from "@mui/material";
import { IntroPage } from "./IntroPage";
import { AboutPage } from "./AboutPage";
import { ExperiencePage } from "./ExperiencePage";
import { EducationAndCertificationsPage } from "./EducationAndCertificationsPage";
import { ProjectPage } from "./ProjectPage";
import { ContactMe } from "./ContactMe";
import { FooterSection } from "./FooterSection";
import data from "./data.json";
import { useEffect } from "react";

export const HomePage = () => {
  const projectList = data.projectPage.ProjectList;

  // Restore scroll position when coming back from ProjectDetails
  useEffect(() => {
    const savedY = sessionStorage.getItem("homeScrollY");
    if (savedY !== null) {
      const y = Number(savedY);
      sessionStorage.removeItem("homeScrollY"); // clear so fresh visits start at top
      const id = setTimeout(() => window.scrollTo({ top: y, behavior: "instant" }), 0);
      return () => clearTimeout(id);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <Stack sx={{ m: 0, p: 0 }}>
      <NavBar />
      <IntroPage />
      <AboutPage />
      <ExperiencePage />
      <ProjectPage ProjectList={projectList} />
      <EducationAndCertificationsPage />
      <ContactMe />
      <FooterSection />
    </Stack>
  );
};
