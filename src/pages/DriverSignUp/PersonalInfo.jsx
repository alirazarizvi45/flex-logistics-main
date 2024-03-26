import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";

import { CustomizeInput } from "../../components/CustomizeInput";
import moment from "moment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CommonButton from "../../components/CommonButton";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../constants/axiosInstance";
const PersonalInfo = () => {
  const [dob, setDob] = useState("");

  const handleDateChange = (event) => {
    setDob(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      dateOfBirth: event.target.value,
    }));
  };

  const formattedDob = dob ? moment(dob).format("YYYY-MM-DD") : "";
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handlePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    idCardNumber: "",
    telephone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    idCardNumber: "",
    telephone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });
  const inputRefs = {
    firstName: useRef(),
    lastName: useRef(),
    dateOfBirth: useRef(),
    idCardNumber: useRef(),
    telephone: useRef(),
    email: useRef(),
    password: useRef(),
    confirmPassword: useRef(),
    address: useRef(),
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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
    // Date of Birth
    if (formData.dateOfBirth.trim() === "") {
      isValid = false;
      newErrors.dateOfBirth = "Date of Birth is required";
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

    // Confirm Password
    if (formData.confirmPassword.trim() === "") {
      isValid = false;
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      isValid = false;
      newErrors.confirmPassword = "Passwords do not match";
    }
    // Address
    if (formData.address.trim() === "") {
      isValid = false;
      newErrors.address = "Address is required";
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!validateForm()) {
        return;
      }
      const response = await axiosInstance.post("/driver-signup", formData);
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error occurred while submitting form:", error);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      focusOnErrorField();
    }
  }, [errors]);
  return (
    <>
      <Box
        sx={{
          padding: "40px",
          border: "1px solid #F2B705",
          borderRadius: "20px",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4" fontSize="24px" textAlign="center" pb={6}>
          Enter your personal information
        </Typography>
        <form onSubmit={(event) => handleSubmit(event)}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
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
                  marginTop: "20px",
                }}
              >
                <Typography>Date of Birth</Typography>
                <CustomizeInput
                  placeholder="Select"
                  fullWidth
                  type="date"
                  value={formattedDob}
                  onChange={(event) => {
                    handleDateChange(event);
                    handleInputChange(event, "dateOfBirth");
                  }}
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
                <Typography>Phone Number</Typography>
                <CustomizeInput
                  placeholder="+254 ABCD XXXXX"
                  fullWidth
                  name="telephone"
                  inputRef={inputRefs.telephone}
                  error={!!errors.telephone}
                  helperText={errors.telephone}
                  value={formData.telephone}
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
                <Typography>Password</Typography>
                <CustomizeInput
                  placeholder="********"
                  name="password"
                  inputRef={inputRefs.password}
                  error={!!errors.password}
                  helperText={errors.password}
                  fullWidth
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
            </Grid>
            <Grid item md={6} xs={12}>
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
                <Typography>ID card No</Typography>
                <CustomizeInput
                  placeholder="**** ****"
                  name="idCardNumber"
                  inputRef={inputRefs.idCardNumber}
                  error={!!errors.idCardNumber}
                  helperText={errors.idCardNumber}
                  fullWidth
                  value={formData.idCardNumber}
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
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <Typography>Confirm Password</Typography>
                <CustomizeInput
                  placeholder="********"
                  name="confirmPassword"
                  inputRef={inputRefs.confirmPassword}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  fullWidth
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  type={showPassword2 ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={handlePasswordVisibility2}
                          sx={{ color: "#F2B705" }}
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <Typography>Complete Address</Typography>
                <CustomizeInput
                  placeholder="Street abc ,xyz colony, Nairobi, Kenya"
                  name="address"
                  inputRef={inputRefs.address}
                  error={!!errors.address}
                  helperText={errors.address}
                  fullWidth
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Box>
              <Box mt="30px">
                <CommonButton fullWidth type="submit">
                  Submit
                </CommonButton>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default PersonalInfo;
