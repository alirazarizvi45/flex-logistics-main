import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CustomizeInput } from "./CustomizeInput";
import CommonButton from "./CommonButton";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { auth, db } from "../constants/firebaseConfig";
import { get, ref } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RiderReAuthenticateModel = ({
  notificationProps,

  setnotificationProps,
}) => {
  const handleClose = () => {
    setnotificationProps({ ...notificationProps, modal: false });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleContinue = async () => {
    try {
      // Check if the email and password are provided

      // Construct the credential using EmailAuthProvider.credential
      const credential = EmailAuthProvider.credential(
        formData.email,
        formData.password
      );

      // Get the current user
      const user = auth.currentUser;

      // Reauthenticate the user with the obtained credential
      const riderRef = ref(db, `Riders/${user.uid}`);
      const riderSnapshot = await get(riderRef);
      if (riderSnapshot.exists()) {
        await reauthenticateWithCredential(user, credential);
        // Close the modal after successful reauthentication
        setFormData({
          email: "",
          password: "",
        });
        setnotificationProps({ modal: false });
      } else {
        toast.error("Email or Password doses not exist");
        console.log("Rider data does not exist.");
      }
    } catch (error) {
      console.error("Error occurred during reauthentication:", error);
      // Handle error, show message to the user, etc.
      toast.error("Email or Password doses not exist");
    }
  };

  return (
    <>
      <ToastContainer />
      <Dialog
        open={notificationProps.modal}
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
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" fontWeight={600} color="#000">
                  Your Email
                </Typography>
                <CustomizeInput
                  placeholder="abcd@gmail.com"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Box>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" fontWeight={600} color="#000">
                  Enter Your Password
                </Typography>
                <CustomizeInput
                  fullWidth
                  placeholder="********"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handlePasswordVisibility}
                          sx={{ color: "#F2B705" }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <CommonButton onClick={handleContinue}>Continue</CommonButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RiderReAuthenticateModel;
