import { Stack, Typography } from "@mui/material";

interface Props {
  para1: string; 
  para2: string;
  para3: string;
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
        dangerouslySetInnerHTML={{ __html: para1 }}
      />

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
        dangerouslySetInnerHTML={{ __html: para2 }}
      />

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
        dangerouslySetInnerHTML={{ __html: para3 }}
      />
    </Stack>
  );
};
