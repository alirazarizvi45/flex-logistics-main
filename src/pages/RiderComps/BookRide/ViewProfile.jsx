import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  Card,
  CardContent,
  Divider,
  Stack,
  Avatar,
  Rating,
} from "@mui/material";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import React, { useEffect, useRef, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CustomizeInput } from "../../../components/CustomizeInput";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CommonButton from "../../../components/CommonButton";

import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../constants/axiosInstance";
import { addUser } from "../../../ReducerSlices/user/userSlice";

const ViewProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const userId = user?.id;
  console.log("the user id  is", userId);
  const dispatch = useDispatch();
  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const inputRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",

    telephone: user?.phoneNumber || "",
    email: user?.email || "",
    password: "",
    profile_pic: user?.profile_pic || "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      if (!user || !user.id) {
        toast.error("User not logged in or user ID is missing");
        return;
      }
      setLoading(true);

      console.log("User object:", user);
      console.log("Form data before sending:", formData);

      const multipartData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        multipartData.append(key, value);
      });

      // Explicitly add the user ID to the form data
      multipartData.append("id", user.id);
      multipartData.append("profile_pic", image);

      // Log FormData contents
      for (let [key, value] of multipartData.entries()) {
        console.log("FormData entry:", key, value);
      }
      const { data } = await axiosInstance.post(
        "update-user-profile",
        multipartData
      );
      console.log("received data", data);
      const { success, updatedUser } = data;

      if (success) {
        dispatch(addUser(updatedUser));
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      toast.error("Error updating profile");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <ToastContainer />
      <Container>
        <Grid
          container
          sx={{
            display: "flex",

            gap: "20px",
            marginTop: "100px",
          }}
        >
          <Grid
            item
            md={7}
            xs={12}
            sx={{
              boxShadow:
                "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",

              borderRadius: "7px",
              backgroundColor: "#fff",
              position: "relative",
              padding: "100px 20px",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Grid item md={5} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="#373A41"
                    fontWeight={600}
                  >
                    First Name
                  </Typography>
                  <CustomizeInput
                    placeholder="Your  name"
                    fullWidth
                    name="firstName"
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
                  <Typography
                    variant="subtitle1"
                    color="#373A41"
                    fontWeight={600}
                  >
                    Phone Number
                  </Typography>
                  <CustomizeInput
                    placeholder="+254 ABCD XXXXX"
                    fullWidth
                    name="telephone"
                    type="number"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                </Box>
              </Grid>
              <Grid item md={5} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="#373A41"
                    fontWeight={600}
                  >
                    Last Name
                  </Typography>
                  <CustomizeInput
                    placeholder="Your first name"
                    fullWidth
                    name="lastName"
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
                  <Typography
                    variant="subtitle1"
                    color="#373A41"
                    fontWeight={600}
                  >
                    Email
                  </Typography>
                  <CustomizeInput
                    placeholder="Update Email"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Box>
              </Grid>
              <Grid xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",

                    padding: " 20px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="#373A41"
                    fontWeight={600}
                  >
                    Password
                  </Typography>
                  <CustomizeInput
                    placeholder="Update password"
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
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                position: "absolute", // Added relative position
                backgroundColor: "#fff",
                boxShadow:
                  "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
                padding: " 10px 20px",
                borderRadius: "50%", // Set borderRadius to 50% for a circle
                color: "#000",
                width: "130px", // Example width, adjust as needed
                height: "130px", // Example height, adjust as needed

                margin: {
                  lg: "-520px 0px 0px 250px",
                  md: "-350px 0px 0px 200px",
                  sm: "-550px 0px 0px 250px",
                  xs: "-560px 0px 0px 75px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
                onClick={() => inputRef.current.click()}
              >
                {user ? (
                  <>
                    <img
                      src={
                        selectedFile
                          ? selectedFile
                          : user?.profile_pic
                          ? `../../../server/uploads/${user.profile_pic
                              .split("\\")
                              .pop()}`
                          : ""
                      }
                      style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                      }}
                    />
                    <IconButton
                      sx={{
                        color: "#F2B705",
                      }}
                    >
                      <CameraAltRoundedIcon fontSize="large" />
                      <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleFileChange}
                      />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    sx={{
                      fontSize: "150px",
                      color: "#F2B705",
                    }}
                  >
                    <CameraAltRoundedIcon
                      fontSize="small"
                      variant="contained"
                    />
                    <input ref={inputRef} type="file" accept="image/*" hidden />
                  </IconButton>
                )}
              </Box>
            </Box>
            <Grid xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <CommonButton onClick={handleProfileUpdate}>
                  Update Information
                </CommonButton>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            md={4}
            xs={12}
            sx={{
              boxShadow:
                "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
              padding: " 30px 20px",
              borderRadius: "7px",
              backgroundColor: "#fff",
            }}
          >
            <Typography color="customBlack.main" variant="h4" mb={2}>
              Reviews
            </Typography>
            <Divider />
            <Box
              display="flex"
              flexDirection="row"
              flexWrap={{ xs: "wrap", sm: "nowrap" }}
              mt={2}
            >
              <Avatar src="../src/assets/Ellipse 84.png" />
              <Box display="flex" flexDirection="column" flexGrow={1} ml={1}>
                <Typography color="customBlack.main" variant="h5">
                  Nyambura Wanjiru
                </Typography>
                <Box display="flex" alignItems="center">
                  <Rating value={4} readOnly size="small" />
                  <Typography variant="subtitle1" color="textSecondary" ml={1}>
                    (4.0)
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" ml={{ xs: 5, sm: 0 }}>
                <Typography variant="body2" color="textSecondary">
                  January 1, 2024
                </Typography>
              </Box>
            </Box>
            <Box display="flex" flexWrap="wrap" mt={0.5} ml={6} mb={2}>
              <Typography color="rgba(90, 90, 90, 1)">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Typography>
            </Box>
            <Divider />
            <Box
              display="flex"
              flexDirection="row"
              flexWrap={{ xs: "wrap", sm: "nowrap" }}
              mt={2}
            >
              <Avatar src="../src/assets/Ellipse 84.png" />
              <Box display="flex" flexDirection="column" flexGrow={1} ml={1}>
                <Typography color="customBlack.main" variant="h5">
                  Nyambura Wanjiru
                </Typography>
                <Box display="flex" alignItems="center">
                  <Rating value={4} readOnly size="small" />
                  <Typography variant="subtitle1" color="textSecondary" ml={1}>
                    (4.0)
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                ml={{ xs: 5, sm: 0 }}
                color="textSecondary"
              >
                January 1, 2024
              </Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" mt={0.5} ml={6} mb={2}>
              <Typography color="rgba(90, 90, 90, 1)">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Typography>
            </Box>
            <Divider />
            <Box
              display="flex"
              flexDirection="row"
              flexWrap={{ xs: "wrap", sm: "nowrap" }}
              mt={2}
            >
              <Avatar src="../src/assets/Ellipse 84.png" />
              <Box display="flex" flexDirection="column" flexGrow={1} ml={1}>
                <Typography color="customBlack.main" variant="h5">
                  Nyambura Wanjiru
                </Typography>
                <Box display="flex" alignItems="center">
                  <Rating value={4} readOnly size="small" />
                  <Typography variant="subtitle1" color="textSecondary" ml={1}>
                    (4.0)
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                ml={{ xs: 5, sm: 0 }}
                color="textSecondary"
              >
                January 1, 2024
              </Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" mt={0.5} ml={6} mb={2}>
              <Typography color="rgba(90, 90, 90, 1)">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ViewProfile;
