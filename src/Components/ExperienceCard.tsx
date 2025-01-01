import { Container, Stack, Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Props {
  role: string;
  companyName: string;
  date: string;
  discription: string;
}

export const ExperienceCard = ({
  role,
  companyName,
  date,
  discription,
}: Props) => {
  return (
    <Container>
      <Stack direction={"row"} sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckCircleIcon fontSize="large" color="secondary" />
          <Box
            sx={{ width: "2px", height: "100%", backgroundColor: "#000" }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            border: 0,
            display: "flex",
            mt: 4,
          }}
        >
          <Box sx={{ p: 2 }}>
            <Stack>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mb: 2,
                  fontSize: {
                    xs: 16,
                    sm: 20,
                    md: 23,
                  },
                }}
              >
                {role}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  fontSize: {
                    xs: 14,
                    sm: 20,
                    md: 17,
                  },
                  lineHeight: 0,
                }}
              >
                {companyName}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  fontSize: {
                    xs: 14,
                    sm: 20,
                    md: 14,
                  },
                  lineHeight: 1,
                }}
              >
                {date}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  fontSize: {
                    xs: 12,
                    sm: 20,
                    md: 18,
                  },
                  lineHeight: 1.5,
                }}
              >
                {discription}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};
