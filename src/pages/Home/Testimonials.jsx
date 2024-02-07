import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import rikshaw from "../../assets/rikshaw.png";
import commas from "../../assets/commas.png";
import nathan from "../../assets/nathan.png";
import stars from "../../assets/stars.png";

const Testimonials = () => {
  const clients = [
    {
      img: commas,
      title:
        "At Flex Logistics, we take pride in being your go-to choice for city commuting. Our commitment to reliability ensures that you can count on us to be convenient, punctual, and always on time.",
      person: nathan,
      name: "Nathan Chen",
      star: stars,
    },
    {
      img: commas,
      title:
        "Discover a new dimension in your daily travel routine with  Flex Logistics. We go beyond the ordinary by offering personalized options.",
      person: nathan,
      name: "Nathan Chen",
      star: stars,
    },
    {
      img: commas,
      title:
        "When it comes to stress-free city exploration, Flex Logistics stands out as the top choice. Our user-friendly booking system is designed to provide you with a seamless experience",
      person: nathan,
      name: "Nathan Chen",
      star: stars,
    },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#373A41",
          marginTop: 5,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              padding: "60px 40px 80px 40px",
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
                TESTIMONIALS
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="h2" color="#fff" pt={2}>
                What Client Say About
              </Typography>
              <Typography variant="h2" color="#F2B705">
                Flex Logistics
              </Typography>
            </Box>

            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
              mt={4}
            >
              {clients.map((client, index) => (
                <Grid item md={4} xs={12} key={index}>
                  <Box
                    sx={{
                      backgroundColor: "#FFFFFF",
                      padding: "20px",
                      borderRadius: "5px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <img
                        src={client.img}
                        alt="commas"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "contain",
                        }}
                      />
                      <Typography variant="subtitle1" color="#514949">
                        {client.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={client.person}
                        alt="nathan"
                        style={{
                          width: "30%",
                          objectFit: "contain",
                        }}
                      />

                      <Box>
                        <Typography
                          variant="subtitle1"
                          fontWeight="600"
                          color="#464343"
                        >
                          {client.name}
                        </Typography>
                        <img
                          src={client.star}
                          alt="stars"
                          sizes=""
                          style={{
                            width: "70%",

                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Testimonials;
