import { Box, Typography, Button } from "@mui/material";

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  stepNumber: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  stepNumber,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        margin: "0 auto",
        "@media (max-width: 1200px)": {
          width: "100%",
          marginBottom: "30px",
        },
        "@media (max-width: 768px)": {
          maxWidth: "300px",
        },
      }}
    >
      {/* Circle of numbers */}
      <Box sx={{ position: "absolute", top: "-18px", left: "17px" }}>
        <Box
          sx={{
            width: "92px",
            height: "92px",
            backgroundImage:
              "url('https://res.cloudinary.com/dk0lhapty/image/upload/v1724479023/FBA2EE57-AD0C-45CF-9385-54693C378233_shxibx.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            "@media (max-width: 1200px)": {
              width: "60px",
              height: "60px",
            },
            "@media (max-width: 768px)": {
              width: "50px",
              height: "50px",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              fontWeight: 900,
              fontSize: "36px",
              left: "26px",
              top: "25px",
              borderBottom: "2px solid",
              paddingBottom: "0px",
              lineHeight: "1",
              textShadow: "2px 1px 2px black",
              "@media (max-width: 1200px)": {
                fontSize: "24px",
                left: "20px",
                top: "15px",
              },
              "@media (max-width: 768px)": {
                fontSize: "18px",
                left: "15px",
                top: "10px",
              },
            }}
          >
            {stepNumber}
          </Typography>
        </Box>
      </Box>
      {/* Img product */}
      <Box
        component="img"
        src={imageSrc}
        alt={productName}
        sx={{
          maxWidth: "100%",
          marginBottom: "20px",
          objectFit: "contain",
          "@media (max-width: 1200px)": {
            maxWidth: "80%",
          },
          "@media (max-width: 768px)": {
            maxWidth: "70%",
          },
        }}
      />

      {/* Description */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "369px",
          backgroundColor: "#fff",
          padding: "10px 15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "2px solid black",
          position: "absolute",
          top: "345px",
          "@media (max-width: 1200px)": {
            width: "100%",
            top: "auto",
            bottom: "20px",
            position: "static",
            flexDirection: "column",
            padding: "8px",
          },
          "@media (max-width: 768px)": {
            maxWidth: "300px",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            width: "188px",
            fontWeight: "bold",
            textShadow: "0px 1px, 1px 0px, 1px 1px",
            "@media (max-width: 1200px)": {
              width: "100%",
              textAlign: "center",
              marginBottom: "10px",
            },
            "@media (max-width: 768px)": {
              fontSize: "14px",
            },
          }}
        >
          {productName}
        </Typography>
        <Button
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            minWidth: "65px",
            height: "65px",
            borderRadius: "50%",
            fontWeight: "bold",
            fontSize: "20px",
            "@media (max-width: 1200px)": {
              minWidth: "50px",
              height: "50px",
              fontSize: "16px",
            },
            "@media (max-width: 768px)": {
              minWidth: "40px",
              height: "40px",
              fontSize: "14px",
            },
          }}
        >
          GO
        </Button>
      </Box>
    </Box>
  );
};
