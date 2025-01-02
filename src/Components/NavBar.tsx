import { AppBar, Toolbar, Button, Box, Modal } from "@mui/material";
import { useState } from "react";
import { FormModal } from "./FormModal";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        boxShadow: "none",
        border: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "20vw",
              sm: "15vw",
              md: "6vw",
            },
            height: "auto",
          }}
        >
          <img
            src="src/assets/icon.png"
            alt="hello"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>

        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={handleOpen}
          sx={{
            textTransform: "none",
            fontSize: {
              xs: 15,
              sm: 15,
              md: 18,
            },
            fontWeight: 600,
            borderRadius: 10,
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "primary.main",
              borderColor: "secondary.main",
            },
          }}
        >
          Say Hello
        </Button>
      </Toolbar>
      <Modal open={open} onClose={handleClose}>
        <FormModal handleClose={handleClose} />
      </Modal>
    </AppBar>
  );
};
