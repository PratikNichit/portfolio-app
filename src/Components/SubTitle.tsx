import { Typography, Stack } from "@mui/material";
import MaximizeIcon from "@mui/icons-material/Maximize";

interface Props {
  title: String;
}

export const SubTitle = ({ title }: Props) => {
  return (
    <>
      <Stack
        spacing={1}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontFamily: '"M PLUS Rounded 1c", sans-serif',
            mt: 3,
            pt: 3,
            fontSize: {
              xs: 20,
              sm: 20,
              md: 30,
            },
          }}
        >
          {title}
        </Typography>
        <MaximizeIcon fontSize="large" color="secondary" />
      </Stack>
    </>
  );
};
