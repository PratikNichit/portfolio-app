import { Container, Typography, Box, IconButton, Stack } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import data from "./data.json";

interface Info {
  name: string;
  emailId: string;
}

const info: Info = data.info;

export const IntroPage = () => {
  const handleSocialClick = (platform: string) => {
    const links = {
      linkedin: "https://linkedin.com/in/yourprofile", // Replace with your LinkedIn
      twitter: "https://twitter.com/yourhandle", // Replace with your Twitter
      github: "https://github.com/yourusername", // Replace with your GitHub
    };
    window.open(links[platform as keyof typeof links], "_blank");
  };

  return (
    <Container sx={{ position: "relative" }}>
      {/* Social Links - Fixed on right side */}
      <Box
        sx={{
          position: "fixed",
          right: 30,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          display: { xs: "none", md: "block" }, // Hide on mobile
        }}
      >
        <Stack spacing={2}>
          <IconButton
            onClick={() => handleSocialClick("linkedin")}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(0, 119, 181, 0.3)",
              color: "#0077b5",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#0077b5",
                color: "white",
                transform: "translateX(-5px)",
                boxShadow: "0 8px 25px rgba(0, 119, 181, 0.3)",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            onClick={() => handleSocialClick("twitter")}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(29, 161, 242, 0.3)",
              color: "#1da1f2",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#1da1f2",
                color: "white",
                transform: "translateX(-5px)",
                boxShadow: "0 8px 25px rgba(29, 161, 242, 0.3)",
              },
            }}
          >
            <TwitterIcon />
          </IconButton>

          <IconButton
            onClick={() => handleSocialClick("github")}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(51, 51, 51, 0.3)",
              color: "#333",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#333",
                color: "white",
                transform: "translateX(-5px)",
                boxShadow: "0 8px 25px rgba(51, 51, 51, 0.3)",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Main Content */}
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
            opacity: 0,
            animation: "fadeInUp 1s ease-out 0.2s forwards",
            "@keyframes fadeInUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(30px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          Hey, I'm {info.name}
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
            opacity: 0,
            animation: "fadeInUp 1s ease-out 0.4s forwards",
            "@keyframes fadeInUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(30px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
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
              sm: "40vw",
              md: "20vw",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
            borderRadius: 80,
            opacity: 0,
            animation: "fadeInScale 1s ease-out 0.6s forwards",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
            "@keyframes fadeInScale": {
              "0%": {
                opacity: 0,
                transform: "scale(0.8)",
              },
              "100%": {
                opacity: 1,
                transform: "scale(1)",
              },
            },
          }}
        >
          <img
            src="/image.png"
            style={{ width: "100%", height: "100%", borderRadius: 150 }}
            alt={`${info.name} - Profile`}
          />
        </Box>

        <Box
          sx={{
            "@keyframes bounce": {
              "0%, 100%": {
                transform: "translateY(0)",
              },
              "50%": {
                transform: "translateY(10px)",
              },
            },
            mb: 8,
            animation: "bounce 2s infinite",
            opacity: 0,
            animationDelay: "0.8s",
            animationFillMode: "both",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
            animationName: "fadeIn, bounce",
            animationDuration: "0.5s, 2s",
            animationTimingFunction: "ease-out, ease-in-out",
            animationIterationCount: "1, infinite",
          }}
        >
          <KeyboardArrowDownSharpIcon
            fontSize="large"
            sx={{
              mt: 5,
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#7610f7",
              },
            }}
          />
        </Box>

        {/* Mobile Social Links */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            gap: 2,
            mb: 4,
            opacity: 0,
            animation: "fadeInUp 1s ease-out 1s forwards",
            "@keyframes fadeInUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(30px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <IconButton
            onClick={() => handleSocialClick("linkedin")}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(0, 119, 181, 0.3)",
              color: "#0077b5",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#0077b5",
                color: "white",
                transform: "translateY(-3px)",
                boxShadow: "0 8px 25px rgba(0, 119, 181, 0.3)",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            onClick={() => handleSocialClick("twitter")}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(29, 161, 242, 0.3)",
              color: "#1da1f2",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#1da1f2",
                color: "white",
                transform: "translateY(-3px)",
                boxShadow: "0 8px 25px rgba(29, 161, 242, 0.3)",
              },
            }}
          >
            <TwitterIcon />
          </IconButton>

          <IconButton
            onClick={() => handleSocialClick("github")}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(51, 51, 51, 0.3)",
              color: "#333",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#333",
                color: "white",
                transform: "translateY(-3px)",
                boxShadow: "0 8px 25px rgba(51, 51, 51, 0.3)",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </div>
    </Container>
  );
};
