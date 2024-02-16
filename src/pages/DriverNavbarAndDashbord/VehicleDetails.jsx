import { Button, Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import blackcar from "../../assets/blackcar.png";

const VehicleDetails = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ width: "1040px" }}>
          <Stack direction="row" justifyContent="space-between" mt={4}>
            <Typography variant="h3" sx={{color:'#373A41'}}>Vehicles</Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="contained" href="#contained-buttons">
                Register new Vehicle
              </Button>
              <Button variant="contained" href="#contained-buttons">
                Edit Documents
              </Button>
            </Box>
          </Stack>
          <Grid container>
            <Box
              sx={{
                background: "#E0E3EA",
                width: "1040px",
                height: "255px",
                display: "flex",
                justifyItems: "center",
                padding: "10px",
                mt:'30px',
                borderRadius:'10px'
              }}
            >
              <Grid item lg={6} md={6} sm={6} xs={12} mt={1}>
                <img src={blackcar} alt="blackcar" />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography variant="h3" sx={{color:'#000'}}>vehicle detail:</Typography>
                <Box sx={{ display: "flex", gap: 10, mt: "30px" }}>
                  <Box>
                    <Typography sx={{color:'#000'}}>Name</Typography>
                    <Typography sx={{color:'#000'}}>Mercedes</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{color:'#000'}}>Number</Typography>
                    <Typography sx={{color:'#000'}}>kdk 1024</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{color:'#000'}}>Model</Typography>
                    <Typography sx={{color:'#000'}}>EleganceXpress</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 10, mt: "37px" }}>
                  <Box>
                    <Typography sx={{color:'#000'}}>Name</Typography>
                    <Typography sx={{color:'#000'}}>Mercedes</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{color:'#000'}}>Number</Typography>
                    <Typography sx={{color:'#000'}}>kdk 1024</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{color:'#000'}}>Model</Typography>
                    <Typography sx={{color:'#000'}}>EleganceXpress</Typography>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default VehicleDetails;
