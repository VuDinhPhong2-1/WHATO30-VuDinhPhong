import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard/ProductCard";

export const TheBestProduct = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          background: "#FCD425",
          height: "fit-content",
          paddingTop: "150px",
          alignItems: "center",
          paddingBottom: "154px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            color: "#F96400",
            fontWeight: "bold",
            textShadow: "2px 0 #f96400",
            letterSpacing: "5px",
            marginBottom: "49px",
          }}
        >
          best product
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#f96400",
            maxWidth: "555px",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            "@media (max-width: 1200px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <ProductCard
            imageSrc="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479038/EC3D61EA-E834-4B3F-8177-E375F0858919_wnrvdb.png"
            productName="How to create mobile-optimized"
            stepNumber="01"
          />
          <ProductCard
            imageSrc="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479024/0EF58EDE-6D17-4650-B318-12F9A28377E9_xbbdyh.png"
            productName="How to create mobile-optimized"
            stepNumber="02"
          />
          <ProductCard
            imageSrc="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479026/8BBB593A-B1B4-4B00-B1E0-8A5DD9493BEC_wzjfgk.png"
            productName="How to create mobile-optimized"
            stepNumber="03"
          />
        </Box>
      </Box>
    </>
  );
};
