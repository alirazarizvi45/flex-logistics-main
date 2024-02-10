import React, { useState } from "react";

import { Box, Divider, Typography } from "@mui/material";
import { CustomizeTelInput } from "../../components/CustomizeTelInput";
import CommonButton from "../../components/CommonButton";
import google from "../../assets/google.png";
import { NavLink } from "react-router-dom";
import theme from "../../theme";

const RiderSignUpOne = () => {
  const [telNumber, setTelNumber] = useState("");
  const handleTelInputChange = (value) => {
    setTelNumber(value); // Update telNumber state with new value
  };

  return (
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
          marginTop: "50px",
        }}
      >
        <Typography variant="subtitle2">Phone Number</Typography>
        <CustomizeTelInput
          placeholder="7X0 XXXXXX"
          name="telephone"
          value={telNumber}
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
        <CommonButton fullWidth>Continue</CommonButton>
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
        <Typography variant="subtitle2">Don’t have an account?</Typography>
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
    </Box>
  );
};

export default RiderSignUpOne;
