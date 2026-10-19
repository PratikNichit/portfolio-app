import { Box, Container, Grid, Typography, Chip, Button } from "@mui/material";
import { SubTitle } from "./Components/SubTitle";
import { ExperienceCard } from "./Components/ExperienceCard";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import data from "./data.json";

interface Education {
  degree: string;
  institution: string;
  score: string;
  date: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
}

export const EducationAndCertificationsPage = () => {
  const education: Education[] = data.educationPage.education;
  const certifications: Certification[] = data.certificationsPage.certifications;

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 5, md: 7 },
        backgroundColor: "#fcfcfc",
      }}
    >
      <Container maxWidth="lg">
        {/* Main Section Header */}
        <SubTitle
          title="Education & Certifications"
          description="My academic background and verified professional credentials"
        />

        {/* Two-Column Grid: Education on Left, Certifications on Right */}
        <Grid
          container
          spacing={{ xs: 5, md: 6 }}
          sx={{ mt: { xs: 2, md: 4 }, alignItems: "flex-start" }}
        >
          {/* Left Column: Education */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3.5 }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  backgroundColor: "rgba(118, 16, 247, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SchoolIcon sx={{ color: "#7610f7", fontSize: 22 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 19, md: 22 },
                  color: "#111",
                  letterSpacing: "-0.3px",
                }}
              >
                Education
              </Typography>
            </Box>

            <Box sx={{ pr: { md: 2 } }}>
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
          </Grid>

          {/* Right Column: Certifications */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3.5 }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  backgroundColor: "rgba(118, 16, 247, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WorkspacePremiumIcon sx={{ color: "#7610f7", fontSize: 22 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 19, md: 22 },
                  color: "#111",
                  letterSpacing: "-0.3px",
                }}
              >
                Certifications
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              {certifications.map((cert, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2.2,
                    p: { xs: 2.5, md: 2.8 },
                    borderRadius: 3,
                    border: "1px solid rgba(118, 16, 247, 0.12)",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                    transition: "box-shadow 0.25s ease, border-color 0.25s ease, transform 0.2s ease",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(118, 16, 247, 0.1)",
                      borderColor: "rgba(118, 16, 247, 0.3)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {/* Badge Icon */}
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      backgroundColor: "rgba(118, 16, 247, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: "2px",
                    }}
                  >
                    <WorkspacePremiumIcon sx={{ color: "#7610f7", fontSize: 24 }} />
                  </Box>

                  {/* Cert Info */}
                  <Box sx={{ flex: 1 }}>
                    <Chip
                      label={cert.date}
                      size="small"
                      sx={{
                        mb: 1.2,
                        fontSize: 11.5,
                        fontWeight: 600,
                        letterSpacing: "0.3px",
                        color: "#7610f7",
                        backgroundColor: "rgba(118, 16, 247, 0.07)",
                        border: "1px solid rgba(118, 16, 247, 0.16)",
                        borderRadius: "6px",
                        height: 24,
                        "& .MuiChip-label": { px: 1.5 },
                      }}
                    />

                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: 15.5, md: 17 },
                        color: "#111",
                        letterSpacing: "-0.2px",
                        lineHeight: 1.35,
                        mb: 0.5,
                      }}
                    >
                      {cert.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: 13, md: 14 },
                        color: "#666",
                        mb: cert.credentialUrl ? 1.5 : 0,
                      }}
                    >
                      {cert.issuer}
                    </Typography>

                    {cert.credentialUrl && (
                      <Button
                        size="small"
                        endIcon={<OpenInNewIcon sx={{ fontSize: "14px !important" }} />}
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textTransform: "none",
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: "#7610f7",
                          px: 0,
                          minWidth: 0,
                          "&:hover": {
                            background: "transparent",
                            opacity: 0.75,
                          },
                        }}
                      >
                        View Credential
                      </Button>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
