import { Grid, Container } from "@mui/material";
import { SubTitle } from "./Components/SubTitle";
import { ProjectCard } from "./Components/ProjectCard";

interface Project {
  title: string;
  subTitle: string;
  imageUrl: string;
  projectOverView: string;
  techUsed: {
    name: string;
    link: string;
  }[],
  gitLink: string;
  viewLink?: string;
  details: {
    para1: string;
    para2: string;
    para3: string;
  };
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
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ProjectCard
              title={project.title}
              subTitle={project.subTitle}
              imageUrl={project.imageUrl}
              projectOverView={project.projectOverView}
              techUsed={project.techUsed}
              gitLink={project.gitLink}
              viewLink={project.viewLink}
              details={project.details}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
