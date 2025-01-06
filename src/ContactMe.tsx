import {
  Container,
  Typography,
  Button,
  Stack,
  Modal,
  Box,
} from "@mui/material";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { FormModal } from "./Components/FormModal";
import { useState } from "react";

export const ContactMe = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ mt: 8 }}>
      <Container sx={{ mt: 5 }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 5,
          }}
          spacing={3}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              mt: 3,
              fontSize: {
                xs: 25,
                sm: 25,
                md: 30,
              },
            }}
          >
            Interested in collaborating with me?
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 500,
              mt: 3,
              fontSize: {
                xs: 15,
                sm: 20,
                md: 20,
              },
            }}
          >
            Feel free to Contact me I will get back to ou as soon as possible
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            startIcon={<MessageOutlinedIcon />}
            sx={{
              borderRadius: 8,
              textTransform: "none",
              fontSize: {
                xs: 16,
                sm: 18,
                md: 16,
              },
              padding: {
                xs: "10px 20px",
                sm: "12px 28px",
                md: "15px 20px",
              },
              minWidth: 200,
            }}
            onClick={handleOpen}
          >
            Start a conversation
          </Button>
          <Modal open={open} onClose={handleClose}>
            <FormModal open={open} handleClose={handleClose} />
          </Modal>
        </Stack>
      </Container>
    </Box>
  );
};
