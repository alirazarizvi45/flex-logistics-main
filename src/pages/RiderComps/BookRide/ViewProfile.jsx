import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CustomizeInput } from "../../../components/CustomizeInput";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
const ViewProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    // Read the file and convert it to a data URL
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <Container>
        <Grid
          container
          sx={{
            display: "flex",

            gap: "20px",
            marginTop: "50px",
          }}
        >
          <Grid
            item
            md={7}
            xs={12}
            sx={{
              boxShadow:
                "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
              padding: " 30px 20px",
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
                  <CustomizeInput placeholder="Your first name" fullWidth />
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
                    type="number"
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
                    Password
                  </Typography>
                  <CustomizeInput
                    placeholder="********"
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
                    placeholder="abcd@gmail.com"
                    type="email"
                    fullWidth
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
                padding: " 30px 20px",
                borderRadius: "50%", // Set borderRadius to 50% for a circle
                color: "#000",
                width: "120px", // Example width, adjust as needed
                height: "120px", // Example height, adjust as needed
                backgroundImage: uploadedImage
                  ? `url(${uploadedImage})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: {
                  lg: "-350px 0px 0px 250px",
                  md: "-350px 0px 0px 200px",
                  sm: "-550px 0px 0px 250px",
                  xs: "-560px 0px 0px 75px",
                },
              }}
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  margin: "50px 0px 0px 50px",
                  color: "#fff",
                  backgroundColor: "#F2B705",
                }}
                onClick={handleUploadClick}
              >
                <CameraAltIcon />
              </IconButton>
            </Box>
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
            <Box color="#000">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              repellat incidunt vel consectetur nisi. Saepe, error. Quisquam
              dolorum blanditiis asperiores eius, iure, quas inventore nihil
              cupiditate dolor rerum, at officiis sit et aspernatur magni veniam
              a molestiae natus. Saepe quibusdam minima doloribus, asperiores
              culpa blanditiis tempore reprehenderit rerum nesciunt ratione.
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ViewProfile;
