import { Box } from "@mui/material";
import { SubTitle } from "./Components/SubTitle";
import { ExperienceCard } from "./Components/ExperienceCard";
import data from "./data.json";

interface Education {
  degree: string;
  institution: string;
  score: string;
  date: string;
}

export const EducationPage = () => {
  const education: Education[] = data.educationPage.education;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 5,
        mt: 5,
      }}
    >
      <SubTitle
        title="Education"
        description="My academic background and qualifications"
      />
      <Box sx={{ mt: 5, width: "100%", maxWidth: 740, px: { xs: 2, sm: 3, md: 4 } }}>
        {education.map((edu, index) => (
          <ExperienceCard
            key={index}
            role={edu.degree}
            companyName={`${edu.institution}  ·  ${edu.score}`}
            date={edu.date}
            discription=""
            isLast={index === education.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};
