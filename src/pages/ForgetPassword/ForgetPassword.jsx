import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import loginbg from "../../assets/loginbg.png";

import CommonButton from "../../components/CommonButton";
import { CustomizeInput } from "../../components/CustomizeInput";

import { auth, firebaseDb } from "../../constants/firebaseConfig";

import { sendPasswordResetEmail } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = async () => {
    try {
      // Query for the Riders collection
      const riderRef = collection(firebaseDb, "Riders");
      const riderMatch = query(riderRef, where("email", "==", email));
      const riderQuerySnapshot = await getDocs(riderMatch);

      // Query for  the Drivers collection
      const driverRef = collection(firebaseDb, "Drivers");
      const driverMatch = query(driverRef, where("email", "==", email));
      const driverQuerySnapshot = await getDocs(driverMatch);

      if (riderQuerySnapshot.empty && driverQuerySnapshot.empty) {
        setError("Email is not registered.");
        console.log("Email is not registered.");
        return;
      }
      await sendPasswordResetEmail(auth, email);

      setResetSent(true);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${loginbg})`,
          backgroundPosition: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: { md: "100% 100%", xs: "100% 50%" },
          backgroundColor: "#373A41",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Container maxWidth="lg" sx={{ paddingTop: "100px" }}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: { sm: "center", xs: "unset" },
              alignItems: "center",
            }}
          >
            {resetSent ? (
              <Grid item xs={9}>
                <Box
                  sx={{
                    marginTop: { md: "50px", xs: "150px" },
                    border: "1px solid #F2B705",
                    textAlign: "center",
                    padding: "20px 10px",
                  }}
                >
                  <Typography variant="h2">
                    An email with instructions to reset your password has been
                    sent to <span style={{ color: "#F2B705" }}>{email}</span>{" "}
                    Check your email for further instructions
                  </Typography>
                </Box>
              </Grid>
            ) : (
              <Grid item xs={9}>
                <Box
                  sx={{
                    pt: "100px",
                  }}
                >
                  <Typography pb={1}>Email</Typography>
                  <CustomizeInput
                    placeholder="Enter your email"
                    size="small"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ width: { sm: 420, xs: 240 } }}
                  />
                </Box>

                <Box
                  sx={{
                    marginTop: "20px",
                  }}
                >
                  <CommonButton
                    sx={{
                      width: { sm: 420, xs: 240 },
                      backgroundColor: "#F2B705",
                      color: "#fff",
                      textTransform: "none",
                    }}
                    onClick={handleResetPassword}
                  >
                    Continue
                  </CommonButton>
                  {error && (
                    <Box
                      sx={{
                        marginTop: "50px",
                        border: "1px solid #F2B705",
                        textAlign: "center",
                        padding: "20px",
                      }}
                    >
                      <Typography variant="h4" color="red">
                        {error}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ForgetPassword;
