import React, { useState } from "react";
import signupsbg from "../../assets/signupsbg.png";
import { Box, Container, IconButton, Typography } from "@mui/material";

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import RiderSignUpOne from "./RiderSignUpOne";
import RiderSignUpTwo from "./RiderSignUpTwo";
import RiderSignUpThree from "./RiderSignUpThree";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, firebaseDb } from "../../constants/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
const RiderSignUpMain = () => {
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

  const [newUser, setNewUser] = useState(null);
  const handleNewUserChange = (user) => {
    setNewUser(user);
  };
  const [formData, setFormData] = useState({
    telephone: "",
  });
  const handleNext = () => {
    setActiveStep((prevStep) =>
      Math.min(prevStep + 1, RiderSignUps.length - 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user already exists in the Riders collection
      const riderRef = doc(firebaseDb, "Riders", user.uid);
      const riderDocSnapshot = await getDoc(riderRef);

      if (riderDocSnapshot.exists()) {
        console.log("Rider data exists:", riderDocSnapshot.data());
        navigate("/Rider/ViewProfile");
      } else {
        // If the user doesn't exist, add them to the Riders collection
        await setDoc(riderRef, {
          displayName: user.displayName || "",
          email: user.email || "",
          phoneNumber: user.phoneNumber || "",
        });
        console.log("User added to Riders collection:", user.uid);
        navigate("/Rider/ViewProfile");
      }

      console.log("User signed in with Google:", user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  const RiderSignUps = [
    <RiderSignUpOne
      handleNext={handleNext}
      setConfirmation={setConfirmation}
      setphoneresendTimer={setphoneresendTimer}
      setloading={setloading}
      loading={loading}
      setnotificationProps={setnotificationProps}
      notificationProps={notificationProps}
      formData={formData}
      setFormData={setFormData}
      handleGoogleSignIn={handleGoogleSignIn}
    />,
    <RiderSignUpTwo
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
    <RiderSignUpThree
      onNewUserChange={handleNewUserChange}
      handleGoogleSignIn={handleGoogleSignIn}
    />,
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
