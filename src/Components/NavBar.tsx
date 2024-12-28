import { AppBar, Toolbar, Button, Box } from "@mui/material";

export const NavBar = () => {
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
    </AppBar>
  );
};
