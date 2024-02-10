import { Box, Typography } from "@mui/material";
import React from "react";

import CommonButton from "../../components/CommonButton";
import whatsapp from "../../assets/whatsapp.png";
const DriverSignUpFour = () => {
  return (
    <>
      <Box
        sx={{
          padding: "40px",
          border: "1px solid #F2B705",
          borderRadius: "10px",
          boxShadow: "0px 0px 18px rgba(242, 183, 5, 0.2)",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4" fontSize="24px" textAlign="center">
          Set up your driver account with WhatsApp
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize="12px"
          textAlign="center"
          mt={2}
        >
          Receive guided assistance by connecting with the Flex Logistics
          chatbot via WhatsApp for step-by-step support.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px 0px",
            gap: "20px",
          }}
        >
          <img
            src={whatsapp}
            alt="whatsapp"
            style={{ width: "70px", height: "70px", objectFit: "contain" }}
          />
          <Typography variant="h4" fontSize="24px">
            WhatsApp
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <CommonButton
            fullWidth
            sx={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid #F2B705",
              padding: "5px 20px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#F2B705",
              },
            }}
          >
            Don’t Enable
          </CommonButton>
          <CommonButton>Continue</CommonButton>
        </Box>
      </Box>
    </>
  );
};

export default DriverSignUpFour;
