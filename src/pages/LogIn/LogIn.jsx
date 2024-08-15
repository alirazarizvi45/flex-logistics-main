import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import loginbg from "../../assets/loginbg.png";
import driver from "../../assets/driver.png";
import rider from "../../assets/rider.png";
import google from "../../assets/google.png";
import CommonButton from "../../components/CommonButton";
import { CustomizeInput } from "../../components/CustomizeInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink, useNavigate } from "react-router-dom";
import theme from "../../theme";

import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../constants/axiosInstance";
import NotificationModal from "../../components/NotificationModal";
import { useDispatch } from "react-redux";
import { addUser } from "../../ReducerSlices/user/userSlice";
import { useSocket } from "../../components/SocketContext";
const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [notificationProps, setnotificationProps] = useState({
    error: "",
    message: "",
    modal: false,
  });
  const [loading, setloading] = useState(false);
  const inputRefs = {
    email: useRef(),
    password: useRef(),
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateForm = () => {
    let isValid = true;
    let newErrors = {};
    // Email
    if (formData.email.trim() === "") {
      isValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = "Email is invalid";
    }
    //  Password
    if (formData.password.trim() === "") {
      isValid = false;
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      isValid = false;
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);
    return isValid;
  };
  const focusOnErrorField = () => {
    for (const fieldName in errors) {
      if (errors[fieldName] && inputRefs[fieldName]?.current) {
        inputRefs[fieldName].current.focus();
        break;
      }
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      focusOnErrorField();
    }
  }, [errors]);
  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleUserRoleSelection = (role) => {
    console.log("Selected role:", role);
    setUserRole(role);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { connectSocket } = useSocket();

  const handleSubmit = async () => {
    try {
      if (!validateForm()) {
        return;
      }
      setloading(true);
      if (!userRole) {
        toast.error("Please select your role.");
        return;
      }
      const res = await axiosInstance.post("login", {
        ...formData,
        role: userRole,
      });
      const { success, message, user } = res.data;
      if (success) {
        dispatch(addUser(user));
        const userId = user?.id;
        toast.success(message);
        connectSocket(userRole, userId);
        console.log(`user role is  ${userRole} and user id is ${userId}`);
        if (userRole === "driver") {
          navigate("/Dashboard/Home");
        } else if (userRole === "rider") {
          navigate("/Rider/BookRide");
        }
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log("Error submitting form", error);
      if (error.response) {
        console.log("Error response:", error.response.data);
        toast.error(
          error.response.data.message || "An error occurred while logging in"
        );
      } else {
        toast.error("An error occurred while logging in");
      }
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      {notificationProps?.modal && (
        <NotificationModal
          notificationProps={notificationProps}
          setnotificationProps={setnotificationProps}
        />
      )}
      <Box
        sx={{
          backgroundImage: `url(${loginbg})`,
          backgroundPosition: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: { md: "100% 100%", xs: "100% 50%" },
          backgroundColor: "#373A41",
          minHeight: "100vh",
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
              <Typography variant="subtitle2" fontWeight="bold" pt={5}>
                Please select your role
              </Typography>
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
                    color: userRole === "driver" ? "#F2B705" : "#fff",
                    border:
                      userRole === "driver"
                        ? "3px solid #F2B705"
                        : "1px solid #F2B705",
                    padding: "5px 30px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleUserRoleSelection("driver")}
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
                    color: userRole === "rider" ? "#F2B705" : "#fff",
                    border:
                      userRole === "rider"
                        ? "3px solid #F2B705"
                        : "1px solid #F2B705",
                    padding: "5px 30px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleUserRoleSelection("rider")}
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
                  name="email"
                  inputRef={inputRefs.email}
                  error={!!errors.email}
                  helperText={errors.email}
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  inputRef={inputRefs.password}
                  error={!!errors.password}
                  helperText={errors.password}
                  value={formData.password}
                  onChange={handleChange}
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
                <NavLink
                  to="/ForgetPassword"
                  style={{ textDecoration: "none" }}
                >
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
                  type="submit"
                  onClick={handleSubmit}
                  loading={loading}
                >
                  Login{" "}
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
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: { md: "20px", xs: "5px" },
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
                  flexDirection: { sm: "row", xs: "column" },
                  marginTop: "20px",
                  gap: "8px",
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
