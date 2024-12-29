import { Box, Container, Typography, Button, Grid, Chip } from "@mui/material";
import { SubTitle } from "./Components/SubTitle";
import { SelfInfo } from "./Components/SelfInfo";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Node",
  "Express.js",
  "MongoDB",
  "MySql",
  "ShellScript",
  "MicroSoft Azure",
  "next.js",
  "tailwind.css",
  "Material UI",
  "ASP .net",
  "java",
  "Git",
  "GitHub",
];

export const About = () => {
  return (
    <Box sx={{ backgroundColor: "#fcfcfc" }}>
      <Container sx={{ margin: "10px auto" }}>
        <SubTitle title="About Me" />
        <Grid container spacing={5} sx={{ mt: 5 }}>
          {/* Left Section */}
          <Grid item xs={12} sm={6}>
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
                Get to Know Me !
              </Typography>
              <Typography>
                <SelfInfo />
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{ my: 2 }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} sm={6}>
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
                My Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="medium"
                    sx={{
                      borderRadius: 2,
                      fontSize: {
                        xs: 15,
                        sm: 15,
                        md: 18,
                      },
                      py: 2,
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
