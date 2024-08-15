import React, { useRef, useState, useEffect } from "react";

import { Box, Divider, Typography } from "@mui/material";
import { CustomizeTelInput } from "../../components/CustomizeTelInput";
import CommonButton from "../../components/CommonButton";
import google from "../../assets/google.png";
import { NavLink } from "react-router-dom";
import theme from "../../theme";
import { matchIsValidTel } from "mui-tel-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import NotificationModal from "../../components/NotificationModal";
import { auth } from "../../constants/firebaseConfig";

import toast, { Toaster } from "react-hot-toast";
const RiderSignUpOne = ({
  handleNext,
  setConfirmation,
  loading,
  setloading,
  setnotificationProps,
  notificationProps,
  formData,
  setFormData,
  handleGoogleSignIn,
}) => {
  const [errors, setErrors] = useState({
    telephone: "",
  });
  const inputRefs = {
    telephone: useRef(),
  };
  const handleTelInputChange = (value) => {
    setFormData((prevFormData) => ({ ...prevFormData, telephone: value }));
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};
    // Telephone
    if (formData.telephone.trim() === "") {
      isValid = false;
      newErrors.telephone = "Telephone is required";
    } else if (!matchIsValidTel(formData.telephone)) {
      isValid = false;
      newErrors.telephone = "Telephone number is invalid";
    }

    setErrors(newErrors); // Update errors state with new error values

    return isValid; // Return the validation result
  };

  const focusOnErrorField = () => {
    for (const fieldName in errors) {
      if (errors[fieldName]) {
        inputRefs[fieldName].current.focus();
        break;
      }
    }
  };
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      focusOnErrorField();
    }
  }, [errors]);

  const handlePhoneNumberVerification = async () => {
    try {
      if (!validateForm()) {
        return;
      }
      setloading(true);
      const container = document.getElementById("recaptcha-container");
      container.innerHTML = "";

      // Create a new reCAPTCHA container element
      const newContainer = document.createElement("div");
      newContainer.id = "recaptcha-container";
      console.log(newContainer, "appVerifier");
      const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        // Replace with your reCAPTCHA site key
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask the user to solve reCAPTCHA again.
          // ...
        },
      });
      // Render the reCAPTCHA widget explicitly
      // appVerifier.render().then((widgetId) => {
      //   window.recaptchaWidgetId = widgetId;
      // });

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formData.telephone,
        appVerifier
      );

      setConfirmation(confirmationResult);
      toast.success(`OTP Send to ${formData.telephone}  Successfully`);
      if (confirmationResult) {
        handleNext();
      }
    } catch (error) {
      console.log(error);
      setnotificationProps({
        ...notificationProps,
        modal: true,
        error: true,
        message: error.message,
      });
    } finally {
      setloading(false); // Make sure to set loading to false even if there's an error
    }
  };

  return (
    <>
      {notificationProps?.modal && (
        <NotificationModal
          notificationProps={notificationProps}
          setnotificationProps={setnotificationProps}
        />
      )}
      <Box
        sx={{
          padding: "20px 40px",
        }}
      >
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
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
            inputRef={inputRefs.telephone}
            error={!!errors.telephone}
            helperText={errors.telephone}
            value={formData.telephone}
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
          <CommonButton
            fullWidth
            loading={loading}
            onClick={handlePhoneNumberVerification}
          >
            Continue
          </CommonButton>
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
            onClick={handleGoogleSignIn}
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
    </>
  );
};

export default RiderSignUpOne;
