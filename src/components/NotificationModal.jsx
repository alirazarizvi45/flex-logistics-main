import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdjustIcon from "@mui/icons-material/Adjust";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CommonButton from "./CommonButton";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
export default function NotificationModal({
  notificationProps,
  setnotificationProps,
  onAcceptRequest,
}) {
  const handleClose = () => {
    setnotificationProps({ ...notificationProps, modal: false });
  };
  const handleAccept = () => {
    onAcceptRequest();
    handleClose();
  };
  return (
    <Dialog
      open={notificationProps?.modal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          backgroundColor: "#fff",
          border: "1px solid #F2B705",
          padding: "30px",
        },
      }}
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Stack direction="column" alignItems="center"></Stack>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
            }}
          >
            <AdjustIcon sx={{ color: "#EA3800" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="subtitle1" color="#5A5A5A">
                Pickup Location
              </Typography>
              <Typography variant="subtitle1" color="#5A5A5A" fontWeight="bold">
                {notificationProps.pickupLocation}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
              mt: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle1" color="#5A5A5A">
                ETA
              </Typography>
              <Typography
                variant="subtitle1"
                color="#5A5A5A"
                fontWeight="bold"
                sx={{
                  wordBreak: "break-word",
                }}
              >
                {notificationProps.locationDuration}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle1" color="#5A5A5A">
                Distance
              </Typography>
              <Typography variant="subtitle1" color="#5A5A5A" fontWeight="bold">
                {notificationProps.locationDistance}
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              border: "1px solid #373A41",
              mt: "20px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              mt: "20px",
            }}
          >
            <LocationOnIcon sx={{ color: "#F2B705" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="subtitle1" color="#5A5A5A">
                DropOff Location
              </Typography>
              <Typography variant="subtitle1" color="#5A5A5A" fontWeight="bold">
                {notificationProps.dropOffLocation}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #5A5A5A",
              display: "flex",

              gap: "20px",
              marginTop: "20px",
              padding: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" color="#5A5A5A">
                Booking Type
              </Typography>
              <Typography variant="subtitle1" color="#5A5A5A" fontWeight="bold">
                {notificationProps.travelType}
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "#5A5A5A" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" color="#5A5A5A">
                Payment Method
              </Typography>
              <Typography variant="subtitle1" color="#5A5A5A" fontWeight="bold">
                {notificationProps.paymentMethod}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <CircularProgressWithLabel />
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <CommonButton onClick={handleAccept}>Accept Ride</CommonButton>
      </DialogActions>
    </Dialog>
  );
}
