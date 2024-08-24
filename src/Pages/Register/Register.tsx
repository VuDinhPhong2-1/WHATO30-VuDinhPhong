import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  address?: string;
  additionalAddress?: string;
  contact?: string;
  termsAccepted?: string;
}

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [additionalAddress, setAdditionalAddress] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8 || password.length > 12) {
      newErrors.password = "Password must be 8-12 characters long";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!address) {
      newErrors.address = "Address is required";
    }

    if (!additionalAddress) {
      newErrors.additionalAddress = "Additional address is required";
    }

    if (!contact) {
      newErrors.contact = "Contact is required";
    } else if (!/^[0-9]+$/.test(contact)) {
      newErrors.contact = "Invalid contact number";
    }

    if (!termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form is valid, submit data");
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        marginTop: "120px",
        display: "flex",
        justifyContent: "center",
        marginBottom: "120px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "454px",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "45px",
            fontWeight: 800,
            color: "#0565bb",
            fontStretch: "normal",
            letterSpacing: "normal",
            textShadow: "3px 0 #0565bb",
            width: "fit-content",
          }}
        >
          JOIN US
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "2px",
            background: "#222",
            marginTop: "57px",
          }}
        />

        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <TextField
            fullWidth
            variant="outlined"
            label="아이디(이메일) *"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "inherit",
                },
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="비밀번호 *"
            type="password"
            placeholder="영문, 숫자, 특수문자를 포함한 8-12자리"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            sx={{
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "inherit",
                },
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="비밀번호 확인 *"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            sx={{
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "inherit",
                },
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="주소"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={!!errors.address}
            helperText={errors.address}
            sx={{
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "inherit",
                },
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="추가 주소"
            value={additionalAddress}
            onChange={(e) => setAdditionalAddress(e.target.value)}
            error={!!errors.additionalAddress}
            helperText={errors.additionalAddress}
            sx={{
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "inherit",
                },
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="연락처"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            error={!!errors.contact}
            helperText={errors.contact}
            sx={{
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "inherit",
                },
              },
            }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
            borderTop: "1px solid #222",
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                sx={{
                  "&.Mui-checked": {
                    color: "#333",
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              />
            }
            label="이용약관 및 개인정보 처리 방침에 동의합니다. (필수)"
            sx={{ marginBottom: "10px", color: "#333" }}
          />
          {errors.termsAccepted && (
            <Typography color="error" variant="caption">
              {errors.termsAccepted}
            </Typography>
          )}
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#333",
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              />
            }
            label="광고 및 메일 수신에 동의합니다. (선택)"
            sx={{ color: "#333" }}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            marginTop: "30px",
            padding: "12px 0",
            backgroundColor: "#0565bb",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "0",
            "&:hover": {
              backgroundColor: "#045fa7",
            },
          }}
          onClick={handleSubmit}
        >
          가입하기
        </Button>
      </Box>
    </Box>
  );
};
