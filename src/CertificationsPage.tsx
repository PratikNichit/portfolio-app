import { Box, Typography, Chip, Button } from "@mui/material";
import { SubTitle } from "./Components/SubTitle";
import VerifiedIcon from "@mui/icons-material/Verified";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import data from "./data.json";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
}

export const CertificationsPage = () => {
  const certifications: Certification[] = data.certificationsPage.certifications;

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
        title="Certifications"
        description="Verified credentials and professional achievements"
      />

      <Box
        sx={{
          mt: 5,
          width: "100%",
          maxWidth: 740,
          px: { xs: 2, sm: 3, md: 4 },
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
              gap: 2.5,
              p: { xs: 2.5, md: 3 },
              borderRadius: 3,
              border: "1px solid rgba(118, 16, 247, 0.12)",
              backgroundColor: "rgba(118, 16, 247, 0.03)",
              transition: "box-shadow 0.2s, border-color 0.2s",
              "&:hover": {
                boxShadow: "0 4px 20px rgba(118, 16, 247, 0.1)",
                borderColor: "rgba(118, 16, 247, 0.25)",
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: 2,
                backgroundColor: "rgba(118, 16, 247, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: "2px",
              }}
            >
              <VerifiedIcon sx={{ color: "#7610f7", fontSize: 24 }} />
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1 }}>
              {/* Date chip */}
              <Chip
                label={cert.date}
                size="small"
                sx={{
                  mb: 1,
                  fontSize: 11,
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

              {/* Cert name */}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 15, md: 17 },
                  color: "#111",
                  letterSpacing: "-0.2px",
                  lineHeight: 1.3,
                  mb: 0.4,
                }}
              >
                {cert.name}
              </Typography>

              {/* Issuer */}
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

              {/* Credential button */}
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
    </Box>
  );
};
