import { Box, Container, Typography } from "@mui/material";
import React from "react";
import solarbus from "../../assets/solarbus.png";
const Services = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={solarbus}
              alt="solarbus"
              style={{ width: "25px", height: "25px", objectFit: "contain" }}
            />
            <Typography variant="h4" color="#F2B705">
              About Us
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Services;
