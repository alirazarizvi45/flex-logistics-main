import React from "react";
import { Box, Button, Grid, Rating, Stack, Typography } from "@mui/material";
import ridedetailmap from "../../../assets/ridedetailmap.png";
import Nyambura from "../../../assets/nyambura.png";
import ChatIcon from "@mui/icons-material/Chat";
import PhoneIcon from "@mui/icons-material/Phone";
import CommonButton from "../../../components/CommonButton";
const RideDetail = () => {
  return (
    <>
      <Box
        sx={{
          background: "#F9F9F9",

          borderRadius: "7px ",
          border: "1px solid #373A41",
        }}
      >
        <Box
          sx={{
            background: "#373A41",
            height: "60px",
            width: "100%",
            borderRadius: "5px 5px 0px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "#fff", textAlign: "center" }}>
            Ride Detail
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "20px",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Grid item md={5} xs={12}>
              <Box>
                <Typography variant="h4" color="#707278" mb={4}>
                  Your Ride is 5 mins away
                </Typography>
              </Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <Box>
                  <img
                    src={Nyambura}
                    alt="Nyambura"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      gap: "10px",
                    }}
                  >
                    <Typography variant="h4" color="#373A41">
                      Nyambura Wanjiru
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Rating
                        name="half-rating"
                        defaultValue={5}
                        precision={0.5}
                      />
                      <Typography variant="subtitle1" color="#373A41">
                        (4.5)
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      startIcon={<PhoneIcon />}
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
                  </Box>
                  <Box
                    sx={{
                      marginTop: "20px",
                    }}
                  >
                    <Typography variant="h4" color="#373A41">
                      Vehicle Detail:
                    </Typography>
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          color="#373A41"
                          fontWeight={600}
                        >
                          Name:
                        </Typography>
                        <Typography variant="subtitle1" color="#373A41">
                          Number:
                        </Typography>
                        <Typography variant="subtitle1" color="#373A41">
                          Model:
                        </Typography>
                        <Typography variant="subtitle1" color="#373A41">
                          color:
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="subtitle1" color="#373A41">
                          Mercedes
                        </Typography>
                        <Typography variant="subtitle1" color="#373A41">
                          kdk 1024
                        </Typography>
                        <Typography variant="subtitle1" color="#373A41">
                          EleganceXpress
                        </Typography>
                        <Typography variant="subtitle1" color="#373A41">
                          Grey
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Grid>
            <Grid item md={7} xs={12}>
              <Box>
                <img
                  src={ridedetailmap}
                  alt="ridedetailmap"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <CommonButton
              sx={{
                backgroundColor: "transparent",
                color: "#000",
                border: "1px solid #F2B705  ",
                textTransform: "none",
              }}
            >
              Cancel Booking
            </CommonButton>
            <CommonButton>Done</CommonButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RideDetail;
