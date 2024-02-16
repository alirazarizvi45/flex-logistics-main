import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import solarbus from "../../assets/solarbus.png";
import servicesbg from "../../assets/servicesbg.png";
import booking from "../../assets/booking.png";
import pricing from "../../assets/pricing.png";
import pricingtwo from "../../assets/pricingtwo.png";
import secure from "../../assets/secure.png";
import securetwo from "../../assets/securetwo.png";
import focused from "../../assets/focused.png";
import focusedtwo from "../../assets/focusedtwo.png";
import bookingtwo from "../../assets/bookingtwo.png";
import { Element } from "react-scroll";
const Services = () => {
  const [hoveredImages, setHoveredImages] = useState(new Array(4).fill(null));
  const services = [
    {
      img: booking,
      title: "Effortless Booking",
      description:
        "Simplify your commute with our user-friendly platform for easy every vehicle reservations.",
      hoverImg: bookingtwo,
    },
    {
      img: pricing,
      title: "Transparent Pricing",
      description:
        "Gain peace of mind with upfront, clear pricing – no surprises, just confidence in your ride cost.",
      hoverImg: pricingtwo,
    },
    {
      img: secure,
      title: "Safe and Secure Rides",
      description:
        "Prioritize safety with vetted drivers and stringent measures, ensuring reliable and secure journeys.",
      hoverImg: securetwo,
    },
    {
      img: focused,
      title: "User-Focused Experience",
      description:
        " Immerse yourself in a personalized travel experience with responsive support and tailored preferences.",
      hoverImg: focusedtwo,
    },
  ];
  const handleMouseEnter = (index) => {
    const newHoveredImages = [...hoveredImages];
    newHoveredImages[index] = services[index].hoverImg;
    setHoveredImages(newHoveredImages);
  };

  const handleMouseOut = (index) => {
    setHoveredImages((prevHoveredImages) => {
      const newHoveredImages = [...prevHoveredImages];
      newHoveredImages[index] = null;
      return newHoveredImages;
    });
  };
  return (
    <>
      <Element name="services" className="element">
        <Box
          sx={{
            backgroundImage: `url(${servicesbg})`,
            backgroundPosition: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            minHeight: "auto",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                paddingTop: { md: "200px", xs: "100px" },
                paddingBottom: "100px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={solarbus}
                  alt="solarbus"
                  style={{
                    width: "25px",
                    height: "25px",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="h4"
                  color="#F2B705"
                  textTransform="uppercase"
                  letterSpacing={4}
                >
                  Services
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
                  How to we stand out from others
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontSize="17px"
                  color="#5A5A5A"
                  pt={1}
                >
                  At Flex Logistics, our core values shape every aspect of our
                  service
                </Typography>
              </Box>
              <Grid container spacing={2} mt={3}>
                {services.map((item, index) => (
                  <Grid item md={3} xs={12} key={index}>
                    <Box
                      sx={{
                        backgroundColor: "#373A41",
                        padding: "40px 20px",
                        borderRadius: "10px",
                        "&:hover": {
                          backgroundColor: "#F2B705",
                        },
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseOut(index)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "10px",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                      >
                        <img
                          src={hoveredImages[index] || item.img}
                          alt="booking"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "contain",
                          }}
                        />
                        <Typography variant="h4" mt={2}>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" textAlign="center">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Element>
    </>
  );
};

export default Services;
