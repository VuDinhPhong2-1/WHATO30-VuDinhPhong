import { Box, Button, Typography } from "@mui/material";

export const HappenedsIssue = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#fccb05",
        height: "fit-content",
        alignItems: "center",
        width: "100%",
        position: "relative",
        paddingBottom: "100px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          textShadow: "0px 1px, 1px 0px, 1px 1px",
          letterSpacing: "3px",
          marginTop: { xs: "20px", sm: "40px", md: "60px", lg: "80px" },
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
        }}
      >
        Happened’s issue
      </Typography>
      <Typography
        sx={{
          width: { xs: "100%", sm: "540px", md: "600px", lg: "720px" },
          marginTop: { xs: "20px", sm: "30px", md: "35px", lg: "45px" },
          fontSize: {
            xs: "0.875rem",
            sm: "1rem",
            md: "1.125rem",
            lg: "1.25rem",
          },
          textAlign: "center",
        }}
      >
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: { xs: "30px", sm: "35px", md: "40px", lg: "45px" },
          marginBottom: { xs: "30px", sm: "35px", md: "40px", lg: "45px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: "8px 16px", sm: "10px 20px" },
            border: "4px solid black",
            width: { xs: "150px", sm: "199px" },
            height: "fit-content",
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
      {/* List Brand */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "stretch",
        }}
      >
        {/* Column 1 */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            position: "relative",
          }}
        >
          <Box
            component={"img"}
            src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479030/867D422D-3748-4562-AF31-428CDC4C8A9E_lbwvjj.png"
            height={"auto"}
            width={"103px"}
            position={"absolute"}
            bottom={"-43px"}
            right={"-18px"}
            zIndex={2}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          />
          <Box
            sx={{
              display: "flex",
              background: "#ff5500",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              height: "100%",
              borderTop: "3px solid",
              borderBottom: "3px solid",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textShadow: "0px 1px, 1px 0px, 1px 1px",
                width: "fit-content",
                marginTop: { xs: "0", sm: "40px", md: "50px" },
                textTransform: "uppercase",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
              }}
            >
              whpn
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textShadow: "0px 1px, 1px 0px, 1px 1px",
                width: "fit-content",
                textTransform: "uppercase",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
              }}
            >
              issue
            </Typography>
            <Box
              component={"img"}
              alt="Whpn issue"
              src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479038/EBB98BFE-A9A5-4D3A-A59D-EEBBE5A81C9A_ldqnyw.png"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: { xs: "30px", sm: "60px", md: "100px", lg: "160px" },
                objectFit: "contain",
                marginTop: { xs: "10px", sm: "20px", md: "30px", lg: "63px" },
              }}
            />
          </Box>
        </Box>
        {/* Column 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            position: "relative",
            height: "100%",
            borderTop: "3px solid",
            boxSizing: "border-box",
          }}
        >
          <Box
            component={"img"}
            src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479025/5B11EEB8-FE1A-47F9-A218-CA3266CAE6E4_r2caje.png"
            height={"auto"}
            position={"absolute"}
            top={"-26px"}
            left={"18px"}
            zIndex={2}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              width: { md: "66px", lg: "99px" },
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textShadow: "0px 1px, 1px 0px, 1px 1px",
              color: "white",
              height: { xs: "40px", sm: "45px", md: "50px" },
              alignContent: "center",
              textAlign: "center",
              backgroundColor: "#110e03",
              width: "100%",
              fontSize: { xs: "10px", sm: "15px", md: "20px" },
            }}
          >
            B BRAND
          </Typography>
          <Box
            component={"img"}
            alt="Whpn issue"
            src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479033/20285FD4-DF93-4E30-8471-6CD6A3D6E863_s5cxmy.png"
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        {/* Column 3 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            position: "relative",
            height: "100%",
            borderTop: "3px solid",
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textShadow: "0px 1px, 1px 0px, 1px 1px",
              color: "white",
              height: { xs: "40px", sm: "45px", md: "50px" },
              alignContent: "center",
              textAlign: "center",
              backgroundColor: "#110e03",
              width: "100%",
              fontSize: { xs: "10px", sm: "15px", md: "20px" },
            }}
          >
            B BRAND
          </Typography>
          <Box
            component={"img"}
            alt="Whpn issue"
            src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479033/20285FD4-DF93-4E30-8471-6CD6A3D6E863_s5cxmy.png"
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        {/* Column 4 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            position: "relative",
            height: "100%",
            borderTop: "3px solid",
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textShadow: "0px 1px, 1px 0px, 1px 1px",
              color: "white",
              height: { xs: "40px", sm: "45px", md: "50px" },
              alignContent: "center",
              textAlign: "center",
              backgroundColor: "#ff5500",
              width: "100%",
              fontSize: { xs: "10px", sm: "15px", md: "20px" },
            }}
          >
            B BRAND
          </Typography>
          <Box
            component={"img"}
            alt="Whpn issue"
            src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479026/7CAE3E60-F50E-4CFA-8BE0-191788F4D29F_pordr8.png"
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        {/* Column 5 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            position: "relative",
            height: "100%",
            borderTop: "3px solid",
            boxSizing: "border-box",
          }}
        >
          <Box
            component={"img"}
            src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479026/068B87AF-C810-43C4-BF19-55E1025C2DF2_guscyy.png"
            height={"auto"}
            position={"absolute"}
            bottom={"-26px"}
            left={"-51px"}
            zIndex={2}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              width: { md: "66px", lg: "99px" },
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textShadow: "0px 1px, 1px 0px, 1px 1px",
              color: "white",
              height: { xs: "40px", sm: "45px", md: "50px" },
              alignContent: "center",
              textAlign: "center",
              backgroundColor: "#110e03",
              width: "100%",
              fontSize: { xs: "10px", sm: "15px", md: "20px" },
            }}
          >
            B BRAND
          </Typography>
          <Box
            component={"img"}
            alt="Whpn issue"
            src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479024/3FDD3FA9-27DD-44EC-BB4A-D05B41514705_hs9whj.png"
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
      <Box
        component={"img"}
        src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479038/E44719DC-5AE8-4207-A72C-1B4239B3729F-optimized_jzo21i.png"
        height={"auto"}
        width={"80px"}
        position={"absolute"}
        top={"20px"}
        right={"60px"}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      />
      <Box
        component={"img"}
        src="https://res.cloudinary.com/dk0lhapty/image/upload/v1724479023/F4CEDAC3-14D6-4103-AA07-35A54F04CCD6_j5i6eq.png"
        height={"auto"}
        width={"90px"}
        position={"absolute"}
        top={"120px"}
        right={"60px"}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      />
    </Box>
  );
};
