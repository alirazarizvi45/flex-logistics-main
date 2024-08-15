import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import upload from "../../assets/upload.png";
import CommonButton from "../../components/CommonButton";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import axiosInstance from "../../constants/axiosInstance";
import UploadIcon from "@mui/icons-material/Upload";
const LicenseUpload = ({ handleNext, newUser }) => {
  const { user, role } = useSelector((state) => state?.user);
  console.log(`the user is ${role}`);
  const userId = user?.id;
  console.log(userId, "userId");
  const [errors, setErrors] = useState({
    license_image: "",
  });
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setloading] = useState(null);

  const inputRef = { license_image: useRef() };

  const validation = () => {
    let isValid = true;
    let newErrors = {};
    if (!image) {
      isValid = false;
      newErrors.license_image = "Please select your license image";
    }
    setErrors(newErrors);
    return isValid;
  };

  const focusOnErrorField = () => {
    if (errors.license_image) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focusOnErrorField();
  }, [errors]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    try {
      if (validation()) {
        setloading(true);
        const formData = new FormData();

        formData.append("license_image", image);
        formData.append("id", userId);
        const {
          data: { success },
        } = await axiosInstance.post("add-license-image", formData);
        if (success) {
          console.log("Image uploaded:", success);
          toast.success("Image uploaded successfully!");
        }
      }
      setTimeout(() => {
        handleNext();
      }, 3000);
      handleNext();
    } catch (error) {
      toast.error("Failed to upload image.", error);
      console.log("Error uploading image:", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <ToastContainer />
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
          Take a photo of your Driving License
        </Typography>

        <Box
          sx={{
            padding: "5px 10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <KeyboardDoubleArrowRightIcon color="primary" />
            <Typography variant="subtitle1">
              Start with the backside of your Driving License, then upload the
              front.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <KeyboardDoubleArrowRightIcon color="primary" />
            <Typography variant="subtitle1">
              Confirm your license matches the vehicle class for flex logistic.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <KeyboardDoubleArrowRightIcon color="primary" />
            <Typography variant="subtitle1">
              Ensure clear details in the uploaded photo: License number, type,
              address, DOB, and Government logo.
            </Typography>
          </Box>
        </Box>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              border: "2px solid #F2B705",
              borderStyle: "dashed",
              borderRadius: "5px",
              padding: { sm: "40px 60px", xs: "40px 20px" },
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
              onClick={() => inputRef.current.click()}
            >
              {selectedFile ? (
                <img
                  src={image ? selectedFile : "Logo"}
                  alt="selectedFile"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <>
                  <IconButton
                    sx={{
                      fontSize: "150px",
                      color: "#fff",
                    }}
                  >
                    <UploadIcon />
                    <input
                      ref={inputRef}
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleFileChange}
                    />
                  </IconButton>
                </>
              )}
              {errors.license_image && (
                <Box textAlign="center">
                  <Typography variant="caption" color="error">
                    {errors.license_image}
                  </Typography>
                </Box>
              )}
              <Typography variant="subtitle2" textAlign="center">
                Upload Photo
              </Typography>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            marginTop: "50px",
            padding: "10px 50px",
          }}
        >
          <CommonButton fullWidth onClick={handleImageUpload}>
            Upload Photo
          </CommonButton>
        </Box>
      </Box>
    </>
  );
};

export default LicenseUpload;
