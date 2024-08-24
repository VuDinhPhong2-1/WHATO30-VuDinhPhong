import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        width: "100%",
        height: "fit-content",
        padding: {
          xs: "0 20px",
          sm: "0 50px",
          md: "0 100px",
        },
        flexDirection: "column",
        background: (theme) => theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          height: "fit-content",
          borderTop: "1px solid #e0e0e0",
          paddingTop: "50px",
          justifyContent: "space-between",
          marginBottom: "48px",
          gap: { xs: 5, md: 0 },
        }}
      >
        {/* Column 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            What happened
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body2">
              [공지] 개인정보 처리 방침 변경 사전 안내
            </Typography>
            <Typography variant="body2">
              [공지] 29CM 강남 스토어 영업 종료
            </Typography>
            <Typography variant="body2">
              [공지] 개인정보 처리 방침 변경 사전 안내
            </Typography>
            <Typography variant="body2">
              [공지] iOS 10 이하 버전 지원 중단 안내
            </Typography>
            <Typography variant="body2">
              [공지] 개인정보 처리 방침 변경 사전 안내
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 10 },
          }}
        >
          {/* Column 2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              about us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="body2">회사 소개</Typography>
              <Typography variant="body2">인재 채용</Typography>
              <Typography variant="body2">상시 할인 혜택</Typography>
            </Box>
          </Box>
          {/* Column 3 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              my order
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="body2">내 주문</Typography>
              <Typography variant="body2">주문 배송</Typography>
              <Typography variant="body2">취소 / 교환 / 반품 내역</Typography>
              <Typography variant="body2">상품 리뷰 내역</Typography>
              <Typography variant="body2">증빙 서류 발급</Typography>
            </Box>
          </Box>
          {/* Column 4 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              my account
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="body2">회원 정보 수정</Typography>
              <Typography variant="body2">회원 등급</Typography>
              <Typography variant="body2">마일리지 현황</Typography>
              <Typography variant="body2">쿠폰</Typography>
            </Box>
          </Box>
          {/* Column 5 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              help
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="body2">1:1 상담 내역</Typography>
              <Typography variant="body2">상품 Q&A 내역</Typography>
              <Typography variant="body2">공지 사항</Typography>
              <Typography variant="body2">자주하는 질문</Typography>
              <Typography variant="body2">고객의 소리</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: "1px solid #e0e0e0",
          padding: "20px 0",
          textAlign: "start",
          color: "#AAAAAB",
          paddingBottom: "80px",
          fontSize: { xs: "12px", md: "14px" },
        }}
      >
        <Typography variant="body2">
          © 2020-2021 what happened corp | (주) 왓해픈 | 대표자 : 홍길동 |
          사업자 등록번호 : 356-00-00000 | test0101@what happened.co.kr
        </Typography>
        <Typography variant="body2">
          서울특별시 강남구 도산대로 8길 17 | FAX : 070-0000-0000 | 서비스
          이용약관 | 개인정보처리방침
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
