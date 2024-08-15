import React, { useRef, useState, useEffect } from "react";

import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { CustomizeTelInput } from "../../components/CustomizeTelInput";
import CommonButton from "../../components/CommonButton";
import google from "../../assets/google.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import theme from "../../theme";
import { CustomizeInput } from "../../components/CustomizeInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../constants/axiosInstance";
import NotificationModal from "../../components/NotificationModal";

const RiderSignUpThree = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const role = path === "/RiderSignUp" ? "rider" : " driver";
  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [formData, setFormData] = useState({
    telephone: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: role,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
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
    firstName: useRef(),
    lastName: useRef(),
    telephone: useRef(),
    email: useRef(),
    password: useRef(),
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleTelInputChange = (value) => {
    setFormData((prevFormData) => ({ ...prevFormData, telephone: value }));
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    // First Name
    if (formData.firstName.trim() === "") {
      isValid = false;
      newErrors.firstName = "First name is required";
    }

    // Last Name
    if (formData.lastName.trim() === "") {
      isValid = false;
      newErrors.lastName = "Last name is required";
    }
    // Telephone
    if (formData.telephone.trim() === "") {
      isValid = false;
      newErrors.telephone = "Telephone is required";
    }

    // Email
    if (formData.email.trim() === "") {
      isValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = "Email is invalid";
    }

    // New Password
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
      if (errors[fieldName]) {
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
  const handleSubmit = async () => {
    try {
      if (!validateForm()) {
        return;
      }
      setloading(true);
      const response = await axiosInstance.post("/rider-signup", formData);
      const { success, message } = response.data;
      if (success) {
        setFormData({
          userName: "",
          email: "",
          password: "",
          telephone: "",
          role: role,
        });
        setErrors({
          userName: "",
          email: "",
          password: "",
          telephone: "",
        });
        toast.success(message);
        navigate("/Login");
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setnotificationProps({
        modal: true,
        error: true,
        message: "An error occurred while submitting the form.",
      });
      if (error.response && error.response.data) {
        const { message } = error.response.data;
        toast.error(message);
      }
    } finally {
      setloading(false);
    }
  };
  return (
    <>
      <ToastContainer />
      <NotificationModal
        notificationProps={notificationProps}
        setnotificationProps={setnotificationProps}
      />
      <Box
        sx={{
          padding: "20px 40px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="#fff">
            Sign up
          </Typography>
          <Divider
            sx={{
              width: { sm: "20%", xs: "30%" },
              background: "linear-gradient(to right, #F2B705, #373A41)",
              height: "2px",
              margin: "15px auto",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography>First Name</Typography>
          <CustomizeInput
            placeholder="Your first name"
            name="firstName"
            inputRef={inputRefs.firstName}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography>Last Name</Typography>
          <CustomizeInput
            placeholder="Your last name"
            name="lastName"
            inputRef={inputRefs.lastName}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Typography>Email</Typography>
          <CustomizeInput
            placeholder="abcd@gmail.com"
            name="email"
            inputRef={inputRefs.email}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{
            pt: "20px",
          }}
        >
          <Typography pb={1}>Password</Typography>
          <CustomizeInput
            fullWidth
            placeholder="Write your password"
            name="password"
            inputRef={inputRefs.password}
            error={!!errors.password}
            helperText={errors.password}
            value={formData.password}
            onChange={handleInputChange}
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
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingTop: "20px",
          }}
        >
          <Typography variant="subtitle2">Phone Number</Typography>
          <CustomizeTelInput
            placeholder="Telephone"
            name="telephone"
            inputRef={inputRefs.telephone}
            error={!!errors.telephone}
            helperText={errors.telephone}
            value={formData.telephone}
            onChange={handleTelInputChange}
            defaultCountry="KE"
            MenuProps={{
              sx: {
                ".MuiTypography-root": {
                  color: "#1E1D1D !important",
                  fontWeight: "bold",
                },
              },
            }}
            textAlign="center"
          />
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <CommonButton
            fullWidth
            type="submit"
            onClick={handleSubmit}
            loading={loading}
          >
            Continue
          </CommonButton>
        </Box>

        <Box
          sx={{
            pt: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Divider
            sx={{
              width: { sm: "46%", xs: "43%" },
              borderBottom: "2px solid #737373D4 ",
            }}
          />
          <Typography variant="h5">Or</Typography>
          <Divider
            sx={{
              width: { sm: "46%", xs: "44%" },
              borderBottom: "2px solid #737373D4 ",
            }}
          />
        </Box>
        <Box sx={{ pt: "20px" }}>
          <CommonButton
            fullWidth
            startIcon={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: { md: "20px", xs: "0px" },
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
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            gap: "8px",
          }}
        >
          <Typography variant="subtitle2">Already have an account?</Typography>
          <NavLink
            to="/Login"
            style={{
              color: "#F2B705",
              textDecoration: "none",
              fontFamily: theme.typography.subtitle1.fontFamily,
              fontWeight: "bold",
            }}
          >
            Login Now
          </NavLink>
        </Box>
      </Box>
    </>
  );
};

export default RiderSignUpThree;
