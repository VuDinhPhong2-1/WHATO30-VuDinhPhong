import React from "react";
import Slider from "react-slick";
import { Box, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductSliderProps {
  products: {
    id: number;
    image: string;
    title: string;
    price: string;
    likes: number;
  }[];
}

export const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            maxWidth: "95%",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", textAlign: "start" }}
          >
            {product.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {product.price}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
              <Typography variant="body2">{product.likes}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};
