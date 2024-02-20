import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import flagkenya from "../../../assets/flagkenya.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import theme from "../../../theme";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CustomizeInput } from "../../../components/CustomizeInput";
import map from "../../../assets/map1.png";
const BookRide = () => {
  const [selectCity, setselectCity] = useState("City to city");
  const [pickupTime, setPickupTime] = useState("Now");
  const [SelectPayment, setSelectPayment] = useState("");

  const handleChange = (event) => {
    setselectCity(event.target.value);
  };
  const handlePickupTime = (event) => {
    setPickupTime(event.target.value);
  };
  const handleSelectPayment = (event) => {
    setSelectPayment(event.target.value);
  };
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
          <img
            src={flagkenya}
            alt="flagkenya"
            style={{ width: "50px ", height: "50px", objectFit: "contain" }}
          />
          <Typography variant="h3" color="#707278">
            Kenya
          </Typography>
          <IconButton>
            <PlayArrowIcon sx={{ color: "#000" }} />
          </IconButton>
          <Typography variant="h3" color="#373A41">
            Nairobi
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                margin: "20px 0px",
              }}
            >
              <FormControl sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",

                    gap: { lg: "80px", md: "70px", sm: "115px", xs: "20px" },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#373A41",
                        fontWeight: "bold",
                        fontFamily: theme.typography.subtitle1.fontFamily,
                      }}
                    >
                      Travel Type
                    </Typography>
                  </Box>
                  <Box>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      row
                      value={selectCity}
                      onChange={handleChange}
                      defaultValue="City to city"
                    >
                      <FormControlLabel
                        value="City to city"
                        label={
                          <Typography
                            sx={{
                              color: "#000",
                            }}
                          >
                            City to city
                          </Typography>
                        }
                        control={
                          <Radio
                            checkedIcon={
                              <RadioButtonUncheckedIcon
                                sx={{
                                  color:
                                    selectCity === "City to city"
                                      ? "#1980F9"
                                      : "black",
                                }}
                              />
                            }
                          />
                        }
                      />
                      <FormControlLabel
                        value="In city"
                        label={
                          <Typography
                            sx={{
                              color: "#000",
                            }}
                          >
                            In city
                          </Typography>
                        }
                        control={
                          <Radio
                            checkedIcon={
                              <RadioButtonUncheckedIcon
                                sx={{
                                  color:
                                    selectCity === "In city"
                                      ? "#1980F9"
                                      : "black",
                                }}
                              />
                            }
                          />
                        }
                      />
                    </RadioGroup>
                  </Box>
                </Box>
              </FormControl>
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={2}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="#373A41"
                  >
                    Pickup Location
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="#373A41"
                    pt={8}
                  >
                    Drop off / stop
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <RadioButtonUncheckedIcon sx={{ color: "#00A206" }} />
                  <Divider
                    orientation="vertical"
                    sx={{
                      height: "60%",

                      border: "1px dashed #373A41",
                    }}
                  />
                  <AddCircleIcon sx={{ color: "#373A41" }} />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  width: "70%",
                }}
              >
                <CustomizeInput placeholder="Search for a location" fullWidth />
                <CustomizeInput placeholder="Search for a location" fullWidth />
              </Box>
            </Stack>

            <Box
              sx={{
                margin: "20px 0px",
              }}
            >
              <FormControl sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",
                    gap: { lg: "75px", md: "65px", sm: "110px", xs: "20px" },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#373A41",
                        fontWeight: "bold",
                        fontFamily: theme.typography.subtitle1.fontFamily,
                      }}
                    >
                      Pick up time
                    </Typography>
                  </Box>
                  <Box>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      row
                      value={pickupTime}
                      onChange={handlePickupTime}
                      defaultValue="Now"
                    >
                      <FormControlLabel
                        value="Now"
                        label={
                          <Typography
                            sx={{
                              color: "#000",
                            }}
                          >
                            Now
                          </Typography>
                        }
                        control={
                          <Radio
                            checkedIcon={
                              <RadioButtonUncheckedIcon
                                fontSize="large"
                                sx={{
                                  color:
                                    pickupTime === "Now" ? "#1980F9" : "black",
                                }}
                              />
                            }
                          />
                        }
                      />
                      <FormControlLabel
                        value="Later"
                        label={
                          <Typography
                            sx={{
                              color: "#000",
                            }}
                          >
                            Later
                          </Typography>
                        }
                        control={
                          <Radio
                            checkedIcon={
                              <RadioButtonUncheckedIcon
                                sx={{
                                  color:
                                    pickupTime === "Later"
                                      ? "#1980F9"
                                      : "black",
                                }}
                              />
                            }
                          />
                        }
                      />
                    </RadioGroup>
                  </Box>
                </Box>
              </FormControl>
            </Box>

            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                justifyContent: "space-between",
                gap: { lg: "0px", md: "35px" },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#373A41",
                    fontWeight: "bold",
                    fontFamily: theme.typography.subtitle1.fontFamily,
                  }}
                >
                  Payment Method
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "70%",
                }}
              >
                <FormControl fullWidth>
                  <Select
                    value={SelectPayment}
                    onChange={handleSelectPayment}
                    placeholder="Select payment method"
                    fullWidth
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000000",
                      "& .MuiSelect-icon": {
                        color: "#000000",
                      },
                    }}
                  >
                    <MenuItem value="City one" sx={{ color: "#000000" }}>
                      City one
                    </MenuItem>
                    <MenuItem value=" City Two " sx={{ color: "#000000" }}>
                      City Two
                    </MenuItem>
                    <MenuItem value="City Three" sx={{ color: "#000000" }}>
                      City Three
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <img
                src={map}
                alt="map"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookRide;
