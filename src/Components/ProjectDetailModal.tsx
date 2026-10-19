import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Chip,
  Slide,
} from "@mui/material";
import { forwardRef } from "react";
import type { TransitionProps } from "@mui/material/transitions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

interface TechStack {
  name: string;
  link: string;
}

interface ProjectDetails {
  para1: string;
  para2: string;
  para3: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  subTitle: string;
  bannerImage: string;
  projectOverView: string;
  techUsed: TechStack[];
  gitLink: string;
  viewLink?: string;
  details: ProjectDetails;
}

// Slide up transition — feels like a page push
const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ProjectDetailModal = ({
  open,
  onClose,
  title,
  bannerImage,
  techUsed,
  gitLink,
  viewLink,
  details,
}: Props) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#fff",
          overflowX: "hidden",
        },
      }}
    >
      {/* Sticky top bar */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          px: { xs: 2, md: 4 },
          py: 1.5,
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
        }}
      >
        <IconButton
          onClick={onClose}
          edge="start"
          sx={{
            mr: 1.5,
            color: "#7610f7",
            "&:hover": { backgroundColor: "rgba(118,16,247,0.08)" },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 16, md: 18 },
            color: "#111",
            letterSpacing: "-0.3px",
          }}
        >
          {title}
        </Typography>
      </Box>

      <DialogContent sx={{ p: 0 }}>
        {/* Hero banner image */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "100%",
            height: 360,
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#f5f5f5",
          }}
        >
          <img
            src={bannerImage}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Subtle gradient overlay at the bottom of image */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 80,
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.9))",
            }}
          />
        </Box>

        {/* Main content */}
        <Box sx={{ px: { xs: 3, sm: 5, md: 8 }, py: { xs: 4, md: 6 }, maxWidth: 1100, mx: "auto" }}>
          {/* Project title + action buttons */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 2,
              mb: 5,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 24, sm: 30, md: 36 },
                  letterSpacing: "-0.5px",
                  color: "#111",
                  lineHeight: 1.2,
                  mb: 0.5,
                }}
              >
                {title}
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: "#7610f7",
                  mt: 1,
                }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<GitHubIcon />}
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  fontWeight: 600,
                  px: 2.5,
                }}
              >
                GitHub
              </Button>
              {viewLink && (
                <Button
                  variant="outlined"
                  startIcon={<LaunchIcon />}
                  href={viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    fontWeight: 600,
                    px: 2.5,
                    color: "#7610f7",
                    borderColor: "#7610f7",
                    "&:hover": {
                      borderColor: "#5e0cc5",
                      backgroundColor: "rgba(118,16,247,0.06)",
                    },
                  }}
                >
                  Live Demo
                </Button>
              )}
            </Box>
          </Box>

          <Grid container spacing={{ xs: 4, md: 7 }}>
            {/* Tech stack */}
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 17, md: 19 },
                  color: "#111",
                  mb: 2.5,
                  letterSpacing: "-0.2px",
                }}
              >
                Tech Stack
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  alignItems: "center",
                }}
              >
                {techUsed.map((skill, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0.8,
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 44, md: 52 },
                        height: { xs: 44, md: 52 },
                        p: 0.8,
                        borderRadius: 2,
                        border: "1px solid rgba(0,0,0,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#fafafa",
                      }}
                    >
                      <img
                        src={skill.link}
                        alt={skill.name}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </Box>
                    <Chip
                      label={skill.name}
                      size="small"
                      sx={{
                        fontSize: 10,
                        height: 20,
                        backgroundColor: "rgba(118,16,247,0.07)",
                        color: "#7610f7",
                        border: "1px solid rgba(118,16,247,0.14)",
                        fontWeight: 600,
                        "& .MuiChip-label": { px: 0.8 },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* About the project */}
            <Grid item xs={12} md={8}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 17, md: 19 },
                  color: "#111",
                  mb: 2.5,
                  letterSpacing: "-0.2px",
                }}
              >
                About the project
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {[details.para1, details.para2, details.para3].map(
                  (para, i) =>
                    para && (
                      <Typography
                        key={i}
                        sx={{
                          fontWeight: 400,
                          fontSize: { xs: 14.5, md: 16 },
                          color: "#444",
                          lineHeight: 1.85,
                        }}
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    )
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
