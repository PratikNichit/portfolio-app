import { Box, Stack, IconButton, Typography, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { ContactForm } from "./ContactForm";
interface Props {
  open: boolean;
  handleClose: () => void;
}

export const FormModal = ({ handleClose, open }: Props) => {
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: "absolute",
          top: "0%",
          left: "0%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "85%",
            sm: "100%",
            md: "100%",
          },
          height: {
            xs: "90%",
            sm: "70%",
            md: "100%",
          },
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image in the top-left corner */}
        <Box
          sx={{
            position: "absolute",
            top: "5%", // Adjust spacing from the top
            left: "10%", // Adjust spacing from the left
            width: {
              xs: "80%",
              sm: "8vw",
              md: "80%",
            },
            display: "flex",
            justifyContent: "space-between",
            borderBottom: 1,
            borderColor: "#dadde7",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "20vw",
                sm: "8vw",
                md: "6vw",
              },
            }}
          >
            <img
              src="src/assets/icon.png"
              alt="icon"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>

          <IconButton
            color="secondary"
            onClick={handleClose}
            size="large"
            sx={{ borderRadius: 1 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Form content */}
        <Stack
          spacing={3}
          sx={{
            width: "100%",
            maxWidth: 500,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 100,
              fontFamily: '"M PLUS Rounded 1c", sans-serif',
              fontSize: {
                xs: 25,
                sm: 25,
                md: 30,
              },
            }}
          >
            Thanks for reaching me out how can I help you ?
          </Typography>
          <ContactForm />
        </Stack>
      </Box>
    </Slide>
  );
};
