import { Box, Button, Typography } from "@mui/material";

export const BrandStory = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        background: "#0565bb",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: { xs: "40px 20px", sm: "60px 40px", md: "80px 100px" },
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "#fcd32a",
          fontWeight: "bold",
          textShadow: "0px 1px, 1px 0px, 1px 1px",
          textTransform: "uppercase",
          letterSpacing: "5px",
          width: "fit-content",
          marginBottom: { xs: "20px", sm: "30px", md: "40px" },
          marginTop: { xs: "20px", sm: "30px", md: "40px" },
          textAlign: "center", // Căn giữa văn bản
        }}
      >
        Brand Story
      </Typography>
      {/* Description */}
      <Typography
        sx={{
          color: "#fcd32a",
          width: { xs: "100%", sm: "80%", md: "600px" },
          textAlign: "center", // Căn giữa văn bản
          marginBottom: { xs: "20px", sm: "30px", md: "40px" },
        }}
      >
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </Typography>
      {/* Img and What Happen */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          paddingTop: { xs: "40px", sm: "50px", md: "70px" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%", lg: "37%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            zIndex: "100",
            marginBottom: { xs: "20px", sm: "30px", md: "0" }, // Căn giữa hình ảnh khi ở kích thước nhỏ
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479037/E35A6509-2D59-42A3-B288-8C7FAEBD1640_ueoiq5.png"
            alt="Collaboration"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%", lg: "37%" },
            backgroundColor: "white",
            padding: { xs: "20px", sm: "32px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            border: "4px solid",
            zIndex: "100",
            textAlign: "center", // Căn giữa văn bản trong box này
          }}
        >
          <Typography
            gutterBottom
            sx={{
              fontWeight: "900",
              marginBottom: { xs: "10px", sm: "15px", md: "20px" },
              fontSize: { xs: "12px", sm: "15px", md: "20px" },
              textAlign: "center", // Căn giữa văn bản
            }}
          >
            WHAT HAPPENED'S BRAND STORY
          </Typography>

          <Typography
            sx={{
              marginBottom: { xs: "10px", sm: "15px", md: "20px" },
              fontSize: { xs: "10px", sm: "12px", md: "15px" },
              textAlign: "center", // Căn giữa văn bản
            }}
          >
            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무얼 풀이
            옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며,
            듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는 이상
            할지라도 피다. 피다. 못할 것은 목숨을 수 그들을 아름답고 고행을 끝에
            설산에서 황금시대를 이상을 운다.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Căn giữa nút bấm
              alignItems: "center",
              padding: "10px 20px",
              border: "4px solid black",
              marginTop: { xs: "20px", sm: "25px", md: "30px" },
              width: "199px",
              height: "fit-content",
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
      {/* Img position */}
      <Box
        component={"img"}
        src={
          "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479026/62DF2781-ED3F-4251-950D-9D624288DA79_scz7mr.png"
        }
        sx={{
          position: "absolute",
          top: { lg: "16px", md: "12px" },
          right: { lg: "245px", md: "180px" },
          width: { lg: "137px", md: "110px" },
          height: { lg: "127px", md: "102px" },
          zIndex: 1,
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={
          "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479029/98F1AA7B-19D3-49DD-B8C2-B79EEC9F62F8_u0aq5g.png"
        }
        sx={{
          position: "absolute",
          top: { lg: "48px", md: "36px" },
          right: { lg: "166px", md: "130px" },
          width: { lg: "138px", md: "100px" },
          height: { lg: "165px", md: "120px" },
          zIndex: 2,
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={
          "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479034/CA35B39C-3D17-4386-B246-24E463C2D699_xkfj0n.png"
        }
        sx={{
          position: "absolute",
          top: { lg: "128px", md: "100px" },
          right: { lg: "-79px", md: "-50px" },
          width: { lg: "258px", md: "200px" },
          height: { lg: "427px", md: "300px" },
          zIndex: 1,
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={
          "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479029/75EC16CD-FEAF-417A-A6DD-F920767FC339_nmr37o.png"
        }
        sx={{
          position: "absolute",
          top: { lg: "503px", md: "400px" },
          right: { lg: "-28px", md: "-20px" },
          width: { lg: "357px", md: "250px" },
          height: { lg: "233px", md: "180px" },
          zIndex: 2,
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={
          "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479033/A2652254-733C-4E77-9F8D-1962C03BB963_p73p32.png"
        }
        sx={{
          position: "absolute",
          top: { lg: "146px", md: "120px" },
          left: { lg: "166px", md: "130px" },
          width: { lg: "183px", md: "140px" },
          height: { lg: "208px", md: "150px" },
          zIndex: 2,
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={
          "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479033/C7C19B1C-C6B3-48F2-8950-319D982DD4E5_i4bsuy.png"
        }
        sx={{
          position: "absolute",
          top: { lg: "400px", md: "320px" },
          left: { lg: "0px", md: "10px" },
          width: { lg: "179px", md: "140px" },
          height: { lg: "318px", md: "220px" },
          zIndex: 2,
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
      <Box
        component={"img"}
        src={
          "https://res.cloudinary.com/dk0lhapty/image/upload/v1724479024/04AF4237-E7D1-433C-B5F3-1AEFF370BA25_ya74zh.png"
        }
        sx={{
          position: "absolute",
          top: { lg: "457px", md: "350px" },
          left: { lg: "177px", md: "130px" },
          width: { lg: "180px", md: "140px" },
          height: { lg: "255px", md: "190px" },
          zIndex: 2,
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
    </Box>
  );
};
