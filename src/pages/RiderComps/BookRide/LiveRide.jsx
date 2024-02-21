import {
  Box,
  Typography,
  Grid,
  Stack,
  Divider,
  Card,
  CardContent,
  Avatar,
  Rating,
  Button,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AdjustIcon from "@mui/icons-material/Adjust";
import mercedes from "../../../assets/mercedes.png";

import ridedetailmap from "../../../assets/ridedetailmap.png";
import ShareIcon from "@mui/icons-material/Share";

export const LiveRide = () => {
  return (
    <Grid container spacing={2} justifyContent="space-between">
      <Grid item xs={12} md={12} lg={5}>
        <Card>
          <CardContent color="rgba(255, 255, 255, 1);">
            <Box display="flex" flexDirection="row">
              <Stack direction="column" alignItems="center" ml={4}>
                <AdjustIcon sx={{ color: "#EA3800" }} />
                <Divider
                  orientation="vertical"
                  sx={{
                    height: "30%",

                    border: "1px dashed #373A41",
                  }}
                />
                <LocationOnIcon sx={{ color: "#F2B705" }} />
              </Stack>
              <Box display="flex" flexDirection="column" flexWrap="word-wrap">
                <Typography color="rgba(90, 90, 90, 1)">
                  123 ABC Street, Nairobi
                </Typography>
                <Typography color="rgba(90, 90, 90, 1)" mt={3.5} mb={3}>
                  Airport South Road, Embakasi, Nairobi
                </Typography>
              </Box>
            </Box>
            <Divider color="rgba(55, 58, 65, 1)" />
            <Box display="flex" flexDirection="column" mt={2} ml={2}>
              <Typography color="rgba(55, 58, 65, 1)" variant="h4">
                Driver
              </Typography>
              <Box display="flex" flexDirection="row" mt={1} flexGrow={1}>
                <Avatar
                  src="../src/assets/Ellipse 84.png"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                ></Avatar>
                <Box
                  display="flex"
                  flexDirection="column"
                  ml={2}
                  mt={1}
                  flexGrow={1}
                >
                  <Typography color="customBlack.main" variant="h5">
                    Nyambura Wanjiru
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Rating value={5} readOnly size="small" />
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      ml={1}
                    >
                      (5)
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                  <img
                    src={mercedes}
                    alt="mercedes"
                    style={{
                      width: "70%",
                      height: "70%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
              <Typography color="rgba(55, 58, 65, 1)" variant="h5" mt={2}>
                Booking Id #11523u634783478
              </Typography>
              <Box display="flex" flexDirection="column" flexGrow={1} mt={1}>
                <Box display="flex" flexDirection="row" flexGrow={1} mb={1}>
                  <Typography color="rgba(90, 90, 90, 1)" flexGrow={1}>
                    Distance Travelled
                  </Typography>
                  <Typography color="rgba(55, 58, 65, 1)" mr={4}>
                    12 Km
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" flexGrow={1} mb={1}>
                  <Typography color="rgba(90, 90, 90, 1)" flexGrow={1}>
                    Time Taken
                  </Typography>
                  <Typography color="rgba(55, 58, 65, 1)" mr={4}>
                    15 Min
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" flexGrow={1} mb={1}>
                  <Typography color="rgba(90, 90, 90, 1)" flexGrow={1}>
                    Cost per km
                  </Typography>
                  <Typography color="rgba(55, 58, 65, 1)" mr={4}>
                    10.56 ksh
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" flexGrow={1} mb={1}>
                  <Typography color="rgba(90, 90, 90, 1)" flexGrow={1}>
                    Distance Fare
                  </Typography>
                  <Typography color="rgba(55, 58, 65, 1)" mr={4}>
                    0.56 ksh
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" flexGrow={1} mb={1}>
                  <Typography color="rgba(90, 90, 90, 1)" flexGrow={1}>
                    Base Fare
                  </Typography>
                  <Typography color="rgba(55, 58, 65, 1)" mr={4}>
                    1.56 ksh
                  </Typography>
                </Box>
                <Divider />
                <Box
                  display="flex"
                  flexDirection="row"
                  flexGrow={1}
                  mb={1}
                  mt={1}
                >
                  <Typography color="rgba(90, 90, 90, 1)" flexGrow={1}>
                    Sub Total
                  </Typography>
                  <Typography color="rgba(55, 58, 65, 1)" mr={4}>
                    128.84 ksh
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" flexGrow={1} mb={1}>
                  <Typography color="rgba(90, 90, 90, 1)" flexGrow={1}>
                    Tax
                  </Typography>
                  <Typography color="rgba(55, 58, 65, 1)" mr={4}>
                    12 ksh
                  </Typography>
                </Box>
                <Divider />
                <Box
                  display="flex"
                  flexDirection="row"
                  flexGrow={1}
                  mb={1}
                  mt={1}
                >
                  <Typography color="rgba(90, 90, 90, 1)" flexGrow={1}>
                    Total
                  </Typography>
                  <Typography color="rgba(55, 58, 65, 1)" mr={4}>
                    140.84 ksh
                  </Typography>
                </Box>
                <Divider />
                <Box
                  display="flex"
                  flexDirection="row"
                  flexGrow={1}
                  mb={1}
                  mt={1}
                >
                  <Typography color="rgba(90, 90, 90, 1)" flexGrow={1}>
                    Payment Type
                  </Typography>
                  <Typography color="rgba(55, 58, 65, 1)" mr={4}>
                    Cash
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" mt={2}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  sx={{
                    color: "white",
                    textTransform: "none",
                    padding: "7px", // Adjust padding as needed
                    margin: "5px",
                  }}
                >
                  Proceed to pay
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={7}>
        <Box style={{ width: "100%", height: "100%", position: "relative" }}>
          <img
            src={ridedetailmap}
            alt="ridedetailmap"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<ShareIcon />}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              color: "white",
            }}
          >
            Share Location
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
