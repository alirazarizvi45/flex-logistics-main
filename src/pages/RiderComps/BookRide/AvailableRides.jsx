import {
  Box,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import availableridemap from "../../../assets/availableridemap.png";
import mercedes from "../../../assets/mercedes.png";
import tuktuk from "../../../assets/tuktuk.png";
import nissan from "../../../assets/nissan.png";
import CommonButton from "../../../components/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../../../components/SocketContext";
import { setTripInfo } from "../../../ReducerSlices/tripInfo/tripInfoSlice";
import { toast, ToastContainer } from "react-toastify";
import { getUserByIdAsync } from "../../../ReducerSlices/user/userSlice";
import {
  getNearbyDriversAsync,
  removeDrivers,
  updatedDriverLocation,
} from "../../../ReducerSlices/nearbyDrivers/nearbyDriversSlice";
const AvailableRides = () => {
  const { socket } = useSocket();
  const dispatch = useDispatch();
  const [riderLocation, setRiderLocation] = useState(null);
  const { tripInfo } = useSelector((state) => state.tripInfo || {});
  const { user, userDetails } = useSelector((state) => state.user || {});
  console.log("userDetails details in userDetails", userDetails);
  console.log("trip details in AvailableRides", tripInfo);
  const { nearbyDrivers } = useSelector((state) => state.nearbyDrivers || {});
  console.log("nearby drivers", nearbyDrivers);

  useEffect(() => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setRiderLocation({ latitude, longitude });
          console.log("Rider Location:", { latitude, longitude });
        });
      } else {
        console.log("Geolocation is not supported by your browser");
      }
    } catch (error) {
      console.log("Geolocation is not supported by your browser", error);
    }
  }, []);

  // useEffect(() => {
  //   if (socket && riderLocation) {
  //     dispatch(getNearbyDriversAsync({ riderLocation, socket }));
  //     socket.on(
  //       "updatedDriverLocation",
  //       ({ driverId, driverName, vehicleImage, latitude, longitude }) => {
  //         dispatch(
  //           updatedDriverLocation({
  //             driverId,
  //             driverName,
  //             vehicleImage,
  //             latitude,
  //             longitude,
  //           })
  //         );
  //       }
  //     );
  //     socket.on("driverOffline", (userId) => {
  //       dispatch(removeDrivers(userId));
  //     });
  //   }
  //   return () => {
  //     if (socket) {
  //       socket.off("updatedDriverLocation");
  //       socket.off("driverOffline");
  //     }
  //   };
  // }, [socket, riderLocation, dispatch]);
  useEffect(() => {
    if (socket && riderLocation) {
      const fetchNearbyDrivers = () => {
        dispatch(getNearbyDriversAsync({ riderLocation, socket }));
      };

      fetchNearbyDrivers();
      const intervalId = setInterval(fetchNearbyDrivers, 5000);

      socket.on(
        "updatedDriverLocation",
        ({ driverId, driverName, vehicleImage, latitude, longitude }) => {
          dispatch(
            updatedDriverLocation({
              driverId,
              driverName,
              vehicleImage,
              latitude,
              longitude,
            })
          );
        }
      );

      socket.on("driverOffline", (userId) => {
        dispatch(removeDrivers(userId));
      });

      return () => {
        clearInterval(intervalId);
        if (socket) {
          socket.off("updatedDriverLocation");
          socket.off("driverOffline");
        }
      };
    }
  }, [socket, riderLocation, dispatch]);

  // const handleBookRide = () => {
  //   try {
  //     const tripDetails = {
  //       tripId: tripInfo.newTripDetail.tripId,
  //       riderId: tripInfo.newTripDetail.riderId,
  //       pickupLocation: tripInfo.newTripDetail.pickupLocation,
  //       dropOffLocation: tripInfo.newTripDetail.dropOffLocation,
  //       travelType: tripInfo.newTripDetail.travelType,
  //       locationDuration: tripInfo.newTripDetail.locationDuration,
  //       locationDistance: tripInfo.newTripDetail.locationDistance,
  //       timeToPick: tripInfo.newTripDetail.timeToPick,
  //       paymentMethod: tripInfo.newTripDetail.paymentMethod,
  //       status: tripInfo.newTripDetail.status,
  //     };
  //     console.log("trip detailsisss", tripDetails);
  //     if (socket) {
  //       socket.emit("tripRequest", tripDetails);
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  useEffect(() => {
    if (socket) {
      socket.on("tripRequestAccepted", (confirmationMsg) => {
        if (confirmationMsg?.message) {
          toast.success(confirmationMsg.message);
          socket.emit("joinTripRoom", { roomId: confirmationMsg.tripId });
        } else {
          toast.error("Failed to receive confirmation message.");
        }
      });

      socket.on("joinTripRoom", ({ roomId }) => {
        console.log(`rider has Joined room: ${roomId}`);
      });
      socket.on("tripStatusUpdated", (updatedTripInfo) => {
        dispatch(setTripInfo(updatedTripInfo));
      });

      return () => {
        socket.off("tripRequestAccepted");
        socket.off("joinTripRoom");
        socket.off("tripStatusUpdated");
      };
    }
  }, [socket, dispatch]);

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
            {nearbyDrivers?.map((driver) => {
              return (
                <Box>
                  <Box
                    key={driver.driverId}
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
                            src={
                              driver?.vehicleImage
                                ? `../../../server/uploads/${driver.vehicleImage
                                    .split("\\")
                                    .pop()}`
                                : mercedes
                            }
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
                              {driver?.driverName}
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
                      <CommonButton></CommonButton>
                    </Box>
                  </Box>
                </Box>
              );
            })}
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
