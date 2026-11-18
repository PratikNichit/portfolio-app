import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { SubTitle } from "./Components/SubTitle";
import { SelfInfo } from "./Components/SelfInfo";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import data from "./data.json";

export const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { title } = useParams<{ title: string }>();

  // Use router state if available, or fallback to data.json lookup
  const project =
    state ||
    data.projectPage.ProjectList.find(
      (p) =>
        p.title.toLowerCase() === title?.toLowerCase() ||
        encodeURIComponent(p.title) === title
    );

  // Scroll to top only on fresh visit (not on back navigation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          Project Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          The project you are looking for might have been moved or renamed.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  const subtitle = "Here you will find more about the project " + project.title;

  return (
    <Container sx={{ mb: 5 }}>
      {/* Back button */}
      <Box sx={{ pt: 3, pb: 1 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            textTransform: "none",
            color: "#7610f7",
            fontWeight: 600,
            fontSize: 14,
            px: 0,
            "&:hover": { background: "transparent", opacity: 0.75 },
          }}
        >
          Back to Projects
        </Button>
      </Box>
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
