import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import CommonButton from "../../components/CommonButton";
import blackupload from "../../assets/blackupload.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const AddNewVehicle = () => {
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
      <Container maxWidth="lg">
        <Box
          sx={{
            margin: "50px 0px",
          }}
        >
          <Typography variant="h3" color="#000">
            Add new vehicle
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            background: "#fff",
            boxShadow:
              "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
            padding: " 30px 20px",
            borderRadius: "7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Grid item md={8} xs={12}>
            <Box>
              <Typography
                variant="subtitle2"
                color="#373A41"
                fontSize="18px"
                fontWeight="bold"
                margin="20px 0px"
              >
                Take a photo of your Vehicle Registration Book
              </Typography>
              <Typography variant="subtitle1" color="#5A5A5A">
                Capture your vehicle registration document, ensuring clear
                visibility of essential details. Include make, model, license
                plate number, owner's name, and other specifics. Ensure the
                government logo is visible. Accept valid documents until their
                expiration, renewing them promptly. For older registration
                books, include all details in a single picture. Missing or
                tampered information will lead to rejection.
              </Typography>
              <Container maxWidth="sm" sx={{ marginTop: "40px" }}>
                <CommonButton fullWidth onClick={handleUploadClick}>
                  Upload Photo
                </CommonButton>
              </Container>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box
              sx={{
                border: "2px solid #373A41",
                borderStyle: "dashed",
                borderRadius: "5px",
                padding: { sm: "40px", xs: "40px 20px" },
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
                    src={blackupload}
                    alt="blackupload"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    onClick={handleUploadClick}
                  />
                )}
                <Typography
                  variant="subtitle2"
                  textAlign="center"
                  color="#373A41"
                >
                  {uploadedImage ? " Uploaded" : "Upload Photo"}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            background: "#fff",
            boxShadow:
              "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
            padding: " 30px 20px",
            borderRadius: "7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Grid item md={8} xs={12}>
            <Box>
              <Typography
                variant="subtitle2"
                color="#373A41"
                fontSize="18px"
                fontWeight="bold"
                margin="20px 0px"
              >
                Take your Vehicle Picture
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
                  <Typography variant="subtitle1" color="#5A5A5A">
                    Place the vehicle in the center of the frame, facing the
                    camera directly.
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
                  <Typography variant="subtitle1" color="#5A5A5A">
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
                  <Typography variant="subtitle1" color="#5A5A5A">
                    Maintain focus and refrain from using filters or alterations
                    for an authentic representation of the vehicle.
                  </Typography>
                </Box>
              </Box>
              <Container maxWidth="sm" sx={{ marginTop: "40px" }}>
                <CommonButton fullWidth onClick={handleUploadClick}>
                  Upload Photo
                </CommonButton>
              </Container>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box
              sx={{
                border: "2px solid #373A41",
                borderStyle: "dashed",
                borderRadius: "5px",
                padding: { sm: "40px", xs: "40px 20px" },
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
                    src={blackupload}
                    alt="blackupload"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    onClick={handleUploadClick}
                  />
                )}
                <Typography
                  variant="subtitle2"
                  textAlign="center"
                  color="#373A41"
                >
                  {uploadedImage ? " Uploaded" : "Upload Photo"}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <CommonButton fullWidth>Submit</CommonButton>
        </Box>
      </Container>
    </>
  );
};

export default AddNewVehicle;
