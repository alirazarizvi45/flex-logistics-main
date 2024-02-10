import React, { useState } from "react";
import signupsbg from "../../assets/signupsbg.png";
import { Box, Container, IconButton, Typography } from "@mui/material";

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import RiderSignUpOne from "./RiderSignUpOne";
import RiderSignUpTwo from "./RiderSignUpTwo";
import RiderSignUpThree from "./RiderSignUpThree";
const RiderSignUpMain = () => {
  const [activeStep, setActiveStep] = useState(0);

  const RiderSignUps = [
    <RiderSignUpOne />,
    <RiderSignUpTwo />,
    <RiderSignUpThree />,
  ];

  const handleNext = () => {
    setActiveStep((prevStep) =>
      Math.min(prevStep + 1, RiderSignUps.length - 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${signupsbg})`,
        backgroundPosition: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundColor: "#373A41",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            sx={{
              display: "flex",
              gap: "10px",
            }}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            <WestIcon sx={{ color: "#fff" }} />
            <Typography variant="subtitle2">Back</Typography>
          </IconButton>
          <IconButton
            sx={{
              display: "flex",
              gap: "10px",
            }}
            disabled={activeStep === RiderSignUps.length - 1}
            onClick={handleNext}
          >
            <Typography variant="subtitle2">Next</Typography>
            <EastIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <Container maxWidth="sm">{RiderSignUps[activeStep]}</Container>
      </Container>
    </Box>
  );
};

export default RiderSignUpMain;
