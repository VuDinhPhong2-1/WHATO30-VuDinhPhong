import { Box, Typography } from "@mui/material";

export const WhatHappened = () => {
  return (
    <>
      <Box
        component={"img"}
        src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479037/E340E587-B042-4C55-B58E-B976B9539C09_fta3v6.png"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "576px",
          backgroundImage:
            "url('https://res.cloudinary.com/dk0lhapty/image/upload/v1724479030/446AA5EB-F92C-4FAC-B129-6AB3B23F284C_bmvuxo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          justifyContent: "center",
          paddingLeft: "174px",
          "@media (max-width: 999px)": {
            height: "auto",
            minHeight: "300px",
            paddingLeft: "20px",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            color: "white",
            textShadow: "3px 0 white",
            fontWeight: "bold",
            marginBottom: "20px",
            letterSpacing: "10px",
            "@media (max-width: 768px)": {
              fontSize: "1.5rem",
              letterSpacing: "5px",
            },
          }}
        >
          What Happened!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            maxWidth: "670px",
            textAlign: "start",
            lineHeight: "1.5",
            "@media (max-width: 768px)": {
              fontSize: "1rem",
              lineHeight: "1.2",
            },
          }}
        >
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand's success. How to create mobile-optimized videos in
          minutes.
        </Typography>
      </Box>
    </>
  );
};
