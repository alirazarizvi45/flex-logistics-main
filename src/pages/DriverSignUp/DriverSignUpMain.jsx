import React, { useState } from "react";
import signupsbg from "../../assets/signupsbg.png";
import { Box, Container, IconButton, Typography } from "@mui/material";

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

import DriverSignUpTwo from "./DriverSignUpTwo";
import DriverSignUpThree from "./DriverSignUpThree";
import DriverSignUpOne from "./DriverSignUpOne";
import DriverSignUpFour from "./DriverSignUpFour";
import DriverSignupFive from "./DriverSignupFive";
import PersonalInfo from "./PersonalInfo";
import LicenseUpload from "./LicenseUpload";
import ProfilePic from "./ProfilePic";
import IDFront from "./IDFront";
import IDBack from "./IDBack";
import VehicleRegistration from "./VehicleRegistration";
import VehiclePicture from "./VehiclePicture";
const DriverSignUpMain = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [confirmation, setConfirmation] = useState(false);
  const [phoneresendTimer, setphoneresendTimer] = useState(0);
  const [loading, setloading] = useState(false);
  const [phoneResendloading, setphoneResendloading] = useState(false);
  const [notificationProps, setnotificationProps] = useState({
    error: "",
    message: "",
    modal: false,
  });
  const [formData, setFormData] = useState({
    telephone: "",
  });
  const [newUser, setNewUser] = useState(null);
  const handleNewUserChange = (user) => {
    setNewUser(user);
  };
  const handleNext = () => {
    setActiveStep((prevStep) =>
      Math.min(prevStep + 1, DriverSignUps.length - 1)
    );

    // if (confirmation) {
    //   setActiveStep((prevStep) =>
    //     Math.min(prevStep + 1, DriverSignUps.length - 1)
    //   );
    // }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const DriverSignUps = [
    <DriverSignUpOne
      handleNext={handleNext}
      setConfirmation={setConfirmation}
      setphoneresendTimer={setphoneresendTimer}
      setloading={setloading}
      loading={loading}
      setnotificationProps={setnotificationProps}
      notificationProps={notificationProps}
      formData={formData}
      setFormData={setFormData}
    />,
    <DriverSignUpTwo
      handleNext={handleNext}
      setConfirmation={setConfirmation}
      setphoneresendTimer={setphoneresendTimer}
      setloading={setloading}
      setphoneResendloading={setphoneResendloading}
      setnotificationProps={setnotificationProps}
      notificationProps={notificationProps}
      formData={formData}
      phoneResendloading={phoneResendloading}
      phoneresendTimer={phoneresendTimer}
      confirmation={confirmation}
    />,
    <DriverSignUpThree />,
    <DriverSignUpFour />,
    <DriverSignupFive />,
    <PersonalInfo
      handleNext={handleNext}
      onNewUserChange={handleNewUserChange}
    />,
    <LicenseUpload handleNext={handleNext} newUser={newUser} />,
    <ProfilePic handleNext={handleNext} newUser={newUser} />,
    <IDFront handleNext={handleNext} newUser={newUser} />,
    <IDBack handleNext={handleNext} newUser={newUser} />,
    <VehicleRegistration handleNext={handleNext} newUser={newUser} />,
    <VehiclePicture newUser={newUser} />,
  ];

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
            disabled={activeStep === DriverSignUps.length - 1}
            onClick={handleNext}
          >
            <Typography variant="subtitle2">
              {activeStep === DriverSignUps.length - 1 ? "Finished" : "Next"}
            </Typography>
            <EastIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>

        <Container maxWidth={activeStep === 5 ? "md" : "sm"}>
          {React.cloneElement(DriverSignUps[activeStep])}{" "}
          {/* Pass confirmation as prop */}
        </Container>
      </Container>
    </Box>
  );
};

export default DriverSignUpMain;
