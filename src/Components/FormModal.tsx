import {
  Box,
  Stack,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  handleClose: () => void;
}

export const FormModal = ({ handleClose }: Props) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: {
          xs: "90%",
          sm: "70%",
          md: "100%",
        },
        height: {
          xs: "90%",
          sm: "70%",
          md: "100%",
        },
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
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

        <IconButton color="secondary" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Form content */}
      <Stack
        spacing={3}
        sx={{
          width: "100%",
          maxWidth: 500,
          mt: {
            xs: 5,
            sm: 0,
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 100,
            fontFamily: '"M PLUS Rounded 1c", sans-serif',
            fontSize: {
              xs: 17,
              sm: 15,
              md: 30,
            },
          }}
        >
          Hey Thanks for reaching me out how can I help you
        </Typography>
        <TextField
          variant="outlined"
          label="Name"
          color="secondary"
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Email Id"
          color="secondary"
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Message"
          color="secondary"
          multiline={true}
          rows={5}
          fullWidth
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            textTransform: "none",
          }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};
