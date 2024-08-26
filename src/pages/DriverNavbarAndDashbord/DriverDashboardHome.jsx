import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Stack } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button, Divider, Skeleton, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import PhoneIcon from "@mui/icons-material/Phone";
import profilelogo from "../../assets/profilelogo.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import NotificationModal from "../../components/NotificationModal";
import { useSocket } from "../../components/SocketContext";
import {
  getTripRequestAsync,
  setTripInfo,
  updateTripStatus,
} from "../../ReducerSlices/tripInfo/tripInfoSlice";
import axiosInstance from "../../constants/axiosInstance";
import { toast, ToastContainer } from "react-toastify";

const DriverDashboardHome = () => {
  const { user } = useSelector((state) => state.user);
  const { tripInfo, status: tripStatus } = useSelector(
    (state) => state.tripInfo || {}
  );

  const dispatch = useDispatch();
  const { socket, socketId } = useSocket();

  const [driverLocation, setDriverLocation] = useState(null);
  const [notificationProps, setnotificationProps] = useState({
    error: "",
    message: "",
    modal: false,
    tripId: "",
    pickupLocation: "",
    dropOffLocation: "",
    locationDuration: "",
    locationDistance: "",
    travelType: "",
    paymentMethod: "",
    riderId: "",
  });

  const mapRef = useRef();
  const libraries = ["places"];
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC9ExKVrq6j2bhaNnIGzahM9_0i0dGphXQ", // Replace with your actual Google Maps API key
    libraries,
  });

  // Load trip data when the notification modal is triggered
  useEffect(() => {
    if (notificationProps.tripId && tripStatus === "succeeded") {
      dispatch(getTripRequestAsync(notificationProps.tripId));
    }
  }, [dispatch, notificationProps.tripId, tripStatus]);

  // Handle socket events for trip requests and joining rooms
  useEffect(() => {
    if (socket) {
      socket.on("tripRequest", handleTripRequest);
      socket.on("joinTripRoom", handleJoinTripRoom);
      socket.on(
        "notifyDriversTripRequestAccepted",
        handleNotifyDriversTripRequestAccepted
      );
      return () => {
        socket.off("tripRequest", handleTripRequest);
        socket.off("joinTripRoom", handleJoinTripRoom);
      };
    }
  }, [socket]);

  const handleTripRequest = (tripDetails) => {
    const {
      tripId,
      riderId,
      pickupLocation,
      dropOffLocation,
      locationDuration,
      locationDistance,
      travelType,
      paymentMethod,
    } = tripDetails;

    setnotificationProps({
      error: "",
      message: "",
      modal: true,
      tripId,
      pickupLocation,
      dropOffLocation,
      locationDuration,
      locationDistance,
      travelType,
      paymentMethod,
      riderId,
    });
  };

  const handleJoinTripRoom = ({ roomId }) => {
    console.log(`Joined room: ${roomId}`);
  };

  const handleNotifyDriversTripRequestAccepted = ({ message }) => {
    // Notify the driver and close the modal
    toast.success(message);
    setnotificationProps({ ...notificationProps, modal: false });
  };
  const getDriverLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = { lat: latitude, lng: longitude };
          setDriverLocation(location);

          if (mapRef.current) {
            mapRef.current.setCenter(location);
            mapRef.current.setZoom(15);
          }

          socket.emit("driverLocation", {
            driverId: user.id,
            vehicleImage: user.vehicle_image,
            driverName: user.firstName + " " + user.lastName,
            latitude,
            longitude,
          });
        },
        (error) => {
          console.error("Error getting driver location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (isLoaded) {
      getDriverLocation();
    }
  }, [isLoaded, socket, user]);

  const handleAcceptTripRequest = async () => {
    if (socketId) {
      try {
        const response = await axiosInstance.put(
          `/update-trip-status/${notificationProps.tripId}`,
          {
            status: "accepted",
            driverId: user.id,
          }
        );

        if (response.data.success) {
          const updatedTripInfo = response.data.data;
          dispatch(setTripInfo(updatedTripInfo));

          const confirmationMsg = {
            tripId: notificationProps.tripId,
            riderId: notificationProps.riderId,
            driverId: user.id,
            message: `Your trip request has been accepted by ${user.firstName} ${user.lastName}.`,
          };

          socket.emit("tripRequestAccepted", confirmationMsg);
          socket.emit("updateTripStatus", updatedTripInfo);
          socket.emit("joinTripRoom", { roomId: confirmationMsg.tripId });
          dispatch(updateTripStatus("accepted"));
          setnotificationProps({ ...notificationProps, modal: false });
        } else {
          console.error("Failed to accept trip");
        }
      } catch (error) {
        console.error("Error accepting trip:", error);
      }
    } else {
      console.error("Driver socket ID not available yet.");
    }
  };

  if (!isLoaded) {
    return <Skeleton />;
  }

  return (
    <>
      <ToastContainer />
      {notificationProps?.modal && (
        <NotificationModal
          notificationProps={notificationProps}
          setnotificationProps={setnotificationProps}
          onAcceptRequest={handleAcceptTripRequest}
        />
      )}
      <Box sx={{ minHeight: "100vh" }}>
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h3" sx={{ color: "#000" }} pb={2}>
              Current Ride
            </Typography>
            <Grid container spacing={8}>
              <Grid item md={8} xs={12}>
                <GoogleMap
                  center={driverLocation}
                  zoom={15}
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                  onLoad={(map) => {
                    mapRef.current = map;
                  }}
                >
                  {driverLocation && <Marker position={driverLocation} />}
                </GoogleMap>
              </Grid>

              <Grid item md={4} xs={12}>
                <Box
                  sx={{
                    background: "#fff",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  {/* {tripRequests.map((request, index) => ( */}
                  <Box
                    sx={
                      {
                        // position:
                        //   index === currentRequestIndex
                        //     ? "relative"
                        //     : "absolute",
                        // bottom: index === currentRequestIndex ? "70px" : 0,
                        // opacity: index === currentRequestIndex ? 1 : 0,
                        // transition: "opacity 0.5s ease-in-out",
                      }
                    }
                  >
                    {tripInfo && (
                      <img
                        src={
                          tripInfo.riderPic
                            ? `../../../server/uploads/${tripInfo.riderPic
                                .split("\\")
                                .pop()}`
                            : profilelogo
                        }
                        alt="Rider"
                        style={{
                          width: "110px",
                          height: "110px",
                          borderRadius: "50%",
                        }}
                      />
                    )}

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

                    <Typography variant="subtitle1" color="#000">
                      {tripInfo?.riderFirstName && tripInfo?.riderLastName
                        ? `${tripInfo.riderFirstName} ${tripInfo.riderLastName}`
                        : "Nayambura"}
                    </Typography>

                    <Stack
                      sx={{ margin: "20px 0px" }}
                      spacing={1}
                      direction="column"
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
                        {tripInfo?.riderPhoneNumber}
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
                    <Divider sx={{ backgroundColor: "#000", mt: "20px" }} />
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
                          {tripInfo?.pickupLocation
                            ? tripInfo?.pickupLocation
                            : "Nairobi, Kenya"}
                        </Typography>
                        <Typography variant="subtitle1" color="#5A5A5A">
                          {tripInfo?.dropOffLocation
                            ? tripInfo?.dropOffLocation
                            : " Airport South Road, Embakasi, Nairobi"}
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
                  {/* ))} */}
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
