import { Box, Typography, Chip } from "@mui/material";

interface Props {
  role: string;
  companyName: string;
  date: string;
  discription: string;
  isLast?: boolean;
}

export const ExperienceCard = ({
  role,
  companyName,
  date,
  discription,
  isLast = false,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: { xs: 1.5, sm: 2, md: 3 },
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Timeline Column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          pt: "4px",
        }}
      >
        {/* Dot */}
        <Box
          sx={{
            width: { xs: 14, sm: 16 },
            height: { xs: 14, sm: 16 },
            borderRadius: "50%",
            backgroundColor: "#7610f7",
            border: "3.5px solid rgba(118, 16, 247, 0.18)",
            flexShrink: 0,
            mt: "4px",
            zIndex: 1,
          }}
        />
        {/* Connector line */}
        {!isLast && (
          <Box
            sx={{
              width: "1.5px",
              flex: 1,
              minHeight: 40,
              background:
                "linear-gradient(to bottom, rgba(118,16,247,0.35), rgba(118,16,247,0.04))",
              mt: "6px",
            }}
          />
        )}
      </Box>

      {/* Content */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          pb: isLast ? 0 : { xs: 3.5, md: 5 },
        }}
      >
        {/* Content card */}
        <Box
          sx={{
            p: { xs: 2, sm: 2.25, md: 2.5 },
            borderRadius: 2.5,
            border: "1px solid rgba(0, 0, 0, 0.05)",
            backgroundColor: "#fafafa",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              borderColor: "rgba(118, 16, 247, 0.15)",
              boxShadow: "0 2px 12px rgba(118, 16, 247, 0.06)",
            },
          }}
        >
          {/* Date chip */}
          <Chip
            label={date}
            size="small"
            sx={{
              mb: 1.5,
              fontSize: { xs: 11.5, sm: 12.5 },
              fontWeight: 600,
              letterSpacing: "0.3px",
              color: "#7610f7",
              backgroundColor: "rgba(118, 16, 247, 0.07)",
              border: "1px solid rgba(118, 16, 247, 0.16)",
              borderRadius: "6px",
              height: 26,
              maxWidth: "100%",
              "& .MuiChip-label": { px: 1.2 },
            }}
          />

          {/* Role */}
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: 16.5, sm: 19, md: 23 },
              lineHeight: 1.3,
              color: "#111",
              letterSpacing: "-0.4px",
              mb: 0.6,
              wordBreak: "break-word",
            }}
          >
            {role}
          </Typography>

          {/* Company */}
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: 13.5, sm: 14.5, md: 16 },
              color: "#666",
              mb: discription ? 1.5 : 0,
              letterSpacing: "0.1px",
              wordBreak: "break-word",
            }}
          >
            {companyName}
          </Typography>

          {/* Description */}
          {discription && (
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: 13.5, sm: 14.5, md: 16 },
                color: "#444",
                lineHeight: 1.8,
                wordBreak: "break-word",
              }}
            >
              {discription}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
