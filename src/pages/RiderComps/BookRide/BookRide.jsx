import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
  Skeleton,
} from "@mui/material";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";
import flagkenya from "../../../assets/flagkenya.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import theme from "../../../theme";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CommonButton from "../../../components/CommonButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import {
  saveTripRequestAsync,
  setTripInfo,
} from "../../../ReducerSlices/tripInfo/tripInfoSlice";
import { LocationDisabled } from "@mui/icons-material";
import {
  getNearbyDriversAsync,
  setNearbyDrivers,
} from "../../../ReducerSlices/nearbyDrivers/nearbyDriversSlice";
import { useSocket } from "../../../components/SocketContext";

const libraries = ["places"];
const defaultCenter = { lat: -1.2921, lng: 36.8219 }; // Nairobi coordinates

const BookRide = ({ handleNext }) => {
  const { user } = useSelector((state) => state.user);
  const { tripInfo } = useSelector((state) => state.tripInfo || {});
  const dispatch = useDispatch();
  const riderId = user?.id;
  const { socket } = useSocket();
  const [selectCity, setSelectCity] = useState("City to city");
  const [pickupTime, setPickupTime] = useState("Now");
  const [selectPayment, setSelectPayment] = useState("");
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropOffLocation: "",
  });
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(defaultCenter);

  const originRef = useRef();
  const destinationRef = useRef();
  const mapRef = useRef();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC9ExKVrq6j2bhaNnIGzahM9_0i0dGphXQ", // Replace with your actual Google Maps API key
    libraries,
  });

  useEffect(() => {
    if (isLoaded) {
      getUserLocation();
    }
  }, [isLoaded]);

  const handleCityChange = (event) => {
    setSelectCity(event.target.value);
  };

  const handlePickupTime = (event) => {
    setPickupTime(event.target.value);
  };

  const handleSelectPayment = (event) => {
    setSelectPayment(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (originRef.current.value && destinationRef.current.value) {
      calculateRoute();
    }
  };

  const handleTripRequest = async () => {
    const tripId = uuidv4();
    const tripDetails = {
      tripId,
      riderId,
      travelType: selectCity,
      pickupLocation: formData.pickupLocation,
      dropOffLocation: formData.dropOffLocation,
      locationDuration: duration,
      locationDistance: distance,
      timeToPick: pickupTime,
      paymentMethod: selectPayment,
      status: "pending",
    };

    try {
      const response = await dispatch(saveTripRequestAsync(tripDetails));

      if (saveTripRequestAsync.fulfilled.match(response)) {
        toast.success("Trip request saved successfully");

        console.log("Trip request saved successfully", response.payload);

        // Handle geolocation and fetching nearby drivers
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const riderLocation = { latitude, longitude };

          // Dispatch to fetch nearby drivers
          const driversResponse = await dispatch(
            getNearbyDriversAsync({ riderLocation, socket })
          );
          console.log(" getNearbyDriversAsync respone is ", driversResponse);
          if (getNearbyDriversAsync.fulfilled.match(driversResponse)) {
            dispatch(setNearbyDrivers(driversResponse.payload)); // Save nearby drivers in the store
          }
        });

        setTimeout(() => {
          handleNext();
        }, 3000);
      } else {
        toast.error("Failed to save trip request");
      }
    } catch (error) {
      toast.error("Failed to send trip request");
      console.error("Error in handleTripRequest:", error);
    }
  };

  const calculateRoute = async () => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    try {
      const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    } catch (error) {
      console.error("Error calculating route:", error);
      clearRoute();
    }
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
  };

  const handlePlaceChanged = (ref) => {
    return () => {
      const place = ref.current.value;
      const fieldName =
        ref === originRef ? "pickupLocation" : "dropOffLocation";
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: place,
      }));

      if (originRef.current.value && destinationRef.current.value) {
        calculateRoute();
      } else {
        clearRoute();
      }
    };
  };

  const getAddressFromCoordinates = (lat, lng) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            pickupLocation: results[0].formatted_address,
          }));
          if (originRef.current) {
            originRef.current.value = results[0].formatted_address;
          }
        }
      }
    });
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLocation);
          if (map) {
            map.setCenter(userLocation);
            map.setZoom(15);
            new Marker({
              position: userLocation,
              map: map,
              title: "You",
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              },
            });
          }
          getAddressFromCoordinates(userLocation.lat, userLocation.lng);
        },
        (error) => {
          console.log("Error getting user location:", error);
        }
      );
    } else {
      console.log("Geolocation not supported by this browser.");
    }
  };

  if (!isLoaded) {
    return <Skeleton />;
  }

  return (
    <>
      <ToastContainer />
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
                      onChange={handleCityChange}
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
                    lineHeight="30px"
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
                  gap: "60px",
                }}
              >
                <Autocomplete
                  onLoad={(autocomplete) => {
                    autocomplete.addListener(
                      "place_changed",
                      handlePlaceChanged(originRef)
                    );
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    ref={originRef}
                    style={{
                      boxSizing: `border-box`,
                      border: `1px solid transparent`,
                      width: `240px`,
                      height: `32px`,
                      padding: `0 12px`,
                      borderRadius: `3px`,
                      boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                      fontSize: `14px`,
                      outline: `none`,
                      textOverflow: `ellipses`,
                    }}
                  />
                </Autocomplete>
                <Autocomplete
                  onLoad={(autocomplete) => {
                    autocomplete.addListener(
                      "place_changed",
                      handlePlaceChanged(destinationRef)
                    );
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter Drop-off Location"
                    ref={destinationRef}
                    style={{
                      boxSizing: `border-box`,
                      border: `1px solid transparent`,
                      width: `240px`,
                      height: `32px`,
                      padding: `0 12px`,
                      borderRadius: `3px`,
                      boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                      fontSize: `14px`,
                      outline: `none`,
                      textOverflow: `ellipses`,
                    }}
                  />
                </Autocomplete>
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
                    lineHeight: "30px",
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
                    value={selectPayment}
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
                    <MenuItem value="Cash" sx={{ color: "#000000" }}>
                      Cash
                    </MenuItem>
                    <MenuItem
                      value=" Debit/Credit Card"
                      sx={{ color: "#000000" }}
                    >
                      Debit/Credit Card
                    </MenuItem>
                    <MenuItem value="Wallet" sx={{ color: "#000000" }}>
                      Wallet
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <Typography variant="h6" color="#373A41">
                Trip Details
              </Typography>
              <Typography color="#707278">
                Distance: {distance || "Not calculated"}
              </Typography>
              <Typography color="#707278">
                Duration: {duration || "Not calculated"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: "30px",
              }}
            >
              <CommonButton onClick={handleTripRequest}>
                View Rides
              </CommonButton>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box sx={{ height: "500px", width: "100%" }}>
              <GoogleMap
                center={userLocation}
                zoom={15}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                // options={{
                //   zoomControl: false,
                //   streetViewControl: false,
                //   mapTypeControl: false,
                //   fullscreenControl: false,
                // }}
                onLoad={(map) => {
                  mapRef.current = map;
                  setMap(map);
                }}
              >
                <Marker position={userLocation} />
                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
              </GoogleMap>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookRide;
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Divider,
//   FormControl,
//   FormControlLabel,
//   Grid,
//   IconButton,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   Select,
//   Stack,
//   Typography,
// } from "@mui/material";
// import flagkenya from "../../../assets/flagkenya.png";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import theme from "../../../theme";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import { CustomizeInput } from "../../../components/CustomizeInput";
// import CommonButton from "../../../components/CommonButton";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import GoogleMap from "./GoogleMap";
// import { useDispatch, useSelector } from "react-redux";
// import { useSocket } from "../../../components/SocketContext";
// import { v4 as uuidv4 } from "uuid";
// import { saveTripRequestAsync } from "../../../ReducerSlices/tripInfo/tripInfoSlice";

// const BookRide = () => {
//   const { user } = useSelector((state) => state.user);

//   const dispatch = useDispatch();
//   const riderId = user?.id;

//   const [selectCity, setselectCity] = useState("City to city");
//   const [pickupTime, setPickupTime] = useState("Now");
//   const [SelectPayment, setSelectPayment] = useState("");
//   const [formData, setFormData] = useState({
//     pickupLocation: "",
//     dropOffLocation: "",
//   });

//   const handleCityChange = (event) => {
//     setselectCity(event.target.value);
//   };

//   const handlePickupTime = (event) => {
//     setPickupTime(event.target.value);
//   };

//   const handleSelectPayment = (event) => {
//     setSelectPayment(event.target.value);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => {
//       const newFormData = { ...prevFormData, [name]: value };

//       // Clear state when both pickup and dropoff are empty
//       if (
//         newFormData.pickupLocation === "" &&
//         newFormData.dropOffLocation === ""
//       ) {
//         return {
//           pickupLocation: "",
//           dropOffLocation: "",
//         };
//       }

//       return newFormData;
//     });
//   };

//   const { socket } = useSocket();

//   const handleTripRequest = async () => {
//     const tripId = uuidv4();
//     const tripDetails = {
//       tripId,
//       riderId,
//       travelType: selectCity,
//       pickupLocation: formData.pickupLocation,
//       dropOffLocation: formData.dropOffLocation,
//       timeToPick: pickupTime,
//       paymentMethod: SelectPayment,
//       status: "pending",
//     };
//     try {
//       const response = await dispatch(saveTripRequestAsync(tripDetails));

//       if (saveTripRequestAsync.fulfilled.match(response)) {
//         toast.success("Trip request sent successfully");

//         console.log("Trip request sent successfully", response.data);
//       }
//     } catch (error) {
//       toast.error("Failed to send trip request");
//     }
//     if (socket) {
//       socket.emit("tripRequest", tripDetails);
//     }
//   };

//   useEffect(() => {
//     if (socket) {
//       socket.on("tripRequestAccepted", (confirmationMsg) => {
//         if (confirmationMsg?.message) {
//           toast.success(confirmationMsg.message);
//           socket.emit("joinTripRoom", { roomId: confirmationMsg.tripId });
//         } else {
//           toast.error("Failed to receive confirmation message.");
//         }
//       });

//       socket.on("joinTripRoom", ({ roomId }) => {
//         console.log(`rider has Joined room: ${roomId}`);
//       });
//       return () => {
//         socket.off("tripRequestAccepted");
//         socket.off("joinTripRoom");
//       };
//     }
//   }, [socket]);

//   return (
//     <>
//       <ToastContainer />
//       <Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           <img
//             src={flagkenya}
//             alt="flagkenya"
//             style={{ width: "50px ", height: "50px", objectFit: "contain" }}
//           />
//           <Typography variant="h3" color="#707278">
//             Kenya
//           </Typography>
//           <IconButton>
//             <PlayArrowIcon sx={{ color: "#000" }} />
//           </IconButton>
//           <Typography variant="h3" color="#373A41">
//             Nairobi
//           </Typography>
//           <IconButton>
//             <PlayArrowIcon sx={{ color: "#000" }} />
//           </IconButton>
//         </Box>
//         <Grid
//           container
//           spacing={4}
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Grid item md={6} xs={12}>
//             <Box
//               sx={{
//                 margin: "20px 0px",
//               }}
//             >
//               <FormControl sx={{ width: "100%" }}>
//                 <Box
//                   sx={{
//                     display: "flex",

//                     alignItems: "center",

//                     gap: { lg: "80px", md: "70px", sm: "115px", xs: "20px" },
//                   }}
//                 >
//                   <Box>
//                     <Typography
//                       sx={{
//                         color: "#373A41",
//                         fontWeight: "bold",
//                         fontFamily: theme.typography.subtitle1.fontFamily,
//                       }}
//                     >
//                       Travel Type
//                     </Typography>
//                   </Box>
//                   <Box>
//                     <RadioGroup
//                       aria-labelledby="demo-radio-buttons-group-label"
//                       name="radio-buttons-group"
//                       row
//                       value={selectCity}
//                       onChange={handleCityChange}
//                       defaultValue="City to city"
//                     >
//                       <FormControlLabel
//                         value="City to city"
//                         label={
//                           <Typography
//                             sx={{
//                               color: "#000",
//                             }}
//                           >
//                             City to city
//                           </Typography>
//                         }
//                         control={
//                           <Radio
//                             checkedIcon={
//                               <RadioButtonUncheckedIcon
//                                 sx={{
//                                   color:
//                                     selectCity === "City to city"
//                                       ? "#1980F9"
//                                       : "black",
//                                 }}
//                               />
//                             }
//                           />
//                         }
//                       />
//                       <FormControlLabel
//                         value="In city"
//                         label={
//                           <Typography
//                             sx={{
//                               color: "#000",
//                             }}
//                           >
//                             In city
//                           </Typography>
//                         }
//                         control={
//                           <Radio
//                             checkedIcon={
//                               <RadioButtonUncheckedIcon
//                                 sx={{
//                                   color:
//                                     selectCity === "In city"
//                                       ? "#1980F9"
//                                       : "black",
//                                 }}
//                               />
//                             }
//                           />
//                         }
//                       />
//                     </RadioGroup>
//                   </Box>
//                 </Box>
//               </FormControl>
//             </Box>

//             <Stack
//               direction="row"
//               alignItems="center"
//               justifyContent="space-between"
//               gap={2}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   gap: "10px",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <Typography
//                     variant="subtitle2"
//                     fontWeight="bold"
//                     color="#373A41"
//                     lineHeight="30px"
//                   >
//                     Pickup Location
//                   </Typography>
//                   <Typography
//                     variant="subtitle2"
//                     fontWeight="bold"
//                     color="#373A41"
//                     pt={8}
//                   >
//                     Drop off / stop
//                   </Typography>
//                 </Box>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <RadioButtonUncheckedIcon sx={{ color: "#00A206" }} />
//                   <Divider
//                     orientation="vertical"
//                     sx={{
//                       height: "60%",

//                       border: "1px dashed #373A41",
//                     }}
//                   />
//                   <AddCircleIcon sx={{ color: "#373A41" }} />
//                 </Box>
//               </Box>

//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: "20px",
//                   width: "70%",
//                 }}
//               >
//                 <CustomizeInput
//                   placeholder="Search for a pickup location"
//                   fullWidth
//                   onChange={handleInputChange}
//                   name="pickupLocation"
//                   value={formData.pickupLocation}
//                 />
//                 <CustomizeInput
//                   placeholder="Search for a dropoff location"
//                   fullWidth
//                   onChange={handleInputChange}
//                   name="dropOffLocation"
//                   value={formData.dropOffLocation}
//                 />
//               </Box>
//             </Stack>

//             <Box
//               sx={{
//                 margin: "20px 0px",
//               }}
//             >
//               <FormControl sx={{ width: "100%" }}>
//                 <Box
//                   sx={{
//                     display: "flex",

//                     alignItems: "center",
//                     gap: { lg: "75px", md: "65px", sm: "110px", xs: "20px" },
//                   }}
//                 >
//                   <Box>
//                     <Typography
//                       sx={{
//                         color: "#373A41",
//                         fontWeight: "bold",
//                         fontFamily: theme.typography.subtitle1.fontFamily,
//                       }}
//                     >
//                       Pick up time
//                     </Typography>
//                   </Box>
//                   <Box>
//                     <RadioGroup
//                       aria-labelledby="demo-radio-buttons-group-label"
//                       name="radio-buttons-group"
//                       row
//                       value={pickupTime}
//                       onChange={handlePickupTime}
//                       defaultValue="Now"
//                     >
//                       <FormControlLabel
//                         value="Now"
//                         label={
//                           <Typography
//                             sx={{
//                               color: "#000",
//                             }}
//                           >
//                             Now
//                           </Typography>
//                         }
//                         control={
//                           <Radio
//                             checkedIcon={
//                               <RadioButtonUncheckedIcon
//                                 fontSize="large"
//                                 sx={{
//                                   color:
//                                     pickupTime === "Now" ? "#1980F9" : "black",
//                                 }}
//                               />
//                             }
//                           />
//                         }
//                       />
//                       <FormControlLabel
//                         value="Later"
//                         label={
//                           <Typography
//                             sx={{
//                               color: "#000",
//                             }}
//                           >
//                             Later
//                           </Typography>
//                         }
//                         control={
//                           <Radio
//                             checkedIcon={
//                               <RadioButtonUncheckedIcon
//                                 sx={{
//                                   color:
//                                     pickupTime === "Later"
//                                       ? "#1980F9"
//                                       : "black",
//                                 }}
//                               />
//                             }
//                           />
//                         }
//                       />
//                     </RadioGroup>
//                   </Box>
//                 </Box>
//               </FormControl>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",

//                 alignItems: "center",

//                 justifyContent: "space-between",
//                 gap: { lg: "0px", md: "35px" },
//               }}
//             >
//               <Box>
//                 <Typography
//                   sx={{
//                     color: "#373A41",
//                     fontWeight: "bold",
//                     fontFamily: theme.typography.subtitle1.fontFamily,
//                     lineHeight: "30px",
//                   }}
//                 >
//                   Payment Method
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   width: "70%",
//                 }}
//               >
//                 <FormControl fullWidth>
//                   <Select
//                     value={SelectPayment}
//                     onChange={handleSelectPayment}
//                     placeholder="Select payment method"
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#fff",
//                       color: "#000000",
//                       "& .MuiSelect-icon": {
//                         color: "#000000",
//                       },
//                     }}
//                   >
//                     <MenuItem value="Cash" sx={{ color: "#000000" }}>
//                       Cash
//                     </MenuItem>
//                     <MenuItem
//                       value=" Debit/Credit Card"
//                       sx={{ color: "#000000" }}
//                     >
//                       Debit/Credit Card
//                     </MenuItem>
//                     <MenuItem value="Wallet" sx={{ color: "#000000" }}>
//                       Wallet
//                     </MenuItem>
//                   </Select>
//                 </FormControl>
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 paddingTop: "30px",
//               }}
//             >
//               <CommonButton onClick={handleTripRequest}>
//                 View Rides
//               </CommonButton>
//             </Box>
//           </Grid>
//           <Grid item md={6} xs={12}>
//             <Box
//               sx={{
//                 height: "500px",
//                 width: "100%",
//                 marginTop: "20px",
//               }}
//             >
//               <GoogleMap
//                 pickupLocation={formData.pickupLocation}
//                 dropOffLocation={formData.dropOffLocation}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default BookRide;
