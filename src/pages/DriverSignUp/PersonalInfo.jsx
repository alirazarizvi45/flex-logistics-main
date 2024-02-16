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
import { useState } from "react";
const PersonalInfo = () => {
  const [dob, setDob] = useState("");

  const handleDateChange = (event) => {
    setDob(event.target.value);
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
              <Typography>Date of Birth</Typography>
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
              <Typography>Phone Number</Typography>
              <CustomizeInput
                placeholder="+254 ABCD XXXXX"
                fullWidth
                type="number"
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
              <CustomizeInput placeholder="Your last name" fullWidth />
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
                type="password"
                fullWidth
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
                type="email"
                fullWidth
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
                type="text"
                fullWidth
              />
            </Box>
            <Box pt="30px">
              <CommonButton fullWidth>Submit</CommonButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PersonalInfo;
