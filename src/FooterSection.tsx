import {
  Box,
  Container,
  Typography,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import data from "./data.json";

export const FooterSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#7610f7",
        height: {
          xs: "30rem",
          sm: "30rem",
          md: "22rem",
        },
        mt: 5,
        pt: 5,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          color="primary"
          variant="h2"
          sx={{
            fontWeight: 800,
            mt: 3,
            mb: 5,
            fontSize: {
              xs: 25,
              sm: 25,
              md: 40,
            },
          }}
        >
          {data.info.name}
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          sx={{
            fontWeight: 100,
            fontFamily: '"M PLUS Rounded 1c", sans-serif',
            textAlign: "justify",
            fontSize: {
              xs: 17,
              sm: 15,
              md: 20,
            },
          }}
        >
          Living, learning, & leveling up
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          sx={{
            fontWeight: 100,
            fontFamily: '"M PLUS Rounded 1c", sans-serif',
            textAlign: "justify",
            fontSize: {
              xs: 17,
              sm: 15,
              md: 20,
            },
          }}
        >
          one day at a time
        </Typography>
        {/* Social Media Links */}
        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <IconButton
            href={data.social.instagramUrl}
            target="_blank"
            color="primary"
            aria-label="Instagram"
          >
            <Instagram />
          </IconButton>
          <IconButton
            href={data.social.gitHubUrl}
            target="_blank"
            color="primary"
            aria-label="GitHub"
          >
            <GitHub />
          </IconButton>
          <IconButton
            href={data.social.linkedInUrl}
            target="_blank"
            color="primary"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href={data.social.xUrl}
            target="_blank"
            color="primary"
            aria-label="X.com"
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
        {/* Divider and Copyright Text */}
        <Divider sx={{ width: "80%", backgroundColor: "white", mt: 4 }} />
        <Typography
          variant="body2"
          color="primary"
          sx={{
            mt: 3,
            fontWeight: 400,
            fontFamily: '"M PLUS Rounded 1c", sans-serif',
            textAlign: "center",
            fontSize: {
              xs: 12,
              sm: 12,
              md: 14,
            },
          }}
        >
          © Copyright 2025. Made by {data.info.name}
        </Typography>
      </Container>
    </Box>
  );
};
