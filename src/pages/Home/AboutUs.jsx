import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import rikshaw from "../../assets/rikshaw.png";
import car from "../../assets/car.png";
import { Element } from "react-scroll";
const AboutUs = () => {
  return (
    <>
      <Element name="about-us" className="element">
        <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={rikshaw}
                alt="rikshaw"
                style={{ width: "25px", height: "25px", objectFit: "contain" }}
              />
              <Typography
                variant="h4"
                color="#F2B705 "
                letterSpacing={4}
                textTransform="uppercase"
              >
                About Us
              </Typography>
            </Box>
            <Grid container spacing={{ md: 15, xs: 4 }}>
              <Grid item md={5} xs={12}>
                <Typography variant="h2" color="#373A41" mt={1}>
                  Introducing{" "}
                  <span style={{ color: "#F2B705" }}> Flex Logistics </span> –
                  Your Trusted Ride Partner!
                </Typography>
                <Typography variant="subtitle1" color="#5A5A5A" mt={1}>
                  Explore city travel effortlessly with Flex Logistics! From
                  reliable TukTuks to, buses, vans, and cars, we've got your
                  journey covered. Our safety-focused drivers make booking easy
                  peasy for a hassle-free ride through the city. Join us at Flex
                  Logistics!
                </Typography>
              </Grid>
              <Grid item md={7} xs={12}>
                <img
                  src={car}
                  alt="car"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Element>
    </>
  );
};

export default AboutUs;
