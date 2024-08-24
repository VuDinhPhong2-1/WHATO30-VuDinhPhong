import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NavItem = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 2, md: 6 },
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          textTransform: "uppercase",
          color: "white",
          fontSize: { xs: "12px", md: "14px" },
          cursor: "pointer",
          "&:hover": {
            color: "lightgray",
          },
        }}
      >
        Introduction
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          textTransform: "uppercase",
          color: "white",
          fontSize: { xs: "12px", md: "14px" },
          cursor: "pointer",
          "&:hover": {
            color: "lightgray",
          },
        }}
      >
        Solution
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          textTransform: "uppercase",
          color: "white",
          fontSize: { xs: "12px", md: "14px" },
          cursor: "pointer",
          "&:hover": {
            color: "lightgray",
          },
        }}
      >
        Rate plan
      </Typography>
      <Box
        sx={{
          height: "23px",
          width: "1px",
          background: "white",
          display: { xs: "none", md: "block" },
        }}
      />
      <Typography
        component={Link}
        to="/login"
        variant="subtitle2"
        sx={{
          textTransform: "uppercase",
          color: "white",
          fontSize: { xs: "12px", md: "14px" },
          cursor: "pointer",
          "&:hover": {
            color: "lightgray",
          },
          textDecoration: "none",
        }}
      >
        Login
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          textTransform: "uppercase",
          color: "white",
          fontSize: { xs: "12px", md: "14px" },
          cursor: "pointer",
          "&:hover": {
            color: "lightgray",
          },
        }}
      >
        Apply for free use
      </Typography>
    </Box>
  );
};
