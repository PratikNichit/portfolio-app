import { Stack, Typography } from "@mui/material";

export const SelfInfo = () => {
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
        I'm a Full Stack Developer mainly Fousing on building and managing Web
        ,Mobile and Windows Applications that leads to the success of the
        overall product. Check out some of my work in the Projects section.
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
        I also like sharing content related to the stuff that I have learned
        over the years in Software Development so it can help other people of
        the Dev Community. Feel free to Connect or Follow me on my Linkedin and
        Github where I am open to discussion and collaboration related to
        Software Development and Programming
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
        I'm open to Job opportunities where I can contribute, learn and grow. If
        you have a good opportunity that matches my skills and experience then
        don't hesitate to contact me.
      </Typography>
    </Stack>
  );
};
