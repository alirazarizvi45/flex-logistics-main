import { Box, Divider, Input, TextField, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../components/CommonButton";

const DriverSignUpTwo = () => {
  return (
    <>
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
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <Typography variant="subtitle2" sx={{ lineHeight: "30px" }}>
            Enter the 4 digit code sent to you at ******9
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <TextField
            InputProps={{
              style: {
                border: "1px solid #F2B705",
                color: "white",
                borderRadius: "10px",
                width: 50,
                height: 50,
              },
            }}
          />

          <TextField
            InputProps={{
              style: {
                border: "1px solid #F2B705",
                color: "white",
                borderRadius: "10px",
                width: 50,
                height: 50,
              },
            }}
          />
          <TextField
            InputProps={{
              style: {
                border: "1px solid #F2B705",
                color: "white",
                borderRadius: "10px",
                width: 50,
                height: 50,
              },
            }}
          />
          <TextField
            InputProps={{
              style: {
                border: "1px solid #F2B705",
                color: "white",
                borderRadius: "10px",
                width: 50,
                height: 50,
              },
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            padding: { sm: "10px 60px", xs: "10px" },
          }}
        >
          <CommonButton
            sx={{
              color: "#C0C0C0",
              textAlign: "center",
              lineHeight: "20px",
              border: "1px solid #C0C0C0",
              padding: "10px",
              borderRadius: "5px",
              textTransform: "none",
            }}
            fullWidth
          >
            I didn’t receive code (0:07)
          </CommonButton>
        </Box>
      </Box>
    </>
  );
};

export default DriverSignUpTwo;
