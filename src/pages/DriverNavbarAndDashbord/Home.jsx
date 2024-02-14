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

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h2" sx={{ color: "#000" }} pb={2}>
            Current Ride
          </Typography>
          <Grid container spacing={4}>
            <Grid item md={8} xs={12}>
              <img src={map} alt="" width="100%" height="100%" />
            </Grid>
            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  width: "261px",
                  height: "501px",
                  background: "#EFEEEE",
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
              >
                <Box sx={{ position: "relative", bottom: "70px" }}>
                  <img src={profilelogo} alt="" />

                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: "12px", color: "#000" }}
                  >
                    Online
                  </Typography>
                  <h3>Fiza Zahra</h3>
                  <h3>Nairobi, Kenya</h3>
                  <Stack
                    sx={{ marginBottom: "30px" }}
                    spacing={1}
                    direction="row"
                    justifyContent="center"
                  >
                    <Button variant="outlined" startIcon={<PhoneIcon />}>
                      Call
                    </Button>
                    <Button variant="contained" startIcon={<ChatIcon />}>
                      Chat
                    </Button>
                  </Stack>
                  <Divider sx={{ backgroundColor: "red", mt: "20px" }} />
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Stack mt={3} spacing={6}>
                      <img src={goll} alt="" width="14px" height="14px" />
                      <img src={loaction} alt="" width="14px" height="14px" />
                    </Stack>
                    <Stack mt={3} spacing={5}>
                      <h4>123 ABC Street, Nairobi</h4>
                      <h4>Airport South Road, Embakasi, Nairobii</h4>
                    </Stack>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Box>
                      <h4>Distance</h4>
                      <h4>12km</h4>
                    </Box>
                    <Box>
                      <h4>Distance</h4>
                      <h4>12km</h4>
                    </Box>
                  </Box>

                  <Button sx={{ background: "yellow", width: "100%" }}>
                    Start Ride
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
