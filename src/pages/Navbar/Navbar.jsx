import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Hidden,
  ListItemButton,
  Paper,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import theme from "../../theme";
const Navbar = () => {
  useMediaQuery("(max-width:1200px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  let location = useLocation();
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: "200px" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <ListItemButton
          to="/"
          sx={{
            color: location.pathname === "/" ? "#F2B705" : "#fff",
            fontFamily: theme.typography.subtitle1.fontFamily,
            fontSize: "13px",
            "&:hover": {
              color: "#F2B705",
            },
          }}
          component={Link}
        >
          Home
        </ListItemButton>

        <ListItemButton
          to="/SellCrypto"
          sx={{
            color: location.pathname === "/SellCrypto" ? "#F2B705" : "#fff",
            fontFamily: theme.typography.subtitle1.fontFamily,
            fontSize: "13px",
            "&:hover": {
              color: "#F2B705",
            },
          }}
          component={Link}
        >
          About us
        </ListItemButton>
        <ListItemButton
          to="/Swap"
          sx={{
            color: location.pathname === "/Swap" ? "#F2B705" : "#fff",
            fontFamily: theme.typography.subtitle1.fontFamily,
            fontSize: "15px",
            "&:hover": {
              color: "#F2B705",
            },
          }}
          component={Link}
        >
          Vehicles
        </ListItemButton>

        <ListItemButton
          to="/CreateOffer"
          sx={{
            color: location.pathname === "/CreateOffer" ? "#F2B705" : "#fff",
            fontFamily: theme.typography.subtitle1.fontFamily,
            fontSize: "13px",
            "&:hover": {
              color: "#F2B705",
            },
          }}
          component={Link}
        >
          Services
        </ListItemButton>
        <ListItemButton
          to="/Dashboard"
          sx={{
            color: location.pathname === "/Dashboard" ? "#F2B705" : "#fff",
            fontFamily: theme.typography.subtitle1.fontFamily,
            fontSize: "13px",
            "&:hover": {
              color: "#F2B705",
            },
          }}
          component={Link}
        >
          Booking
        </ListItemButton>
        <ListItemButton
          to="/Wallet"
          sx={{
            color: location.pathname === "/Wallet" ? "#F2B705" : "#fff",
            fontFamily: theme.typography.subtitle1.fontFamily,
            fontSize: "13px",
            "&:hover": {
              color: "#F2B705",
            },
          }}
          component={Link}
        >
          FAQ
        </ListItemButton>
        <ListItemButton
          to="/dashboard"
          sx={{
            color: location.pathname === "/Wallet" ? "#F2B705" : "#fff",
            fontFamily: theme.typography.subtitle1.fontFamily,
            fontSize: "13px",
            "&:hover": {
              color: "#F2B705",
            },
          }}
          component={Link}
        >
          Dashboard
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <>
    

      <AppBar
        position="static"
        elevation={0}
        component="nav"
        sx={{
          background: "transparent",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Container maxWidth="xl">
            <Hidden lgDown>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",

                  paddingTop: "10px",
                }}
              >
                <Box display="flex" alignItems="center">
                  <ListItemButton
                    to="/"
                    sx={{
                      borderBottom:
                        location.pathname === "/" ? "2px solid #F2B705" : "",
                      color: location.pathname === "/" ? "#F2B705" : "#000000",
                      fontFamily: theme.typography.subtitle1.fontFamily,

                      "&:hover": {
                        color: "#F2B705",
                      },
                    }}
                    component={Link}
                  >
                    Home
                  </ListItemButton>

                  <ListItemButton
                    to="/Aboutus"
                    sx={{
                      borderBottom:
                        location.pathname === "/Aboutus"
                          ? "2px solid #F2B705"
                          : "",
                      fontFamily: theme.typography.subtitle1.fontFamily,
                      color:
                        location.pathname === "/Aboutus"
                          ? "#F2B705"
                          : "#000000",

                      "&:hover": {
                        color: "#F2B705",
                      },
                    }}
                    component={Link}
                  >
                    About us
                  </ListItemButton>
                  <ListItemButton
                    to="/Vehicles"
                    sx={{
                      color:
                        location.pathname === "/Vehicles"
                          ? "#F2B705"
                          : "#000000",
                      fontFamily: theme.typography.subtitle1.fontFamily,

                      "&:hover": {
                        color: "#F2B705",
                      },
                    }}
                    component={Link}
                  >
                    Vehicles
                  </ListItemButton>

                  <ListItemButton
                    to="/Services"
                    sx={{
                      fontFamily: theme.typography.subtitle1.fontFamily,
                      color:
                        location.pathname === "/Services"
                          ? "#F2B705"
                          : "#000000",
                      "&:hover": {
                        color: "#F2B705",
                      },
                    }}
                    component={Link}
                  >
                    Services
                  </ListItemButton>
                  <ListItemButton
                    to="/Booking"
                    sx={{
                      fontFamily: theme.typography.subtitle1.fontFamily,
                      color:
                        location.pathname === "/Booking"
                          ? "#F2B705"
                          : "#000000",
                      "&:hover": {
                        color: "#F2B705",
                      },
                    }}
                    component={Link}
                  >
                    Booking
                  </ListItemButton>
                  <ListItemButton
                    to="/FAQ"
                    sx={{
                      fontFamily: theme.typography.subtitle1.fontFamily,
                      color:
                        location.pathname === "/FAQ" ? "#F2B705" : "#000000",
                      "&:hover": {
                        color: "#F2B705",
                      },
                    }}
                    component={Link}
                  >
                    FAQ
                  </ListItemButton>
                  <ListItemButton
                    to="/Dashboard"
                    sx={{
                      fontFamily: theme.typography.subtitle1.fontFamily,
                      color:
                        location.pathname === "/Dashboard"
                          ? "#F2B705"
                          : "#000000",
                      "&:hover": {
                        color: "#F2B705",
                      },
                    }}
                    component={Link}
                  >
                    Dashboard
                  </ListItemButton>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="#000000"
                    fontFamily="theme.typography.subtitle1.fontFamily"
                  >
                    Follow Now
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <a href="">
                      <img
                        src={facebook}
                        alt=""
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                    <a href="">
                      <img
                        src={linkedin}
                        alt=""
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                    <a href="">
                      <img
                        src={twitter}
                        alt=""
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                    <a href="">
                      <img
                        src={instagram}
                        alt=""
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Hidden>
            <Hidden lgUp>
              <Stack
                direction="row"
                justifyContent="space-between"
                width="100%"
              >
                <ListItemButton
                  to="/"
                  sx={{
                    color: location.pathname === "/" ? "#F2B705" : "#000000",
                    fontFamily: theme.typography.subtitle1.fontFamily,
                  }}
                  component={Link}
                >
                  <Typography variant="h3" color="#F2B705">
                    Logo
                  </Typography>
                </ListItemButton>
                <Button onClick={toggleDrawer(true)}>
                  <MenuIcon
                    style={{
                      fontSize: "38px",
                      cursor: "pointer",
                      color: "#000000",
                    }}
                  />
                </Button>
              </Stack>
              <Paper style={{ background: "#373A41" }}>
                <SwipeableDrawer
                  PaperProps={{
                    sx: {
                      background: "#373A41 !important",
                      justifyContent: "center",
                    },
                  }}
                  anchor="left"
                  open={openDrawer}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  {list()}
                </SwipeableDrawer>
              </Paper>
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
