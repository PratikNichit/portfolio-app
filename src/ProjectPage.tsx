import { Grid, Container } from "@mui/material";
import { SubTitle } from "./Components/SubTitle";
import { ProjectCard } from "./Components/ProjectCard";

interface Project {
  tittle: string;
  subTittle: string;
  imageUrl: string;
  projectOverView: string;
  techUsed: string[];
  gitLink: string;
  ViewLink?: string;
}

interface Props {
  ProjectList: Project[];
}

export const ProjectPage = ({ ProjectList }: Props) => {
  return (
    <Container sx={{ marginY: 4 }}>
      <SubTitle
        title={"My Recent Work"}
        description={
          "Here you will find some of the personal and clients projects that I created and worked on"
        }
      />
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {ProjectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              tittle={project.tittle}
              subTittle={project.subTittle}
              imageUrl={project.imageUrl}
              projectOverView={project.projectOverView}
              techUsed={project.techUsed}
              gitLink={project.gitLink}
              ViewLink={project.ViewLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
