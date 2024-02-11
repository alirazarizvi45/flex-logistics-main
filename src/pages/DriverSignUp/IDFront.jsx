import { Box, Container, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import upload from "../../assets/upload.png";
import CommonButton from "../../components/CommonButton";

const IDFront = () => {
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    // Read the file and convert it to a data URL
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
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
          Take a photo of your CNIC front side
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
              Capture the frontside of your national ID card, ensuring all
              corners are visible.
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
              Ensure the picture is clear, and all text is easily readable.
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
              Ensure that all the details are clear and legible.
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
              Any missing or altered information, including a photo will lead to
              rejection
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
            >
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="uploaded"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <img
                  src={upload}
                  alt="upload"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  onClick={handleUploadClick}
                />
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
          <CommonButton fullWidth onClick={handleUploadClick}>
            Upload Photo
          </CommonButton>
        </Box>
      </Box>
    </>
  );
};

export default IDFront;
