import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { CustomizeTelInput } from "../../components/CustomizeTelInput";
import CommonButton from "../../components/CommonButton";
import { auth } from "../../constants/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { matchIsValidTel } from "mui-tel-input";

import toast, { Toaster } from "react-hot-toast";
import NotificationModal from "../../components/NotificationModal";

const DriverSignUpOne = ({
  handleNext,
  setConfirmation,
  loading,
  setloading,
  setnotificationProps,
  notificationProps,
  formData,
  setFormData,
}) => {
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

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
      if (!validateForm()) return;

      setloading(true);

      // Ensure the recaptcha container is fresh
      const container = document.getElementById("recaptcha-container");
      container.innerHTML = "";

      // Initialize RecaptchaVerifier
      const appVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { size: "invisible" },
        auth
      );

      // Send verification code
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formData.telephone,
        appVerifier
      );

      // Handle successful phone number verification
      setConfirmation(confirmationResult);
      handleNext();
    } catch (error) {
      console.error("Error during phone verification:", error);
      toast.error(error.message || "An error occurred during verification");
    } finally {
      setloading(false);
    }
  };

  // const handlePhoneNumberVerification = async () => {
  //   try {
  //     if (!validateForm()) {
  //       return;
  //     }
  //     setloading(true);
  //     const container = document.getElementById("recaptcha-container");
  //     container.innerHTML = "";

  //     // Create a new reCAPTCHA container element
  //     const newContainer = document.createElement("div");
  //     newContainer.id = "recaptcha-container";
  //     console.log(newContainer, "appVerifier");
  //     const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  //       size: "invisible",
  //       // Replace with your reCAPTCHA site key
  //       callback: (response) => {
  //         // reCAPTCHA solved, allow signInWithPhoneNumber.
  //         // ...
  //       },
  //       "expired-callback": () => {
  //         // Response expired. Ask the user to solve reCAPTCHA again.
  //         // ...
  //       },
  //     });
  //     // Render the reCAPTCHA widget explicitly
  //     // appVerifier.render().then((widgetId) => {
  //     //   window.recaptchaWidgetId = widgetId;
  //     // });

  //     const confirmationResult = await signInWithPhoneNumber(
  //       auth,
  //       formData.telephone,
  //       appVerifier
  //     );

  //     setConfirmation(confirmationResult);
  //     toast.success(`OTP Send to ${formData.telephone}  Successfully`);
  //     if (confirmationResult) {
  //       handleNext();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setloading(false); // Make sure to set loading to false even if there's an error
  //   }
  // };

  // const handlePhoneNumberVerification = async () => {
  //   try {
  //     if (!validateForm()) {
  //       return;
  //     }
  //     setloading(true);

  //     // Check and ensure the auth instance is initialized
  //     if (!auth) {
  //       throw new Error("Firebase Auth not initialized");
  //     }

  //     // Clear existing reCAPTCHA verifier if present
  //     if (window.recaptchaVerifier) {
  //       window.recaptchaVerifier.clear();
  //     }

  //     // Initialize the RecaptchaVerifier with proper settings
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         callback: (response) => {
  //           console.log("reCAPTCHA solved", response);
  //         },
  //         "expired-callback": () => {
  //           console.log("reCAPTCHA expired");
  //           toast.error("reCAPTCHA expired. Please try again.");
  //         },
  //       },
  //       auth
  //     ); // Pass the correct auth instance

  //     // Render the reCAPTCHA
  //     await window.recaptchaVerifier.render();

  //     // Initiate the phone number verification
  //     const confirmationResult = await signInWithPhoneNumber(
  //       auth,
  //       formData.telephone,
  //       window.recaptchaVerifier
  //     );

  //     // Handle successful verification
  //     setConfirmation(confirmationResult);
  //     toast.success(`OTP sent to ${formData.telephone} successfully`);

  //     if (confirmationResult) {
  //       handleNext();
  //     }
  //   } catch (error) {
  //     // Log and display errors
  //     console.error("Error in phone verification:", error);
  //     toast.error(error.message || "An error occurred during verification");
  //   } finally {
  //     setloading(false);
  //   }
  // };

  // useEffect(() => {
  //   return () => {
  //     if (window.recaptchaVerifier) {
  //       window.recaptchaVerifier.clear();
  //     }
  //   };
  // }, []);
  return (
    <>
      <Box>
        {notificationProps?.modal && (
          <NotificationModal
            notificationProps={notificationProps}
            setnotificationProps={setnotificationProps}
          />
        )}

        <Box
          sx={{
            padding: "20px 40px",
            border: "1px solid #F2B705",
            borderRadius: "10px",
            boxShadow: "0px 0px 18px rgba(242, 183, 5, 0.2)",
            marginTop: "50px",
          }}
        >
          <Toaster toastOptions={{ duration: 4000 }} />
          <div id="recaptcha-container"></div>
          {/* <ReCAPTCHA
          id="recaptcha-container"
          size="invisible"
          sitekey="6LebY4kpAAAAAHbMDwJJEUVscMuYMtAmQ1t3nMTK"
        /> */}
          <Typography variant="h4" textAlign="center">
            Register today and become a{" "}
            <span style={{ color: "#F2B705" }}> Flex Captain </span>
          </Typography>
          <Box
            sx={{
              paddingTop: "20px",
            }}
          >
            <Typography variant="subtitle1" fontSize="18px" pb={1}>
              Select City
            </Typography>
            <FormControl sx={{ marginTop: "5px" }} fullWidth>
              <Select
                value={city}
                onChange={handleCityChange}
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  color: "#000000",
                  "& .MuiSelect-icon": {
                    color: "#000000",
                  },
                }}
              >
                <MenuItem value="City one" sx={{ color: "#000000" }}>
                  City one
                </MenuItem>
                <MenuItem value=" City Two " sx={{ color: "#000000" }}>
                  City Two
                </MenuItem>
                <MenuItem value="City Three" sx={{ color: "#000000" }}>
                  City Three
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "20px",
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
              defaultCountry="NG"
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
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Typography variant="subtitle1" fontSize="12px">
              By proceeding, I consent to Flex Logistics or its representatives
              contacting me via email, phone, or SMS (including automatic
              telephone dialing systems) at the provided email address or
              number, including for marketing purposes.
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "right",
              mt: "20px",
            }}
          >
            <CommonButton
              loading={loading}
              onClick={handlePhoneNumberVerification}
            >
              Next
            </CommonButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DriverSignUpOne;
