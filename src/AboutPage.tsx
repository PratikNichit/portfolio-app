import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Modal,
} from "@mui/material";
import { SubTitle } from "./Components/SubTitle";
import { SelfInfo } from "./Components/SelfInfo";
import data from "./data.json";
import { useState } from "react";
import { FormModal } from "./Components/FormModal";

interface AboutMePage {
  para1: string;
  para2: string;
  para3: string;
  skills: string[];
}

const aboutData: AboutMePage = data.aboutMePage;

export const AboutPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ backgroundColor: "#fcfcfc" }}>
      <Container sx={{ margin: "10px auto" }}>
        <SubTitle
          title="About Me"
          description="Here you will find more information about me, what I do, and my
          current skills"
        />
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
                <SelfInfo
                  para1={aboutData.para1}
                  para2={aboutData.para2}
                  para3={aboutData.para3}
                />
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{ my: 4 }}
                onClick={handleOpen}
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
                {aboutData.skills.map((skill) => (
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
      <Modal open={open} onClose={handleClose}>
        <FormModal open={open} handleClose={handleClose} />
      </Modal>
    </Box>
  );
};
