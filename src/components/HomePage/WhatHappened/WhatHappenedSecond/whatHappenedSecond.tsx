import { Box, Button, Typography } from "@mui/material";

export const WhatHappenedSecond = () => {
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "70px",
        background: "white",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: { md: "300px", xs: "100px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
          textShadow: "0px 1px, 1px 0px, 1px 1px",
          fontWeight: "bold",
          letterSpacing: "3px",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
        }}
      >
        what happened
      </Typography>

      <Typography
        sx={{
          width: { xs: "90%", sm: "560px" },
          marginTop: { xs: "20px", sm: "45px" },
          textAlign: "center",
          fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
        }}
      >
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </Typography>

      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: "8px 16px", sm: "10px 20px" },
            border: "2px solid black",
            marginTop: { xs: "20px", sm: "30px" },
            width: { xs: "150px", sm: "199px" },
            height: { xs: "50px", sm: "60px" },
          }}
        >
          <Button
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "16px" },
              color: "black",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            See More
          </Button>
        </Box>
      </Box>

      <Box
        component={"img"}
        src={"https://res.cloudinary.com/dk0lhapty/image/upload/v1724479030/511A532A-CB29-476A-A26C-4182F8CD30C9_dttjpr.png"}
        sx={{
          marginTop: "45px",
          width: {
            xl: "60%",
            lg: "60%",
            md: "50%",
            sm: "100%",
            xs: "100%",
          },
          zIndex: 1000,
          position: "relative",
        }}
      />

      <Box
        component={"img"}
        src={"https://res.cloudinary.com/dk0lhapty/image/upload/v1724479036/D218FF5C-DC5D-4D42-86A2-6044F9350C4A_w5ei6s.png"}
        sx={{
          position: "absolute",
          width: "146px",
          height: "auto",
          top: "0px",
          left: "145px",
          display: { xs: "none", md: "block" },
        }}
      />

      <Box
        component={"img"}
        src={"https://res.cloudinary.com/dk0lhapty/image/upload/v1724479025/6A14E8AD-E7D8-46EC-89FA-85DD241E50DC_hvxhee.png"}
        sx={{
          position: "absolute",
          width: "126px",
          height: "auto",
          top: "100px",
          right: "105px",
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={"https://res.cloudinary.com/dk0lhapty/image/upload/v1724479025/9A86D1DC-D62D-448E-912A-84C4C54A1DCA_sti6xk.svg"}
        sx={{
          position: "absolute",
          width: "126px",
          height: "auto",
          top: "201px",
          right: "173px",
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={"https://res.cloudinary.com/dk0lhapty/image/upload/v1724479034/D18F275E-1BFD-4DCC-8DBA-0F5A9F0F174D_t8iaz0.svg"}
        sx={{
          position: "absolute",
          width: "255px",
          height: "auto",
          top: "435px",
          right: "-126px",
          zIndex: 1,
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={"https://res.cloudinary.com/dk0lhapty/image/upload/v1724479030/296E3214-A8CC-46C3-991F-6C47B80EAFB6_eapqcf.png"}
        sx={{
          position: "absolute",
          width: { lg: "496px", md: "396px" },
          display: { xs: "none", md: "block" },
          height: "auto",
          top: "642px",
          right: "-92px",
          zIndex: 1,
        }}
      />
      <Box
        component={"img"}
        src={"https://res.cloudinary.com/dk0lhapty/image/upload/v1724479026/9B820F28-DBF1-47D7-95CF-82F5FDB01EAE_mdypnu.png"}
        sx={{
          position: "absolute",
          width: "463px",
          height: "auto",
          top: "218px",
          left: "-256px",
          zIndex: 1,
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={"https://res.cloudinary.com/dk0lhapty/image/upload/v1724479032/2852C0B3-9BB4-4483-B72B-FFC51129147F-optimized_onm2mg.png"}
        sx={{
          position: "absolute",
          width: "146px",
          height: "auto",
          bottom: "422px",
          left: "212px",
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={"https://res.cloudinary.com/dk0lhapty/image/upload/v1724479024/0EBF10B4-A77D-44CF-AE24-B48E110C3E11_lhhia0.png"}
        sx={{
          position: "absolute",
          width: "311px",
          height: "auto",
          bottom: "311px",
          left: "328px",
          display: { xs: "none", md: "block" },
        }}
      />
    </Box>
  );
};
