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
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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
            src="/icon.png"
            alt="icon"
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
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                transition: "left 0.5s ease-in-out",
              },
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
              "&:hover::before": {
                left: "100%",
              },
              "&:active": {
                transform: "translateY(0px)",
              },
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
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "0%",
                height: "100%",
                backgroundColor: "secondary.main",
                transition: "width 0.3s ease-in-out",
                zIndex: 0,
              },
              "&:hover": {
                color: "white", // Changed to white for better contrast
                borderColor: "secondary.main",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
              "&:hover::before": {
                width: "100%",
              },
              "&:active": {
                transform: "translateY(0px)",
              },
              "& .MuiButton-label": {
                position: "relative",
                zIndex: 1,
              },
              // Fix for text positioning
              "& span": {
                position: "relative",
                zIndex: 1,
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
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.1) rotate(90deg)",
                color: "secondary.main",
              },
              "&:active": {
                transform: "scale(0.95) rotate(90deg)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{
              "& .MuiPaper-root": {
                borderRadius: 2,
                marginTop: 1,
                minWidth: 180,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.08)",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              onClick={() => {
                startDownload();
                handleMenuClose();
              }}
              sx={{
                position: "relative",
                overflow: "hidden",
                py: 1.5,
                px: 2,
                transition: "all 0.2s ease-in-out",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "0%",
                  height: "100%",
                  backgroundColor: "secondary.main",
                  transition: "width 0.3s ease-in-out",
                  zIndex: 0,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "0%",
                  height: "2px",
                  backgroundColor: "primary.main",
                  transition: "width 0.3s ease-in-out",
                  zIndex: 1,
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  transform: "translateX(4px)",
                  color: "white",
                },
                "&:hover::before": {
                  width: "100%",
                },
                "&:hover::after": {
                  width: "100%",
                },
                // Ensure text stays above pseudo-elements
                "& span": {
                  position: "relative",
                  zIndex: 2,
                },
              }}
            >
              Download CV
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleOpen();
                handleMenuClose();
              }}
              sx={{
                position: "relative",
                overflow: "hidden",
                py: 1.5,
                px: 2,
                transition: "all 0.2s ease-in-out",
                color: "text.primary",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "0%",
                  height: "100%",
                  backgroundColor: "primary.main", // animated bg
                  transition: "width 0.3s ease-in-out",
                  zIndex: 0,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "0%",
                  height: "2px",
                  backgroundColor: "primary.main", // underline
                  transition: "width 0.3s ease-in-out",
                  zIndex: 1,
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "common.white", // ensures text stays visible
                  transform: "translateX(4px)",
                },
                "&:hover::before": {
                  width: "100%",
                },
                "&:hover::after": {
                  width: "100%",
                },
                "& .menu-text": {
                  position: "relative",
                  zIndex: 2,
                },
              }}
            >
              <span className="menu-text">Say Hello</span>
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
