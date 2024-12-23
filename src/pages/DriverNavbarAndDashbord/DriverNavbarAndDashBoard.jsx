import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import home from "../../assets/home.png";
import ridewheel from "../../assets/ridewheel.png";
import vehicle from "../../assets/vehicle.png";
import earning from "../../assets/earning.png";
import message from "../../assets/message.png";
import profile from "../../assets/profile.png";
import support from "../../assets/support.png";
import logout from "../../assets/logout.png";
import bell from "../../assets/bell.png";
import user from "../../assets/user.png";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MyRides from "./MyRides";
import VehicleDetails from "./VehicleDetails";
import Earning from "./Earning";
import Messages from "./Messages";
import Profile from "./Profile";
import Support from "./Support";
import { MenuItem, Select } from "@mui/material";
import DriverDashboardHome from "./DriverDashboardHome";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../constants/axiosInstance";
import { addUser } from "../../ReducerSlices/user/userSlice";
import { useSocket } from "../../components/SocketContext";
import { useEffect } from "react";

const drawerWidth = 240;
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
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "#373A41",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function DriverNavbarAndDashBoard() {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [notificationCount, setNotificationCount] = React.useState(0);
  const { user } = useSelector((state) => state.user);
  const { tripInfo } = useSelector((state) => state.tripInfo || {});
  console.log("User is ", user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const isActiveRoute = (route) => {
    console.log("Current path:", location.pathname);
    return location.pathname === route;
  };
  const { disconnectSocket, socket } = useSocket();
  React.useEffect(() => {
    return () => {
      disconnectSocket();
    };
  }, [disconnectSocket]);
  const logoutHandler = async () => {
    try {
      const response = await axiosInstance.get("/logout");
      const { success, user } = response.data;
      if (success) {
        dispatch(addUser({}));
        await disconnectSocket();
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on("notifyDriver", ({ receiverId }) => {
        if (receiverId === user?.id) {
          setNotificationCount((prevCount) => prevCount + 1);
          console.log("New notification count", prevCount + 1);
        }
      });

      socket.on("receiveMessage", (message) => {
        if (message.receiverId === user?.id) {
          if (location.pathname !== "/Dashboard/Messages") {
            setNotificationCount((prevCount) => prevCount + 1);
          } else {
            setNotificationCount(0);
          }
        }
      });

      return () => {
        socket.off("notifyDriver");
        socket.off("receiveMessage");
      };
    }
  }, [socket, user]);

  const handleOpenChat = () => {
    navigate("/Dashboard/Messages");
    setNotificationCount(0);
    socket.emit("enterChat", { tripId: tripInfo?.tripId });
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",

              width: "100%",
            }}
          >
            <Typography variant="h5" color="#000">
              Partnership with{" "}
              <span style={{ color: "#F2B705" }}> Flex Logistics </span>
            </Typography>

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
                  height: "25px",
                  objectFit: "contain",
                }}
              />

              <Box sx={{ position: "relative" }}>
                <img
                  src={message}
                  alt="message"
                  style={{
                    width: "25px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                  onClick={handleOpenChat}
                />

                {notificationCount >= 0 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: -10,
                      right: -5,
                      backgroundColor: "red",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                  >
                    {notificationCount}
                  </Box>
                )}
              </Box>
              <img
                src={
                  user?.profile_pic
                    ? `../../../server/uploads/${user.profile_pic
                        .split("\\")
                        .pop()}`
                    : profile
                }
                alt="user"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
              <PlainSelect value={selectedOption} onChange={handleChange}>
                <MenuItem value={"username"} sx={{ color: "#000000" }}>
                  {user.firstName + user.lastName}
                </MenuItem>
                <MenuItem
                  value={"viewprofile"}
                  sx={{ color: "#000000" }}
                  onClick={() => navigate("/Dashboard/Profile")}
                >
                  View Profile
                </MenuItem>
                <MenuItem
                  value={"logout"}
                  sx={{ color: "#000000" }}
                  onClick={logoutHandler}
                >
                  Logout
                </MenuItem>
              </PlainSelect>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#373A41" },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "#fff" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              to="/Dashboard/Home"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: isActiveRoute("/Dashboard/Home")
                  ? "#575C66"
                  : "",
              }}
              component={Link}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",

                  justifyContent: "center",
                }}
              >
                <img
                  src={home}
                  alt="home"
                  style={{
                    width: "25px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{ marginLeft: open ? "auto" : "20px" }}
                >
                  Home
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: isActiveRoute("/Dashboard/My%20Rides")
                  ? "#575C66"
                  : "",
              }}
              to="/Dashboard/My Rides"
              component={Link}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={ridewheel}
                  alt="ridewheel"
                  style={{
                    width: "25px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{ marginLeft: open ? "auto" : "20px" }}
                >
                  My rides
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: isActiveRoute("/Dashboard/Vehicle%20Details")
                  ? "#575C66"
                  : "",
              }}
              to="/Dashboard/Vehicle Details"
              component={Link}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={vehicle}
                  alt="vehicle"
                  style={{
                    width: "25px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{ marginLeft: open ? "auto" : "20px" }}
                >
                  Vehicle details
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: isActiveRoute("/Dashboard/Earning")
                  ? "#575C66"
                  : "",
              }}
              to="/Dashboard/Earning"
              component={Link}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={earning}
                  alt="earning"
                  style={{
                    width: "25px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{ marginLeft: open ? "auto" : "20px" }}
                >
                  Earning
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: isActiveRoute("/Dashboard/Messages")
                  ? "#575C66"
                  : "",
              }}
              to="/Dashboard/Messages"
              component={Link}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={message}
                  alt="message"
                  style={{
                    width: "25px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{ marginLeft: open ? "auto" : "20px" }}
                >
                  Messages
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: isActiveRoute("/Dashboard/Profile")
                  ? "#575C66"
                  : "",
              }}
              to="/Dashboard/Profile"
              component={Link}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={profile}
                  alt="profile"
                  style={{
                    width: "25px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{ marginLeft: open ? "auto" : "20px" }}
                >
                  Profile
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: isActiveRoute("/Dashboard/Support")
                  ? "#575C66"
                  : "",
              }}
              component={Link}
              to="/Dashboard/Support"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={support}
                  alt="support"
                  style={{
                    width: "25px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{ marginLeft: open ? "auto" : "20px" }}
                >
                  Support
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: isActiveRoute("/Dashboard/Logout ")
                  ? "#575C66"
                  : "",
              }}
              to="/Dashboard/Logout"
              component={Link}
              onClick={logoutHandler}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logout}
                  alt="logout"
                  style={{
                    width: "25px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  sx={{ marginLeft: open ? "auto" : "20px" }}
                >
                  Logout
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, background: "#F9F9F9", minHeight: "100vh" }}
      >
        <DrawerHeader />

        <Routes>
          <Route path="/Home" element={<DriverDashboardHome />} />
          <Route path="/My Rides" element={<MyRides />} />
          <Route path="/Vehicle Details" element={<VehicleDetails />} />
          <Route path="/Earning" element={<Earning />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </Box>
    </Box>
  );
}
