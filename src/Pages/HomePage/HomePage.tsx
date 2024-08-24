import { Box, Button } from "@mui/material";
import { WhatHappened } from "../../components/HomePage/WhatHappened/WhatHappened";
import { TheBestProduct } from "../../components/HomePage/TheBestProduct/TheBestProduct";
import { ProductSlider } from "../../components/HomePage/ProductSlider/ProductSlider";
import { BrandStory } from "../../components/HomePage/BrandStory/BrandStory";
import { HappenedsIssue } from "../../components/HomePage/HappenedsIssue/HappenedsIssue";
import { WhatHappenedSecond } from "../../components/HomePage/WhatHappened/WhatHappenedSecond/whatHappenedSecond";

export const HomePage = () => {
  const products = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479029/68D86CF6-99D0-4100-9159-C210D9BDD176_yi527f.png",
      title: "[What happen] How to create",
      price: "2,500 won",
      likes: 236,
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479026/63CDB0D2-DEE9-4DCD-893E-2A3FC35C23D3_paohnp.png",
      title: "[What happen] How to create",
      price: "2,500 won",
      likes: 236,
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479026/63A0AB8C-9839-4F60-9622-699EBEC3C93A_sykbnu.png",
      title: "[What happen] How to create",
      price: "2,500 won",
      likes: 236,
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479025/9E5C8EEC-72A1-4EFA-B593-100BF38D71E7_kam6ke.png",
      title: "[What happen] How to create",
      price: "2,500 won",
      likes: 236,
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479037/E5D2B9F4-DA65-43AC-BD37-0CAFA90498B7_osqawg.png",
      title: "[What happen] How to create",
      price: "2,500 won",
      likes: 236,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "fit-content",
      }}
    >
      {/* What happened component */}
      <WhatHappened />
      {/* The best product component */}
      <TheBestProduct />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          gap: 3,
          padding: {
            xs: "20px",
            sm: "40px",
            md: "60px",
            lg: "100px",
            xl: "142px",
          },
        }}
      >
        <ProductSlider products={products} />
        <ProductSlider products={products} />
        <ProductSlider products={products} />
        <ProductSlider products={products} />
        <ProductSlider products={products} />

        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 20px",
              border: "2px solid black",
              marginTop: "30px",
              width: "199px",
              height: "60px",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "16px",
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
      </Box>
      {/* Brand Story */}
      <BrandStory />
      {/* Happened's Issue */}
      <HappenedsIssue />
      {/* What Happened second */}
      <WhatHappenedSecond />
    </Box>
  );
};
