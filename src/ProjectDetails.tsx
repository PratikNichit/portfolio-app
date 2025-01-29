import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { SubTitle } from "./Components/SubTitle";
import { SelfInfo } from "./Components/SelfInfo";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ProjectDetails = () => {
  const { state } = useLocation();
  const project = state;
  const subtitle = "Here you will find more about the project " + project.title;

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!state) {
    return null;
  }

  return (
    <Container sx={{ mb: 5 }}>
      <SubTitle title={project.title} description={subtitle} />
      <Grid container spacing={5} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: {
                  xs: 17,
                  sm: 20,
                  md: 25,
                },
              }}
            >
              Technology Used
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap", 
                gap: 4,
                borderRadius: 2,
                justifyContent: "flex-start", 
                py: 2,
                fontWeight: 600,
              }}
            >
              {project.techUsed.map(
                (skill: { name: string; link: string }, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      width: {
                        xs: "50px", 
                        sm: "60px", 
                        md: "80px", 
                      },
                      height: {
                        xs: "50px", 
                        sm: "60px", 
                        md: "80px", 
                      },
                      display: "flex",
                      justifyContent: "flex-start",
                      padding: 1,
                    }}
                  >
                    <img
                      src={skill.link}
                      alt={skill.name}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain", 
                      }}
                    />
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: {
                  xs: 17,
                  sm: 20,
                  md: 25,
                },
              }}
            >
              More about the project
            </Typography>
            <SelfInfo
              para1={project.details.para1}
              para2={project.details.para2}
              para3={project.details.para3}
            />
            <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{ my: 4 }}
              href={project.gitLink}
              target="_blank"
            >
              GitHub
            </Button>
            {project.viewLink && ( 
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{ my: 4, ml: 2 }}
                href={project.viewLink}
                target="_blank"
              > 
                Visit
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
