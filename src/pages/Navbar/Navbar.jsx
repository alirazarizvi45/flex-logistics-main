import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Hidden,
  Paper,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import theme from "../../theme";
import { Link } from "react-scroll";
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
  const [activeLinks, setActiveLinks] = useState({
    home: false,
    "about-us": false,
    "enjoy-the-ride": false,
    services: false,
    "how-it-work": false,
    faq: false,
  });
  const handleLinkClick = (linkId) => {
    // Clear active state for all links
    const updatedActiveLinks = Object.fromEntries(
      Object.entries(activeLinks).map(([key, value]) => [key, false])
    );
    // Set active state for the clicked link
    updatedActiveLinks[linkId] = true;
    setActiveLinks(updatedActiveLinks);
  };

  const getLinkStyles = (linkId) => ({
    borderBottom: activeLinks[linkId] ? "2px solid #F2B705" : "",
    fontFamily: theme.typography.subtitle1.fontFamily,
    color: activeLinks[linkId] ? "#F2B705" : "#000000",
    "&:hover": {
      color: "#F2B705",
    },
    cursor: "pointer",
  });
  const getLinkStylesDrawer = (linkId) => ({
    borderBottom: activeLinks[linkId] ? "2px solid #F2B705" : "",
    fontFamily: theme.typography.subtitle1.fontFamily,
    color: activeLinks[linkId] ? "#F2B705" : "#fff",
    "&:hover": {
      color: "#F2B705",
    },
    cursor: "pointer",
  });
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
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => handleLinkClick("home")}
        >
          <Typography sx={getLinkStylesDrawer("home")}>Home</Typography>
        </Link>

        <Link
          activeClass="active"
          to="about-us"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => handleLinkClick("about-us")}
        >
          <Typography sx={getLinkStylesDrawer("about-us")}>About us</Typography>
        </Link>

        <Link
          activeClass="active"
          to="enjoy-the-ride"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => handleLinkClick("enjoy-the-ride")}
        >
          {" "}
          <Typography sx={getLinkStylesDrawer("enjoy-the-ride")}>
            Vehicles
          </Typography>
        </Link>

        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => handleLinkClick("services")}
        >
          <Typography sx={getLinkStylesDrawer("services")}>Services</Typography>
        </Link>
        <Link
          activeClass="active"
          to="how-it-work"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => handleLinkClick("how-it-work")}
        >
          <Typography sx={getLinkStylesDrawer("how-it-work")}>
            Booking
          </Typography>
        </Link>
        <Link
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => handleLinkClick("faq")}
        >
          <Typography sx={getLinkStylesDrawer("faq")}>FAQ</Typography>
        </Link>
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
                <Box display="flex" alignItems="center" gap="20px">
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => handleLinkClick("home")}
                  >
                    <Typography sx={getLinkStyles("home")}>Home</Typography>
                  </Link>

                  <Link
                    activeClass="active"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => handleLinkClick("about-us")}
                  >
                    <Typography sx={getLinkStyles("about-us")}>
                      About us
                    </Typography>
                  </Link>

                  <Link
                    activeClass="active"
                    to="enjoy-the-ride"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => handleLinkClick("enjoy-the-ride")}
                  >
                    {" "}
                    <Typography sx={getLinkStyles("enjoy-the-ride")}>
                      Vehicles
                    </Typography>
                  </Link>

                  <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => handleLinkClick("services")}
                  >
                    <Typography sx={getLinkStyles("services")}>
                      Services
                    </Typography>
                  </Link>
                  <Link
                    activeClass="active"
                    to="how-it-work"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => handleLinkClick("how-it-work")}
                  >
                    <Typography sx={getLinkStyles("how-it-work")}>
                      Booking
                    </Typography>
                  </Link>
                  <Link
                    activeClass="active"
                    to="faq"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => handleLinkClick("faq")}
                  >
                    <Typography sx={getLinkStyles("faq")}>FAQ</Typography>
                  </Link>
                  {/* <Link
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
                   
                  >
                    Dashboard
                  </Link> */}
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
                <Link
                  to="/"
                  sx={{
                    color: location.pathname === "/" ? "#F2B705" : "#000000",
                    fontFamily: theme.typography.subtitle1.fontFamily,
                  }}
                >
                  <Typography variant="h3" color="#F2B705">
                    Logo
                  </Typography>
                </Link>
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
