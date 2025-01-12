import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Modal,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { FormModal } from "./FormModal";
import data from "../data.json";
import MenuIcon from "@mui/icons-material/Menu"; // Material-UI's menu icon

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For Menu

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const startDownload = () => {
    const link = document.createElement("a");
    link.href = data.info.CV;
    link.download = "Pratik_CV.pdf";
    link.click();
  };

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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

        {/* For md and sm screens */}
        <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
          <Button
            variant="text"
            color="secondary"
            size="large"
            onClick={() => startDownload()}
            sx={{
              textTransform: "none",
              fontSize: {
                xs: 15,
                sm: 15,
                md: 18,
              },
              mr: 1,
              fontWeight: 500,
              borderRadius: 10,
            }}
          >
            Download CV
          </Button>
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
        </Box>

        {/* For xs screens, show the menu icon and dropdown */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{
              fontSize: "30px",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={() => {
                startDownload();
                handleMenuClose();
              }}
            >
              Download CV
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleOpen();
                handleMenuClose();
              }}
            >
              Say Hello
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Modal open={open} onClose={handleClose}>
        <FormModal open={open} handleClose={handleClose} />
      </Modal>
    </AppBar>
  );
};
