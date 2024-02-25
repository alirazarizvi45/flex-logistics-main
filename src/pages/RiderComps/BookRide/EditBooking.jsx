import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { CustomizeInput } from "../../../components/CustomizeInput";
import CommonButton from "../../../components/CommonButton";

const EditBooking = () => {
  return (
    <>
      <Box
        sx={{
          background: "#F9F9F9",

          borderRadius: "7px ",
          border: "1px solid #373A41",
        }}
      >
        <Box
          sx={{
            background: "#373A41",
            padding: "20px",
            borderRadius: "7px 7px 0px 0px ",
          }}
        >
          <Typography variant="h4" sx={{ color: "#fff" }}>
            Edit Booking
          </Typography>
        </Box>
        <Container
          maxWidth="lg"
          sx={{
            marginTop: "20px",
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} color="#000">
            You can edit the following attributes of the booking below. for
            everything else, please cancel the booking and re-book
          </Typography>
          <Grid
            container
            sx={{
              marginTop: "20px",
            }}
            spacing={2}
          >
            <Grid item md={4} xs={12}>
              <Box>
                <Typography variant="subtitle1" color="#373A41">
                  Pickup
                </Typography>
                <CustomizeInput fullWidth />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography variant="subtitle1" color="#373A41">
                  Drop off
                </Typography>
                <CustomizeInput fullWidth />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography variant="subtitle1" color="#373A41">
                  Promo code
                </Typography>
                <CustomizeInput fullWidth />
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box>
                <Typography variant="subtitle1" color="#373A41">
                  More details for pickup
                </Typography>
                <CustomizeInput fullWidth />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography variant="subtitle1" color="#373A41">
                  More details for Drop off
                </Typography>
                <CustomizeInput fullWidth />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography variant="subtitle1" color="#373A41">
                  car type
                </Typography>
                <CustomizeInput fullWidth />
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography variant="subtitle1" color="#373A41">
                  Peak Factor
                </Typography>
                <CustomizeInput fullWidth />
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box>
                <Typography variant="subtitle1" color="#373A41">
                  Pickup time
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <CustomizeInput />
                  <CustomizeInput />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              padding: "40px 0px",
              display: "flex",
              justifyContent: { md: "flex-end", xs: "center" },
              gap: "10px",
            }}
          >
            <CommonButton
              sx={{
                backgroundColor: "#F2B705",
                color: "#fff",
                padding: "5px 30px",
              }}
            >
              Save
            </CommonButton>
            <CommonButton
              sx={{
                border: "1px solid #F2B705",
                color: "#000",
                padding: "5px 30px",
              }}
            >
              Close
            </CommonButton>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default EditBooking;
