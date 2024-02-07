import React from 'react'
import {Box,ListItemButton,Typography}  from "@mui/material";
import theme from "../../theme";
import CommonButton from "../../components/CommonButton";
import email from "../../assets/email.png";
import { Link } from 'react-router-dom';
const MainNav = ({bgColor}) => {
  return (
    <div>
       
        <Box
        sx={{
          backgroundColor: bgColor||"#373A41",
          padding: { md: "10px 0px", xs: "20px 0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box>
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
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { sm: "row", xs: "column" },
              gap: { md: "150px", xs: "0px" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              >
                <img
                  src={email}
                  alt="email"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Box>
                <Typography
                  variant="subtitle1"
                  color="#fff"
                  fontSize="12px"
                  fontWeight="bold"
                >
                  Mail To Us
                </Typography>
                <Typography variant="subtitle1" color="#fff" fontSize="15px">
                  info@FlexLogistics{" "}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                gap: "10px",
              }}
            >
              <CommonButton
                to="/Login"
                component={Link}
                sx={{
                  backgroundColor: "#F2B705",
                  color: "#fff",
                  padding: "5px 30px",
                  textTransform: "none",
                }}
              >
                Login
              </CommonButton>
              <CommonButton
                to="/Signup"
                component={Link}
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid #F2B705",
                  padding: "5px 20px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#F2B705",
                  },
                }}
              >
                Sign Up
              </CommonButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default MainNav
