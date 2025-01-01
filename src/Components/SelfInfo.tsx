import { Stack, Typography } from "@mui/material";

interface Props {
  para1: String;
  para2: String;
  para3: String;
}
export const SelfInfo = ({ para1, para2, para3 }: Props) => {
  return (
    <Stack spacing={2}>
      <Typography
        variant="body1"
        sx={{
          textAlign: "left",
          fontWeight: 400,
          lineHeight: 1.6,
          fontSize: {
            xs: 17,
            sm: 15,
            md: 18,
          },
        }}
      >
        {para1}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "left",
          fontWeight: 400,
          lineHeight: 1.6,
          fontSize: {
            xs: 17,
            sm: 15,
            md: 18,
          },
        }}
      >
        {para2}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "left",
          fontWeight: 400,
          lineHeight: 1.6,
          fontSize: {
            xs: 17,
            sm: 15,
            md: 18,
          },
        }}
      >
        {para3}
      </Typography>
    </Stack>
  );
};
