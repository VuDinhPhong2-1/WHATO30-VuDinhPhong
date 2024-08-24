import { useState, MouseEvent, KeyboardEvent } from "react";
import { Box, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavItem } from "./NavItem/NavItem";
import { Link } from "react-router-dom";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <header>
      <Box
        sx={{
          display: "flex",
          background: (theme) => theme.demo.headerBackground,
          height: (theme) => theme.demo.headerHeight,
          alignItems: "center",
          justifyContent: "space-between",
          padding: {
            xs: "0 20px",
            sm: "0 40px",
            md: "0 60px",
            lg: "0 97px",
          },
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479024/logo_hzj9r7.svg"
            sx={{
              width: { xs: "150px", md: "226px" },
              height: "26px",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          <NavItem />
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: 250,
              backgroundColor: (theme) => theme.demo.headerBackground,
            },
          }}
        >
          <Box
            sx={{
              width: 250,
              padding: 2,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <NavItem />
          </Box>
        </Drawer>
      </Box>
    </header>
  );
};

export default Header;
