import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import loginbg from "../../assets/loginbg.png";
import driver from "../../assets/driver.png";
import rider from "../../assets/rider.png";
import google from "../../assets/google.png";
import CommonButton from "../../components/CommonButton";
import { CustomizeInput } from "../../components/CustomizeInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";
import theme from "../../theme";
const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${loginbg})`,
          backgroundPosition: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundColor: "#373A41",
          minHeight: { md: "100vh", xs: "80vh" },
          width: "100%",
        }}
      >
        <Container maxWidth="lg" sx={{ paddingTop: "100px" }}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: { sm: "center", xs: "unset" },
              alignItems: "center",
            }}
          >
            <Grid item xs={9}>
              <Box>
                <Typography variant="h2" color="#fff">
                  Login
                </Typography>
                <Divider
                  sx={{
                    width: { sm: "15%", xs: "30%" },
                    background: "linear-gradient(to right, #F2B705, #373A41)",
                    height: "2px",

                    marginTop: "15px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  pt: "20px",
                  display: "flex",
                  flexDirection: { sm: "row", xs: "column" },
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <CommonButton
                  startIcon={
                    <img
                      src={driver}
                      alt=""
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "contain",
                      }}
                    />
                  }
                  sx={{
                    width: { sm: 200, xs: 240 },
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #F2B705",
                    padding: "5px 30px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  As a Driver
                </CommonButton>
                <CommonButton
                  startIcon={
                    <img
                      src={rider}
                      alt=""
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "contain",
                      }}
                    />
                  }
                  sx={{
                    width: { sm: 200, xs: 240 },
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #F2B705",
                    padding: "5px 30px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  As a Rider
                </CommonButton>
              </Box>
              <Box
                sx={{
                  pt: "20px",
                }}
              >
                <Typography pb={1}>Email</Typography>
                <CustomizeInput
                  placeholder="Write your email"
                  size="small"
                  sx={{ width: { sm: 420, xs: 240 } }}
                />
              </Box>
              <Box
                sx={{
                  pt: "20px",
                }}
              >
                <Typography pb={1}>Password</Typography>
                <CustomizeInput
                  placeholder="Write your password"
                  size="small"
                  sx={{ width: { sm: 420, xs: 240 } }}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={handlePasswordVisibility}
                          sx={{ color: "#F2B705" }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginLeft: { sm: "240px" },
                  pt: "10px",
                }}
              >
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle2" color="#F2B705">
                    Forgot your Password?
                  </Typography>
                </NavLink>
              </Box>
              <Box
                sx={{
                  marginTop: "20px",
                }}
              >
                <CommonButton
                  sx={{
                    width: { sm: 420, xs: 240 },
                    backgroundColor: "#F2B705",
                    color: "#fff",
                    textTransform: "none",
                  }}
                >
                  Log in{" "}
                </CommonButton>
              </Box>
              <Box
                sx={{
                  pt: "20px",
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Divider
                  sx={{
                    width: { lg: "22%", md: "25%", sm: "35%", xs: "35%" },
                    borderBottom: "2px solid #737373D4 ",
                  }}
                />
                <Typography variant="h5">Or</Typography>
                <Divider
                  sx={{
                    width: { lg: "22%", md: "26%", sm: "35%", xs: "35%" },
                    borderBottom: "2px solid #737373D4 ",
                  }}
                />
              </Box>

              <Box
                sx={{
                  pt: "20px",
                }}
              >
                <CommonButton
                  startIcon={
                    <Box
                      mr={6}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={google}
                        alt=""
                        style={{
                          width: "35px",
                          height: "35px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  }
                  sx={{
                    width: { sm: 420, xs: 240 },
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #F2B705",
                    padding: "5px 30px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Log in with Google
                </CommonButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "20px",
                  gap: "5px",
                }}
              >
                <Typography variant="subtitle2">
                  Don’t have an account?
                </Typography>
                <NavLink
                  to="/Signup"
                  style={{
                    color: "#F2B705",
                    textDecoration: "none",
                    fontFamily: theme.typography.subtitle1.fontFamily,
                    fontWeight: "bold",
                  }}
                >
                  Sign up Now
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LogIn;
