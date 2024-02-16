import { Box, Container, Stack } from "@mui/system";
import React from "react";
import map from "../../assets/map1.png";
import profilelogo from "../../assets/profilelogo.png";
import goll from "../../assets/redgol.png";
import loaction from "../../assets/location.png";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button, Divider, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import PhoneIcon from "@mui/icons-material/Phone";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const DriverDashboardHome = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h3" sx={{ color: "#000" }} pb={2}>
              Current Ride
            </Typography>
            <Grid container spacing={8}>
              <Grid item md={8} xs={12}>
                <img src={map} alt="" width="100%" height="100%" />
              </Grid>

              <Grid item md={4} xs={12}>
                <Box
                  sx={{
                    width: "261px",
                    height: "501px",
                    background: "#fff",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  <Box sx={{ position: "relative", bottom: "70px" }}>
                    <img src={profilelogo} alt="profilelogo" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ color: "#41C213", width: "15px" }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ fontSize: "12px", color: "#000" }}
                      >
                        Online
                      </Typography>
                    </Box>

                    <Typography
                      variant="subtitle2"
                      color="#000"
                      fontWeight="bold"
                      mt={2}
                    >
                      Fiza Zahra{" "}
                    </Typography>
                    <Typography variant="subtitle1" color="#000">
                      Nairobi, Kenya
                    </Typography>

                    <Stack
                      sx={{ margin: "20px 0px" }}
                      spacing={1}
                      direction="row"
                      justifyContent="center"
                    >
                      <Button
                        startIcon={<PhoneIcon />}
                        sx={{
                          backgroundColor: "#41C213",
                          color: "#fff",
                          textTransform: "none",
                          padding: "10px 20px",
                          "&:hover": {
                            backgroundColor: "transparent",
                            border: "1px solid #41C213",
                            color: "#000",
                          },
                        }}
                      >
                        Call
                      </Button>
                      <Button
                        startIcon={<ChatIcon />}
                        sx={{
                          backgroundColor: "#373A41",
                          color: "#fff",
                          textTransform: "none",
                          padding: "10px 20px",
                          "&:hover": {
                            backgroundColor: "transparent",
                            border: "1px solid #373A41",
                            color: "#000",
                          },
                        }}
                      >
                        Chat
                      </Button>
                    </Stack>
                    <Divider sx={{ backgroundColor: "red", mt: "20px" }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <Stack direction="column" alignItems="center" mt={3}>
                        <AdjustIcon sx={{ color: "#EA3800" }} />
                        <Divider
                          orientation="vertical"
                          sx={{
                            height: "23%",

                            border: "1px dashed #373A41",
                          }}
                        />
                        <LocationOnIcon sx={{ color: "#F2B705" }} />
                      </Stack>
                      <Stack mt={3} spacing={3}>
                        <Typography variant="subtitle1" color="#5A5A5A">
                          123 ABC Street, Nairobi
                        </Typography>
                        <Typography variant="subtitle1" color="#5A5A5A">
                          Airport South Road, Embakasi, Nairobi
                        </Typography>
                      </Stack>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <Box mt={2}>
                        <Typography variant="subtitle1" color="#5A5A5A">
                          Distance
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="#5A5A5A"
                          fontWeight="bold"
                        >
                          12km
                        </Typography>
                      </Box>
                      <Box mt={2}>
                        <Typography variant="subtitle1" color="#5A5A5A">
                          Distance
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="#5A5A5A"
                          fontWeight="bold"
                        >
                          12km
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      fullWidth
                      sx={{
                        background: "#F2B705",
                        color: "#fff",
                        marginTop: "20px",
                        textTransform: "none",
                      }}
                    >
                      Start Ride
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DriverDashboardHome;
