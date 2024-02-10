import {
  Accordion,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import note from "../../assets/note.png";
const DriverSignupFive = () => {
  const userDetail = [
    {
      title: "Personal Information",
    },
    {
      title: "Driving Licence ",
    },
    {
      title: "CNIC Front Side",
    },
    {
      title: "CNIC Back Side",
    },
    {
      title: "Profile Photo",
    },
    {
      title: "Vehicle Registration Book",
    },
    {
      title: "Vehicle Picture",
    },
  ];
  return (
    <>
      <Box
        sx={{
          padding: "40px",
          border: "1px solid #F2B705",
          borderRadius: "20px",
          boxShadow: "0px 0px 18px rgba(242, 183, 5, 0.2)",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4" fontSize="24px" textAlign="center">
          Welcome, Name
        </Typography>
        <Typography variant="subtitle2" textAlign="center" mt={1}>
          Required steps
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize="14px"
          color="#F3F3F3"
          textAlign="center"
        >
          Follow these steps to setup your account
        </Typography>

        {userDetail.map((user, index) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              gap: "10px",
              marginTop: "10px",
            }}
            key={index}
          >
            <Box>
              <img
                src={note}
                alt="note"
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Accordion
                sx={{
                  backgroundColor: "#373A41",
                  color: "#fff",
                  border: "1px solid #373A41",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <KeyboardArrowRightIcon sx={{ color: "#C0C0C0" }} />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {user.title}
                </AccordionSummary>
              </Accordion>
              <Divider
                sx={{
                  width: "100%",
                  borderBottom: "2px solid #E6E6E6 ",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default DriverSignupFive;
