import React, { useState } from "react";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../constants/firebaseConfig";
import NotificationModal from "../../components/NotificationModal";
import { MuiOtpInput } from "mui-one-time-password-input";

const DriverSignUpTwo = ({
  handleNext,
  setConfirmation,
  setphoneresendTimer,
  setphoneResendloading,
  setloading,
  setnotificationProps,
  notificationProps,
  phoneresendTimer,
  phoneResendloading,
  formData,
  confirmation,
}) => {
  const [mobileOtp, setMobileOtp] = useState("");
  const [phoneNumberVerification, setPhoneNumberVerification] = useState(false);

  const formatPhoneNumber = (phoneNumber) => {
    if (typeof phoneNumber !== "string") {
      return "";
    }
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 10) {
      return phoneNumber;
    }
    const startingDigits = phoneNumber.slice(0, 7);
    const endingDigits = phoneNumber.slice(-2);
    const middleDigits = "*".repeat(phoneNumberLength - 3);

    return `${startingDigits}${middleDigits}${endingDigits}`;
  };

  const resendVerificationCode = async () => {
    try {
      setloading(true);
      const container = document.getElementById("recaptcha-container");
      container.innerHTML = "";
      const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formData.telephone,
        appVerifier
      );

      setConfirmation(confirmationResult);
      setphoneresendTimer(60);
      setphoneResendloading(false);
    } catch (error) {
      console.log(error);
      setphoneResendloading(false);
      setnotificationProps({
        ...notificationProps,
        modal: true,
        error: true,
        message: error.message,
      });
    }
  };

  const handleCompletePhone = async (finalValue) => {
    try {
      if (!confirmation) {
        throw new Error("Confirmation not available");
      }
      await confirmation.confirm(finalValue);
      setPhoneNumberVerification(true);
      console.log("OTP Confirmed successfully");
      handleNext();
    } catch (error) {
      console.log(error);
      setnotificationProps({
        ...notificationProps,
        modal: true,
        error: true,
        message: error.message,
      });
    }
  };

  return (
    <>
      <Box sx={{ padding: "20px 40px" }}>
        {notificationProps?.modal && (
          <NotificationModal
            notificationProps={notificationProps}
            setnotificationProps={setnotificationProps}
          />
        )}
        <Box sx={{ textAlign: "center" }}>
          <div id="recaptcha-container"></div>
          <Typography variant="h2">Sign up</Typography>
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
            Enter the 6 digit code sent to you at{" "}
            {formatPhoneNumber(formData.telephone)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <MuiOtpInput
            value={mobileOtp}
            onChange={(newValue) => setMobileOtp(newValue)}
            length={6}
            onComplete={(value) => handleCompletePhone(value)}
            validateChar={(character, index) => !isNaN(character)}
            TextFieldsProps={{
              size: "large",
              placeholder: "*",
              sx: {
                color: "#fff",
                "& label.Mui-focused": {
                  color: "#fff",
                },
                "& label": {
                  color: "#fff",
                  fontFamily: "Russo One",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#F2B705",
                },
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": {
                    borderColor: "#F2B705",
                  },
                  "&:hover fieldset": {
                    borderColor: "#F2B705",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#F2B705",
                  },
                  "&.Mui-disabled": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#F2B705",
                    },
                  },
                },
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
          <Box textAlign="center">
            {phoneresendTimer > 0 ? (
              <Typography>Resend code in {phoneresendTimer} seconds</Typography>
            ) : (
              <Typography>
                Did not Receive Code?{" "}
                {phoneResendloading ? (
                  <CircularProgress size={20} sx={{ color: "#F2B705" }} />
                ) : (
                  <Box
                    component="span"
                    sx={{ color: "#F2B705", cursor: "pointer" }}
                    onClick={resendVerificationCode}
                  >
                    Resend Code
                  </Box>
                )}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DriverSignUpTwo;
