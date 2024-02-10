import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../components/CommonButton";
import loginbg from "../../assets/loginbg.png";
import driver from "../../assets/driver.png";
import rider from "../../assets/rider.png";
import RiderSignUpMain from "../RiderSignUp/RiderSignUpMain";
import DriverSignUpMain from "../DriverSignUp/DriverSignUpMain";
import { Link } from "react-router-dom";

const MainSignUp = () => {
  const RiderSignUps = [<RiderSignUpMain />];
  const DriverSignUps = [<DriverSignUpMain />];
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${loginbg})`,
          backgroundPosition: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: { md: "100% 100%", xs: "100% 50%" },
          backgroundColor: "#373A41",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Container maxWidth="lg" sx={{ paddingTop: "100px" }}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: { sm: "center", xs: "unset" },
              alignItems: "center",
            }}
          >
            <Grid item xs={9}>
              <Box>
                <Typography variant="h2" color="#fff">
                  Sign up
                </Typography>
                <Divider
                  sx={{
                    width: { sm: "15%", xs: "30%" },
                    background: "linear-gradient(to right, #F2B705, #373A41)",
                    height: "2px",

                    marginTop: "15px",
                  }}
                />
              </Box>
              <Typography variant="subtitle2" fontWeight="bold" pt={5}>
                Please select your role
              </Typography>
              <Box
                sx={{
                  pt: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <CommonButton
                  to="/Driver SignUp"
                  component={Link}
                  startIcon={
                    <img
                      src={driver}
                      alt=""
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "contain",
                      }}
                    />
                  }
                  sx={{
                    width: { sm: 200, xs: 240 },
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #F2B705",
                    padding: "5px 30px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  As a Driver
                </CommonButton>
                <CommonButton
                  to="/Rider SignUp"
                  component={Link}
                  startIcon={
                    <img
                      src={rider}
                      alt=""
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "contain",
                      }}
                    />
                  }
                  sx={{
                    width: { sm: 200, xs: 240 },
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #F2B705",
                    padding: "5px 30px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  As a Rider
                </CommonButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MainSignUp;
