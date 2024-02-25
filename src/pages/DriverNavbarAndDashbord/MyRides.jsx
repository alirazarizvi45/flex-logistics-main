import React from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  Divider,
  Box,
  Stack,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import goll from "../../assets/1.png";
import CommonButton from "../../components/CommonButton";
const data = [
  {
    client: "Fiza Zahra",
    date: "6/2/2024",
    time: "1 hr",
    pickup: "123 ABC Street, Nairobi",
    dropOff: "Airport South Road, Embakasi, Nairobi",
    rating: 2.5,
    price: "456 ksh",
  },
  {
    client: "Fiza Zahra",
    date: "6/2/2024",
    time: "1 hr",
    pickup: "123 ABC Street, Nairobi",
    dropOff: "Airport South Road, Embakasi, Nairobi",
    rating: 2.5,
    price: "456 ksh",
  },
  {
    client: "Fiza Zahra",
    date: "6/2/2024",
    time: "1 hr",
    pickup: "123 ABC Street, Nairobi",
    dropOff: "Airport South Road, Embakasi, Nairobi",
    rating: 2.5,
    price: "456 ksh",
  },
  {
    client: "Fiza Zahra",
    date: "6/2/2024",
    time: "1 hr",
    pickup: "123 ABC Street, Nairobi",
    dropOff: "Airport South Road, Embakasi, Nairobi",
    rating: 2.5,
    price: "456 ksh",
  },
  {
    client: "Fiza Zahra",
    date: "6/2/2024",
    time: "1 hr",
    pickup: "123 ABC Street, Nairobi",
    dropOff: "Airport South Road, Embakasi, Nairobi",
    rating: 2.5,
    price: "456 ksh",
  },
];
const data2 = [];
const MyRides = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-between"
          mt={"50px"}
        >
          <Typography variant="h3" color="#000">
            History
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              marginTop: { md: "inherit", xs: "20px" },
              gap: 1,
            }}
          >
            <Button
              sx={{
                background: "#373A41",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  background: "#373A41",
                  color: "#fff",
                },
              }}
            >
              Today
            </Button>
            <Button
              sx={{
                background: "#F1F1F1",
                textTransform: "none",
                color: "#000",
                "&:hover": {
                  background: "#373A41",
                  color: "#fff",
                },
              }}
            >
              Last week
            </Button>
            <Button
              sx={{
                background: "#F1F1F1",
                textTransform: "none",
                color: "#000",
                "&:hover": {
                  background: "#373A41",
                  color: "#fff",
                },
              }}
            >
              Last month
            </Button>
            <Button
              sx={{
                background: "#F1F1F1",
                textTransform: "none",
                color: "#000",
                "&:hover": {
                  background: "#373A41",
                  color: "#fff",
                },
              }}
            >
              Last year
            </Button>
          </Box>
        </Stack>

        <Grid
          container
          sx={{
            borderRadius: "5px",
            boxShadow:
              "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
            padding: "40px 20px ",
            background: "#fff",
            mt: "20px",
          }}
        >
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                mt: "20px",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: { md: "row", xs: "column" },
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography variant="h3" color="#373A41">
                  7
                </Typography>
                <Typography variant="subtitle1" color="#373A41">
                  Total No of Rides
                </Typography>
              </Box>
              <Divider
                sx={{
                  position: { md: "absolute", xs: "none" },
                  top: 0,
                  right: 0,
                  height: { md: "50px", xs: "2px" },
                  width: { md: "1px", xs: "100px" },
                  background: "linear-gradient(to bottom,#FAE39C, #F2B705 )",
                }}
              />
            </Box>
          </Grid>

          <Grid item md={3} xs={12}>
            <Box
              sx={{
                mt: "20px",
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                justifyContent: "space-evenly",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography variant="h3" color="#33C600">
                  6
                </Typography>
                <Typography variant="subtitle1" color="#373A41">
                  Completed Rides
                </Typography>
              </Box>
              <Divider
                sx={{
                  position: { md: "absolute", xs: "none" },
                  top: 0,
                  right: 0,
                  height: { md: "50px", xs: "2px" },
                  width: { md: "2px", xs: "100px" },
                  background: "linear-gradient(to bottom,#FAE39C, #F2B705 )",
                }}
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                mt: "20px",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: { md: "row", xs: "column" },
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography variant="h3" color="#FA511C">
                  1
                </Typography>
                <Typography variant="subtitle1" color="#373A41">
                  Cancel Rides
                </Typography>
              </Box>
              <Divider
                sx={{
                  position: { md: "absolute", xs: "none" },
                  top: 0,
                  right: 0,
                  height: { md: "50px", xs: "2px" },
                  width: { md: "1px", xs: "100px" },
                  background: "linear-gradient(to bottom,#FAE39C, #F2B705 )",
                }}
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                mt: "20px",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: { md: "row", xs: "column" },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography variant="h3" color="#373A41">
                  100+
                </Typography>
                <Typography variant="subtitle1" color="#373A41">
                  Positive Reviews
                </Typography>
              </Box>
              <Divider
                sx={{
                  position: { md: "absolute", xs: "none" },
                  top: 0,
                  right: 0,
                  height: { md: "50px", xs: "2px" },
                  width: { md: "1px", xs: "100px" },
                  background: "linear-gradient(to bottom,#FAE39C, #F2B705 )",
                  display: { md: "none", xs: "block" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {data.map((item, index) => (
              <Box
                key={index}
                sx={{
                  padding: "30px",
                  background: "#fff",
                  mt: "20px",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },

                  gap: "20px",
                  alignItems: "center",
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },

                    justifyContent: "space-between",

                    width: "100%",
                    gap: { md: "inherit", xs: "10px" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { md: "space-between", xs: "center" },
                      gap: 2,
                    }}
                  >
                    <img src={goll} alt="" />

                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#373A41", fontWeight: "600" }}
                      >
                        Client
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: "#373A41" }}>
                        {item.client}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "column", xs: "row" },

                      justifyContent: { md: "unset", xs: "center" },
                      alignItems: { md: "unset", xs: "center" },
                      gap: { md: "unset", xs: "20px" },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#373A41", fontWeight: "600" }}
                    >
                      Date
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "#373A41" }}>
                      {item.date}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "column", xs: "row" },

                      justifyContent: { md: "unset", xs: "center" },
                      alignItems: { md: "unset", xs: "center" },
                      gap: { md: "unset", xs: "20px" },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#373A41", fontWeight: "600" }}
                    >
                      Time
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "#373A41" }}>
                      {item.time}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      justifyContent: { md: "unset", xs: "center" },
                      alignItems: { md: "unset", xs: "center" },
                      gap: { md: "unset", xs: "10px" },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#373A41", fontWeight: "600" }}
                    >
                      Pickup
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "#373A41" }}>
                      {item.pickup}
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },

                    justifyContent: "space-between",

                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      justifyContent: { md: "unset", xs: "center" },
                      alignItems: { md: "unset", xs: "center" },
                      gap: { md: "unset", xs: "10px" },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#373A41", fontWeight: "600" }}
                    >
                      Drop off
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "#373A41" }}>
                      {item.dropOff}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      justifyContent: { md: "unset", xs: "center" },
                      alignItems: { md: "unset", xs: "center" },
                      gap: { md: "unset", xs: "10px" },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#373A41", fontWeight: "600" }}
                    >
                      Rating
                    </Typography>
                    <Typography>
                      <Rating
                        name={`rating-${index}`}
                        defaultValue={item.rating}
                        precision={0.5}
                      />
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "column", xs: "row" },

                      justifyContent: { md: "unset", xs: "center" },
                      alignItems: { md: "unset", xs: "center" },
                      gap: { md: "unset", xs: "20px" },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#373A41", fontWeight: "600" }}
                    >
                      Price
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "#373A41" }}>
                      {item.price}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MyRides;
