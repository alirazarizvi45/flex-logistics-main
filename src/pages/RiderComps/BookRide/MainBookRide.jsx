import React, { useState } from "react";
import BookRide from "./BookRide";
import AvailableRides from "./AvailableRides";
import { Box } from "@mui/material";

const MainBookRide = ({ handleNext, handleBack, activeStep }) => {
  const riderComps = [
    <BookRide handleNext={handleNext} handleBack={handleBack} />,
    <AvailableRides handleNext={handleNext} handleBack={handleBack} />,
  ];

  return (
    <>
      <Box>{React.cloneElement(riderComps[activeStep])}</Box>
    </>
  );
};

export default MainBookRide;
