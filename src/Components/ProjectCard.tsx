import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
  title: string;
  subTitle: string;
  imageUrl: string;
  projectOverView: string;
  techUsed: TechStack[];
  gitLink: string;
  viewLink?: string;
  details: ProjectDetails;
}

export const ProjectCard = ({
  title,
  subTitle,
  imageUrl,
  projectOverView,
  techUsed,
  gitLink,
  viewLink,
  details,
}: Props) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleNavigate = () => {
    navigate(`/ProjectDetails/${encodeURIComponent(title)}`, {
      state: {
        title,
        subTitle,
        imageUrl,
        projectOverView,
        techUsed,
        gitLink,
        viewLink,
        details,
      },
    });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleExternalLink = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardClick = () => {
    handleNavigate();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNavigate();
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: (theme) => theme.shadows[12],
        },
        "&:focus-within": {
          outline: "2px solid",
          outlineColor: "primary.main",
          outlineOffset: "2px",
        },
      }}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title} project`}
    >
      <Box sx={{ position: "relative" }}>
        {!imageError ? (
          <CardMedia
            component="img"
            alt={`${title} project screenshot`}
            height="200"
            image={imageUrl}
            onError={handleImageError}
            sx={{
              objectFit: "cover",
              backgroundColor: "grey.100",
            }}
          />
        ) : (
          <Box
            sx={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "grey.100",
              color: "grey.500",
            }}
          >
            <Typography variant="body2">Image not available</Typography>
          </Box>
        )}

        {/* Quick action buttons overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 1,
            opacity: 0,
            transition: "opacity 0.2s",
            ".MuiCard-root:hover &": {
              opacity: 1,
            },
          }}
        >
          <Tooltip title="View on GitHub">
            <IconButton
              size="small"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                },
              }}
              onClick={(e) => handleExternalLink(gitLink, e)}
              aria-label={`View ${title} on GitHub`}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          {viewLink && (
            <Tooltip title="View Live Demo">
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                  },
                }}
                onClick={(e) => handleExternalLink(viewLink, e)}
                aria-label={`View ${title} live demo`}
              >
                <LaunchIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {subTitle}
        </Typography>

        {/* Tech stack chips */}
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            flexWrap: "wrap",
            gap: 0.5,
            mb: 1,
          }}
        >
          {techUsed.slice(0, 3).map((tech) => (
            <Chip
              key={tech.name}
              label={tech.name}
              size="small"
              variant="outlined"
              sx={{
                fontSize: "0.75rem",
                height: 24,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            />
          ))}
          {techUsed.length > 3 && (
            <Chip
              label={`+${techUsed.length - 3}`}
              size="small"
              variant="outlined"
              sx={{
                fontSize: "0.75rem",
                height: 24,
                color: "text.secondary",
              }}
            />
          )}
        </Stack>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          pb: 2,
        }}
      >
        <Stack direction="row" spacing={1}>
          <Tooltip title="View on GitHub">
            <IconButton
              size="small"
              onClick={(e) => handleExternalLink(gitLink, e)}
              aria-label={`View ${title} on GitHub`}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          {viewLink && (
            <Tooltip title="View Live Demo">
              <IconButton
                size="small"
                onClick={(e) => handleExternalLink(viewLink, e)}
                aria-label={`View ${title} live demo`}
              >
                <LaunchIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Stack>

        <Button
          variant="contained"
          size="small"
          startIcon={<VisibilityIcon />}
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate();
          }}
          sx={{
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
