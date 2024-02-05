import { Box, Container, Typography } from "@mui/material";
import React from "react";
import landingFlexLogistics from "../../assets/landingFlexLogistics.png";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${landingFlexLogistics})`,
          backgroundPosition: "contain",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% ",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg" sx={{ marginTop: "60px" }}>
          <Box>
            <Typography>Elevate Your Commute with Flex Logistics</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
