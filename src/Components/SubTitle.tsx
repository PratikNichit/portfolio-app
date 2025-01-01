import { Typography, Stack } from "@mui/material";
import { LineIcon } from "./LineIcon";

interface Props {
  title: String;
  description: String;
}

export const SubTitle = ({ title, description }: Props) => {
  return (
    <>
      <Stack
        spacing={2}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mt: 3,
            pt: 3,
            fontSize: {
              xs: 25,
              sm: 25,
              md: 40,
            },
          }}
        >
          {title}
        </Typography>
        <LineIcon />
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: {
              xs: 17,
              sm: 15,
              md: 20,
            },
          }}
        >
          {description}
        </Typography>
      </Stack>
    </>
  );
};
