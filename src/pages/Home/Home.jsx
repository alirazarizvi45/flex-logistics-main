import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";
import React from "react";
import landingFlexLogistics from "../../assets/landingFlexLogistics.png";
import { CustomizeInput } from "../../components/CustomizeInput";
import PlaceIcon from "@mui/icons-material/Place";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import CommonButton from "../../components/CommonButton";
import AboutUs from "./AboutUs";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${landingFlexLogistics})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "auto",

          width: "100%",
        }}
      >
        <Container maxWidth="lg" sx={{ marginTop: "10px" }}>
          <Box
            sx={{
              textAlign: "center",
              padding: { md: "150px 80px ", xs: "100px 20px 200px 20px " },
            }}
          >
            <Typography variant="h1">
              Elevate Your Commute with{" "}
              <span style={{ color: "#F2B705" }}> Flex Logistics</span>
            </Typography>
            <Typography variant="h4" mt={2} color="#F3F3F3">
              Unlock Seamless Travel Across Kenya with Flex Logistics
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container
        maxWidth="md"
        sx={{
          marginTop: { md: "-100px", xs: "-160px" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F2B705",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Box>
                <Typography variant="h4" color="#373A41" pb={2}>
                  Current Location
                </Typography>
                <CustomizeInput
                  fullWidth
                  placeholder="Street, Postal code"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PlaceIcon sx={{ color: "#000000" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <MyLocationIcon sx={{ color: "#000000" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <Typography variant="h4" color="#373A41" pb={2}>
                  Destination Location
                </Typography>
                <CustomizeInput
                  fullWidth
                  placeholder="Street, Postal code"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PlaceIcon sx={{ color: "#000000" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <MyLocationIcon sx={{ color: "#000000" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <CommonButton
              fullWidth
              sx={{
                backgroundColor: "#373A41",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "1px solid #828282",
                  color: "#000000",
                },
              }}
            >
              Book Now
            </CommonButton>
          </Box>
        </Box>
      </Container>
      <AboutUs />
    </>
  );
};

export default Home;
