import { Box, Button } from "@mui/material";
import { ExperienceCard } from "./Components/ExperienceCard";
import { SubTitle } from "./Components/SubTitle";
import DownloadingIcon from "@mui/icons-material/Downloading";
import data from "./data.json";

interface Job {
  role: string;
  companyName: string;
  date: string;
  description: string;
}

export const ExperiencePage = () => {
  const jobs: Job[] = data.experiencePage.jobs;

  const startDownload = () => {
    const link = document.createElement("a");
    link.href = data.info.CV;
    link.download = "Pratik_CV.pdf";
    link.click();
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: { xs: 4, md: 6 },
        boxSizing: "border-box",
      }}
    >
      <SubTitle
        title="Work Experience"
        description="Here you find out more about my work experiences"
      />
      <Box sx={{ mt: { xs: 3, md: 5 } }} />
      <Box
        sx={{
          width: "100%",
          maxWidth: 900,
          px: { xs: 2, sm: 3, md: 4 },
          boxSizing: "border-box",
        }}
      >
        {jobs.map((job, index) => (
          <ExperienceCard
            key={index}
            role={job.role}
            companyName={job.companyName}
            date={job.date}
            discription={job.description}
            isLast={index === jobs.length - 1}
          />
        ))}
      </Box>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        startIcon={<DownloadingIcon />}
        sx={{
          borderRadius: 8,
          textTransform: "none",
          fontSize: {
            xs: 16,
            sm: 18,
            md: 18,
          },
          padding: {
            xs: "10px 20px",
            sm: "12px 28px",
            md: "15px 20px",
          },
          minWidth: 200,
          mt: 5,
        }}
        onClick={startDownload}
      >
        Download CV
      </Button>
    </Box>
  );
};
