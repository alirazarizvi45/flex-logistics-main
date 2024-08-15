import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CommonButton from "../../components/CommonButton";

import { toast, ToastContainer } from "react-toastify";

import { useSelector } from "react-redux";
import UploadIcon from "@mui/icons-material/Upload";
import axiosInstance from "../../constants/axiosInstance";
const VehicleRegistration = ({ handleNext, newUser }) => {
  const { user, role } = useSelector((state) => state?.user);
  console.log(`the user is ${role}`);
  const userId = user?.id;
  console.log(userId, "userId");
  const [errors, setErrors] = useState({
    vehicle_registration_image: "",
  });
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setloading] = useState(null);

  const inputRef = { vehicle_registration_image: useRef() };

  const validation = () => {
    let isValid = true;
    let newErrors = {};
    if (!image) {
      isValid = false;
      newErrors.vehicle_registration_image =
        "Please select your Cnic Back image";
    }
    setErrors(newErrors);
    return isValid;
  };

  const focusOnErrorField = () => {
    if (errors.vehicle_registration_image) {
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
      if (validation() && userId) {
        setloading(true);
        const formData = new FormData();

        formData.append("vehicle_registration_image", image);
        formData.append("id", userId);
        const {
          data: { success },
        } = await axiosInstance.post(
          "add-vehicle-registration-image",
          formData
        );
        if (success) {
          console.log("Image uploaded:", success);
          toast.success("Image uploaded successfully!");
        }
      }
      setTimeout(() => {
        handleNext();
      }, 2000);
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
          Take a photo of your Vehicle Registration Book
        </Typography>

        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          <Typography variant="subtitle1" textAlign="center">
            Capture your vehicle registration document, ensuring clear
            visibility of essential details. Include make, model, license plate
            number, owner's name, and other specifics. Ensure the government
            logo is visible. Accept valid documents until their expiration,
            renewing them promptly. For older registration books, include all
            details in a single picture. Missing or tampered information will
            lead to rejection.
          </Typography>
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
                  alt="uploaded"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                  }}
                />
              ) : (
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
              )}
              <Typography variant="subtitle2" textAlign="center">
                Select Photo
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

export default VehicleRegistration;
