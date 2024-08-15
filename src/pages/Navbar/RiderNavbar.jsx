import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  styled,
} from "@mui/material";
import React, { useState } from "react";

import message from "../../assets/message.png";

import bell from "../../assets/bell.png";
import user from "../../assets/user.png";
import WestIcon from "@mui/icons-material/West";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import BookRide from "../RiderComps/BookRide/BookRide";
import MyRides from "../RiderComps/MyRidesComp/MyRides";
import theme from "../../theme";
import AvailableRides from "../RiderComps/BookRide/AvailableRides";
import RideDetail from "../RiderComps/BookRide/RideDetail";
import Review from "../RiderComps/BookRide/Review";
import { LiveRide } from "../RiderComps/BookRide/LiveRide";
import ViewProfile from "../RiderComps/BookRide/ViewProfile";
import EditBooking from "../RiderComps/BookRide/EditBooking";
import axiosInstance from "../../constants/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../ReducerSlices/user/userSlice";
const PlainSelect = styled(Select)({
  backgroundColor: "transparent",

  border: "none", // Removing border
  outline: "none",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:focus": {
    backgroundColor: "transparent",
  },
  "&.MuiOutlinedInput-root": {
    // Removing outline styles for outlined variant
    "& fieldset": {
      border: "none",
    },
  },
});

const RiderNavbar = () => {
  const { user } = useSelector((state) => state.user);
  console.log("the user is", user);
  const [selectedOption, setSelectedOption] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMenuItemClick = (value) => {
    setSelectedOption(value);
    switch (value) {
      case "viewprofile":
        navigate("/Rider/ViewProfile");
        break;
      case "logout":
        break;
      default:
        break;
    }
  };
  const isActiveRoute = (route) => {
    return location.pathname === route;
  };
  const logoutHandler = async () => {
    try {
      const response = await axiosInstance.get("/logout");
      const { success, user } = response.data;
      if (success) {
        dispatch(addUser({}));
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout error", error);
    }
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="relative" sx={{ background: "#fff" }}>
          <Container maxWidth="xl">
            <Toolbar>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems="center"
                  width={{ md: "50%", xs: "100%" }}
                >
                  <Box>
                    <IconButton
                      color="inherit"
                      edge="start"
                      sx={{
                        marginRight: 5,
                      }}
                    >
                      <WestIcon />
                      Back
                    </IconButton>
                  </Box>
                  <Box>
                    <List>
                      <ListItem>
                        <ListItemButton
                          component={Link}
                          to="/Rider/BookRide"
                          sx={{
                            fontFamily: theme.typography.subtitle1.fontFamily,
                            borderBottom: isActiveRoute("/Rider/BookRide")
                              ? "2px solid #F2B705"
                              : "",
                          }}
                        >
                          Book a Ride
                        </ListItemButton>
                        <ListItemButton
                          component={Link}
                          to="/Rider/MyRides"
                          sx={{
                            fontFamily: theme.typography.subtitle1.fontFamily,
                            borderBottom: isActiveRoute("/Rider/MyRides")
                              ? "2px solid #F2B705"
                              : "",
                          }}
                        >
                          My Rides
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Box>
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { md: "20px", xs: "7px" },
                  }}
                >
                  <img
                    src={bell}
                    alt="bell"
                    style={{
                      width: "25px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                  />
                  <img
                    src={message}
                    alt="message"
                    style={{
                      width: "25px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                  />
                  <img
                    src={
                      user?.profile_pic
                        ? `../../../server/uploads/${user.profile_pic
                            .split("\\")
                            .pop()}`
                        : user
                    }
                    alt="user"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                  <PlainSelect value={selectedOption}>
                    <MenuItem
                      value={"username"}
                      onClick={() => handleMenuItemClick("username")}
                      sx={{ color: "#000000" }}
                    >
                      {user.firstName + user.lastName}
                    </MenuItem>

                    <MenuItem
                      value={"viewprofile"}
                      onClick={() => handleMenuItemClick("viewprofile")}
                      sx={{ color: "#000000" }}
                    >
                      View Profile
                    </MenuItem>

                    <MenuItem
                      value={"logout"}
                      onClick={() => handleMenuItemClick("logout")}
                      sx={{ color: "#000000" }}
                    >
                      <span onClick={logoutHandler}>Logout</span>
                    </MenuItem>
                  </PlainSelect>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          background: "#F9F9F9",
        }}
      >
        <Container maxWidth="lg">
          <Routes>
            <Route
              path="/BookRide"
              element={
                <>
                  <BookRide />
                  <br />
                  <AvailableRides />
                  <br />
                  <RideDetail />
                  <br />
                  <Review />
                  <br />
                  <LiveRide />
                  <br />
                </>
              }
            />
            <Route
              path="/MyRides"
              element={
                <>
                  <MyRides />
                </>
              }
            />
            <Route
              path="/ViewProfile"
              element={
                <>
                  <ViewProfile />
                </>
              }
            />
            <Route
              path="/EditBooking"
              element={
                <>
                  <EditBooking />
                </>
              }
            />
          </Routes>
        </Container>
      </Box>
    </>
  );
};

export default RiderNavbar;
