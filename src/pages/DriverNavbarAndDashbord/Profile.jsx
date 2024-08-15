import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Rating,
  Typography,
  Card,
  CardContent,
  Container,
  Avatar,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import profile from "../../assets/profilelogo.png";
import { CustomizeInput } from "../../components/CustomizeInput";
import CommonButton from "../../components/CommonButton";
import axiosInstance from "../../constants/axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import { addUser } from "../../ReducerSlices/user/userSlice";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dob, setDob] = useState("");
  const { user } = useSelector((state) => state.user);
  const userId = user?.id;
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    dateOfBirth: user?.dateOfBirth || "",
    idCardNumber: user?.idCardNumber || "",
    telephone: user?.phoneNumber || "",
    email: user?.email || "",
    address: user?.address || "",
    profile_pic: user?.profile_pic || "",
  });

  console.log("user has id", userId);
  console.log("the user is", user);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setDob(dateValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      dateOfBirth: dateValue,
    }));
  };

  const formattedDob = dob ? moment(dob).format("YYYY-MM-DD") : "";

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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
            marginTop: "80px",
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
              <Grid item md={5} xs={12} mt={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography color="rgba(55, 58, 65, 1)">
                    First Name
                  </Typography>
                  <CustomizeInput
                    placeholder="Your first name"
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
                  <Typography color="rgba(55, 58, 65, 1)">
                    Date of Birth
                  </Typography>
                  <CustomizeInput
                    placeholder="Select"
                    fullWidth
                    type="date"
                    value={formattedDob}
                    onChange={handleDateChange}
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
                  <Typography color="rgba(55, 58, 65, 1)">
                    Phone Number
                  </Typography>
                  <CustomizeInput
                    placeholder="+254 ABCD XXXXX"
                    fullWidth
                    type="number"
                    name="telephone"
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
                  <Typography color="rgba(55, 58, 65, 1)">Password</Typography>
                  <CustomizeInput
                    placeholder="********"
                    name="password"
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

              <Grid item md={5} xs={12} mt={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography color="rgba(55, 58, 65, 1)">Last Name</Typography>
                  <CustomizeInput
                    placeholder="Your last name"
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
                  <Typography color="rgba(55, 58, 65, 1)">
                    ID card No
                  </Typography>
                  <CustomizeInput
                    placeholder="**** ****"
                    type="number"
                    fullWidth
                    name="idCardNumber"
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
                  <Typography color="rgba(55, 58, 65, 1)">Gmail</Typography>
                  <CustomizeInput
                    placeholder="abcd@gmail.com"
                    type="email"
                    fullWidth
                    name="email"
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
                  <Typography color="rgba(55, 58, 65, 1)">
                    Complete Address
                  </Typography>
                  <CustomizeInput
                    placeholder="Street abc ,xyz colony, Nairobi, Kenya"
                    type="text"
                    fullWidth
                    name="address"
                    value={formData.address}
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
                  lg: "-650px 0px 0px 250px",
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

export default Profile;
