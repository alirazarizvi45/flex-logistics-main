import { Box, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../components/CommonButton";

const AuthNavbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F2B705",
        padding: "20px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Typography variant="h2" color="#fff">
        LOGO
      </Typography>
      <CommonButton
        sx={{
          backgroundColor: "#000000",
          color: "#fff",
          textTransform: "none",
          padding: "10px 40px",

          "&:hover": {
            backgroundColor: "#000000",
          },
        }}
      >
        Help
      </CommonButton>
    </Box>
  );
};

export default AuthNavbar;
