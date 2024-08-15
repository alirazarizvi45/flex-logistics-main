import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import CommonButton from "../../components/CommonButton";

import { toast, ToastContainer } from "react-toastify";
import UploadIcon from "@mui/icons-material/Upload";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../constants/axiosInstance";
const VehiclePicture = ({ newUser }) => {
  const { user, role } = useSelector((state) => state?.user);
  console.log(`the user is ${role}`);
  const userId = user?.id;
  console.log(userId, "userId");
  const [errors, setErrors] = useState({
    vehicle_image: "",
  });
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setloading] = useState(null);

  const inputRef = { vehicle_image: useRef() };
  const navigate = useNavigate();
  const validation = () => {
    let isValid = true;
    let newErrors = {};
    if (!image) {
      isValid = false;
      newErrors.vehicle_image = "Please select your Cnic Front image";
    }
    setErrors(newErrors);
    return isValid;
  };

  const focusOnErrorField = () => {
    if (errors.vehicle_image) {
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

        formData.append("vehicle_image", image);
        formData.append("id", userId);
        const {
          data: { success },
        } = await axiosInstance.post("add-vehicle-image", formData);
        if (success) {
          console.log("Image uploaded:", success);
          toast.success("Image uploaded successfully!");
        }
      }
      setTimeout(() => {
        toast.success("Registration Complted!");
      }, 2000);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
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
          Take your Vehicle Picture
        </Typography>
        <Box
          sx={{
            padding: "5px 20px",
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
              Place the vehicle in the center of the frame, facing the camera
              directly.
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
              Capture the photo in well-lit conditions, avoiding glare and
              ensuring the entire vehicle is visible.
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
              Maintain focus and refrain from using filters or alterations for
              an authentic representation of the vehicle.
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

export default VehiclePicture;
