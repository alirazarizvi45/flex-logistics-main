import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import mingcuteCar from "../../assets/mingcuteCar.png";
import call from "../../assets/call.png";
import destination from "../../assets/destination.png";
import smile from "../../assets/smile.png";
import linebg from "../../assets/linebg.png";
import CommonButton from "../../components/CommonButton";

const services = [
  {
    img: call,
    title: "Give us a call",
    description:
      "Select between our different vehicles based on your preference.",
  },
  {
    img: destination,
    title: "Set Your Destination",
    description:
      "Input your destination details for a seamless matching process.",
  },
  {
    img: smile,
    title: "Enjoy your ride",
    description:
      "With a click, confirm your booking, & your reliable driver will be en route.",
  },
];
const HowItWokrs = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${linebg})`,
          backgroundPosition: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          minHeight: { md: "70vh", xs: "100vh" },
        }}
      >
        <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <img
              src={mingcuteCar}
              alt="solarbus"
              style={{ width: "25px", height: "25px", objectFit: "contain" }}
            />
            <Typography
              variant="h4"
              color="#F2B705"
              textTransform="uppercase"
              letterSpacing={2}
            >
              HOW IT WORK
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              textAlign="center"
              color="#373A41"
              fontWeight="bolder"
              pt={1}
            >
              How to Book a Ride in three easy steps
            </Typography>
            <Typography
              variant="subtitle2"
              fontSize="17px"
              color="#5A5A5A"
              pt={1}
            >
              Effortless Journey Planning in Three Simple Steps
            </Typography>
          </Box>

          <Grid container spacing={2} mt={3}>
            {services.map((item, index) => (
              <Grid item md={4} xs={12}>
                <Box
                  sx={{
                    padding: "40px 20px",
                    borderRadius: "10px",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={item.img}
                      alt="call"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                      }}
                    />
                    <Typography variant="h4" color="#000000" mt={2}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      textAlign="center"
                      color="#5A5A5A"
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
                {index !== services.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      marginTop: { md: "-185px", xs: "0px" },
                      marginLeft: { lg: "213px", md: "180px", xs: "0px" },
                      display: { md: "block", xs: "none" },
                    }}
                  >
                    <Typography color="#373A41">
                      --------------------------------------------
                    </Typography>
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CommonButton
              sx={{
                backgroundColor: "#F2B705",
                color: "#fff",
                padding: "5px 50px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "1px solid #F2B705",
                  color: "#000000",
                },
              }}
            >
              Book Now
            </CommonButton>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HowItWokrs;
