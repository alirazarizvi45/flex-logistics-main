import { Box, Container, Typography } from "@mui/material";
import React from "react";
import enjoytheride from "../../assets/enjoytheride.png";
import CommonButton from "../../components/CommonButton";
import { Link } from "react-router-dom";
const EnjoyTheRide = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${enjoytheride})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          minHeight: "80vh",
          width: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              paddingTop: { md: "110px", xs: "50px" },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="h2" color="#fff">
                Take Charge or Enjoy the Ride with
                <span style={{ color: "#F2B705" }}> Flex Logistics </span>
              </Typography>
              <Typography variant="subtitle2" mt={2} lineHeight={1.5}>
                Turn the Key to Freedom: Drive with Us or Hop On for a Joyful
                Ride – Your City, Your Rules!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <CommonButton
                to="/BecomeDriver"
                component={Link}
                sx={{
                  backgroundColor: "#F2B705",
                  color: "#fff",
                  padding: "5px 30px",
                  textTransform: "none",
                }}
              >
                Become a Driver
              </CommonButton>
              <CommonButton
                to="/BookRide"
                component={Link}
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid #F2B705",
                  padding: "5px 40px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#F2B705",
                  },
                }}
              >
                Book a Ride
              </CommonButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default EnjoyTheRide;
