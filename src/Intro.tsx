import { Container, Typography, Box } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

export const Intro = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mt: 5,
            fontSize: {
              xs: 40,
              sm: 32,
              md: 50,
            },
          }}
        >
          Hey, I'm Pratik Nichit
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 400,
            fontFamily: '"M PLUS Rounded 1c", sans-serif',
            mt: 3,
            fontSize: {
              xs: 17,
              sm: 15,
              md: 20,
            },
          }}
        >
          A Result-Oriented Full Stack Developer Building and managing Websites
          and Mobile Applications
        </Typography>
        <Box
          sx={{
            backgroundColor: "#7610f7",
            width: {
              xs: "50vw",
              sm: "40vw",
              md: "20vw",
            },
            height: {
              xs: "50vw",
              sm: "20vw",
              md: "20vw",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
            borderRadius: 80,
          }}
        ></Box>
        <Box
          sx={{
            "@keyframes bounce": {
              "0%, 100%": {
                transform: "translateY(0)", // Original position
              },
              "50%": {
                transform: "translateY(10px)", // Moves down by 10px
              },
            },
            mb: 8,
            animation: "bounce 1s infinite", // Apply the animation
          }}
        >
          <KeyboardArrowDownSharpIcon fontSize="large" sx={{ mt: 5 }} />
        </Box>
      </div>
    </Container>
  );
};
