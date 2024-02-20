import {
  Box,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import availableridemap from "../../../assets/availableridemap.png";
import mercedes from "../../../assets/mercedes.png";
import tuktuk from "../../../assets/tuktuk.png";
import nissan from "../../../assets/nissan.png";
import CommonButton from "../../../components/CommonButton";
const AvailableRides = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="h3" color="#373A41">
            Available Rides
          </Typography>
          <IconButton>
            <PlayArrowIcon sx={{ color: "#000" }} />
          </IconButton>
        </Box>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                boxShadow:
                  "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
                padding: " 30px 20px",
                borderRadius: "7px",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: { sm: "row", xs: "column" },
                  justifyContent: { sm: "space-between", xs: "center" },
                  alignItems: { sm: "inherit", xs: "center" },

                  gap: { sm: "0px", xs: "20px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <img
                      src={mercedes}
                      alt="mercedes"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "5px",
                      }}
                    >
                      <Typography variant="h4" color="#373A41">
                        Mercedes
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight="light"
                        color="#373A41"
                      >
                        6 Person
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",

                        gap: "5px",
                      }}
                    >
                      <Typography variant="h4" color="#373A41">
                        Juma Mwangi
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
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h3" color="#F2B705">
                    656 Ksh
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#373A41"
                    textAlign="right"
                  >
                    6 min away
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  marginTop: "20px",
                  textAlign: "right",
                }}
              >
                <CommonButton>Book Now</CommonButton>
              </Box>
            </Box>

            <Box
              sx={{
                boxShadow:
                  "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
                padding: " 30px 20px",
                borderRadius: "7px",
                marginTop: "20px",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: { sm: "row", xs: "column" },
                  justifyContent: { sm: "space-between", xs: "center" },
                  alignItems: { sm: "inherit", xs: "center" },

                  gap: { sm: "0px", xs: "20px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <img
                      src={tuktuk}
                      alt="tuktuk"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "5px",
                      }}
                    >
                      <Typography variant="h4" color="#373A41">
                        Tuktuk
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight="light"
                        color="#373A41"
                      >
                        3 Person
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",

                        gap: "5px",
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
                          defaultValue={4}
                          precision={0.5}
                        />
                        <Typography variant="subtitle1" color="#373A41">
                          (4)
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h3" color="#F2B705">
                    456 Ksh
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#373A41"
                    textAlign="right"
                  >
                    6 min away
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  marginTop: "20px",
                  textAlign: "right",
                }}
              >
                <CommonButton>Book Now</CommonButton>
              </Box>
            </Box>

            <Box
              sx={{
                boxShadow:
                  "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
                padding: " 30px 20px",
                borderRadius: "7px",
                marginTop: "20px",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: { sm: "row", xs: "column" },
                  justifyContent: { sm: "space-between", xs: "center" },
                  alignItems: { sm: "inherit", xs: "center" },

                  gap: { sm: "0px", xs: "20px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",

                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <img
                      src={nissan}
                      alt="nissan"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "5px",
                      }}
                    >
                      <Typography variant="h4" color="#373A41">
                        Nisan
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight="light"
                        color="#373A41"
                      >
                        14 Person
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",

                        gap: "5px",
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
                          defaultValue={4}
                          precision={0.5}
                        />
                        <Typography variant="subtitle1" color="#373A41">
                          (4.0)
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h3" color="#F2B705">
                    1056 Ksh
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#373A41"
                    textAlign="right"
                  >
                    6 min away
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  marginTop: "20px",
                  textAlign: "right",
                }}
              >
                <CommonButton>Book Now</CommonButton>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <img
                src={availableridemap}
                alt="availableridemap"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AvailableRides;