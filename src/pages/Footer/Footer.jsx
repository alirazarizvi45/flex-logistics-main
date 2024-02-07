import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import arrow from "../../assets/arrow.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import theme from "../../theme";
import { CustomizeInput } from "../../components/CustomizeInput";
import CommonButton from "../../components/CommonButton";
theme;
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#373A41",
        }}
      >
        <Container maxWidth="lg" sx={{ padding: "60px 30px" }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item md={3.5} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Typography variant="h3" color="#fff">
                  LOGO
                </Typography>
                <Typography variant="subtitle1" color="#DEDEDE">
                  At Flex Logistics, we take pride in being your go-to choice
                  for city commuting. Our commitment to reliability ensures that
                  you can count on us to be convenient, punctual, and always on
                  time.
                </Typography>
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="#fff"
                    fontFamily="theme.typography.subtitle1.fontFamily"
                  >
                    Follow Now
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <a href="">
                      <img
                        src={facebook}
                        alt=""
                        style={{
                          width: "28px",
                          height: "28px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                    <a href="">
                      <img
                        src={linkedin}
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                    <a href="">
                      <img
                        src={twitter}
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                    <a href="">
                      <img
                        src={instagram}
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={2.5} xs={6}>
              <Box
                sx={{
                  paddingBottom: "10px",
                }}
              >
                <Typography variant="h4" color="#fff">
                  Quick Links
                </Typography>
                <Divider
                  sx={{
                    width: "50%",
                    background: "linear-gradient(to right, #F2B705, #373A41)",
                    height: "2px",

                    marginTop: "15px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "30px",
                    }}
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Link
                    activeClass="active"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust offset as needed to account for navbar height
                  >
                    <Typography
                      variant="subtitle2"
                      color="#ECECEC"
                      sx={{ cursor: "pointer" }}
                    >
                      About us
                    </Typography>
                  </Link>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "30px",
                    }}
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Link
                    activeClass="active"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust offset as needed to account for navbar height
                  >
                    <Typography
                      variant="subtitle2"
                      color="#ECECEC"
                      sx={{ cursor: "pointer" }}
                    >
                      Services
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "30px",
                    }}
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Link
                    activeClass="active"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust offset as needed to account for navbar height
                  >
                    <Typography
                      variant="subtitle2"
                      color="#ECECEC"
                      sx={{ cursor: "pointer" }}
                    >
                      Booking
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "30px",
                    }}
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Link
                    activeClass="active"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust offset as needed to account for navbar height
                  >
                    <Typography
                      variant="subtitle2"
                      color="#ECECEC"
                      sx={{ cursor: "pointer" }}
                    >
                      FAQ’s
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item md={2.5} xs={6}>
              <Box
                sx={{
                  paddingBottom: "10px",
                }}
              >
                <Typography variant="h4" color="#fff">
                  Legal
                </Typography>
                <Divider
                  sx={{
                    width: "25%",
                    background: "linear-gradient(to right, #F2B705, #373A41)",
                    height: "2px",

                    marginTop: "15px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  marginTop: "8px",
                }}
              >
                <NavLink
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#ECECEC",
                    borderBottom: "none",
                    fontFamily: theme.typography.subtitle2.fontFamily,
                  }}
                >
                  Terms & Conditions
                </NavLink>
                <NavLink
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#ECECEC",
                    borderBottom: "none",
                    fontFamily: theme.typography.subtitle1.fontFamily,
                  }}
                >
                  Privacy Policy
                </NavLink>
                <NavLink
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#ECECEC",
                    borderBottom: "none",
                    fontFamily: theme.typography.subtitle1.fontFamily,
                  }}
                >
                  Cookie-Policy
                </NavLink>
              </Box>
            </Grid>
            <Grid item md={3.5} xs={12}>
              <Box
                sx={{
                  paddingBottom: "10px",
                }}
              >
                <Typography variant="h4" color="#fff">
                  Sign up for our Newsletter
                </Typography>
                <Divider
                  sx={{
                    width: "90%",
                    background: "linear-gradient(to right, #F2B705, #373A41)",
                    height: "2px",

                    marginTop: "15px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CustomizeInput placeholder="Enter Email" />
                  <CommonButton
                    sx={{
                      textTransform: "none",
                      backgroundColor: " #F2B705",
                      color: "#fff",
                      padding: "15px 30px 15px 30px",
                      marginLeft: "-5px",
                      borderRadius: "5px",
                      "&:hover": {
                        backgroundColor: " #F2B705",
                      },
                    }}
                  >
                    Subscribe
                  </CommonButton>
                </Box>
                <Box
                  sx={{
                    textTransform: "none",
                  }}
                >
                  <CommonButton fullWidth>Subscribe Now</CommonButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#191D22",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            padding: "20px 0px",
          }}
        >
          <Typography variant="subtitle2" textTransform="uppercase">
            All rights reserved by ©flex Logistic 2024
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
