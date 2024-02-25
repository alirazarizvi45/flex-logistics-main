import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../../components/CommonButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const Schedule = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Rider/EditBooking");
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2F2F2",
          padding: "20px 30px",
          borderRadius: "7px",
        }}
      >
        <Typography variant="h4" color="#F2B705">
          Fiza Zahra
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="subtitle1" color="#373A41">
              Booked by
            </Typography>
            <Typography variant="subtitle1" color="#373A41">
              Booked ID
            </Typography>
            <Typography variant="subtitle1" color="#373A41">
              Captain
            </Typography>
            <Typography variant="subtitle1" color="#373A41">
              Date & Time
            </Typography>
            <Typography variant="subtitle1" color="#373A41">
              Source
            </Typography>
            <Typography variant="subtitle1" color="#373A41">
              Destination
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="subtitle1" color="#373A41" fontWeight={600}>
              Fiza Zahra
            </Typography>
            <Typography variant="subtitle1" color="#373A41" fontWeight={600}>
              8799987345
            </Typography>
            <Typography variant="subtitle1" color="#373A41" fontWeight={600}>
              Not Assigned
            </Typography>
            <Typography variant="subtitle1" color="#373A41" fontWeight={600}>
              Jan 17, 2024 02:45 PM - 03:00 PM Nairobi
            </Typography>
            <Typography variant="subtitle1" color="#373A41" fontWeight={600}>
              123 ABC Street, Nairobi, Kenya
            </Typography>
            <Typography variant="subtitle1" color="#373A41" fontWeight={600}>
              Airport South Road, Embakasi, Nairobi, Kenya
            </Typography>
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <CommonButton onClick={handleClick}>Edit</CommonButton>
          <Box
            sx={{
              border: " 1px solid #F2B705",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <IconButton sx={{ color: "#000" }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Schedule;
