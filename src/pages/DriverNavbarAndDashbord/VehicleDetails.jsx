import { Button, Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import blackcar from "../../assets/blackcar.png";
import CommonButton from "../../components/CommonButton";
import AddNewVehicle from "./AddNewVehicle";

const VehicleDetails = () => {
  const [showRegisterVehicle, setShowRegisterVehicle] = useState(false);
  const [showEditDocuments, setShowEditDocuments] = useState(false);
  const VehicleData = [
    {
      img: blackcar,
      name: "Mercedes",
      number: "kdk 1024",
      model: "EleganceXpress",
      color: "Black",
      seats: "6",
      year: "2020",
    },
    {
      img: blackcar,
      name: "Mercedes",
      number: "kdk 1024",
      model: "EleganceXpress",
      color: "Black",
      seats: "6",
      year: "2020",
    },
    {
      img: blackcar,
      name: "Mercedes",
      number: "kdk 1024",
      model: "EleganceXpress",
      color: "Black",
      seats: "6",
      year: "2020",
    },
  ];

  return (
    <>
      <Container maxWidth="xl">
<<<<<<< HEAD
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
=======
        {!showRegisterVehicle && !showEditDocuments && (
          <Box>
            <Stack direction="row" justifyContent="space-between" mt={4}>
              <Typography variant="h3" color="#000">
                Vehicles
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CommonButton onClick={() => setShowRegisterVehicle(true)}>
                  Register new Vehicle
                </CommonButton>
                <CommonButton onClick={() => setShowEditDocuments(true)}>
                  Edit Documents
                </CommonButton>
              </Box>
            </Stack>
            {VehicleData.map((data, index) => (
              <Grid
                container
                sx={{
                  borderRadius: "5px",
                  boxShadow:
                    "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
                  padding: "40px 20px ",
                  background: "#fff",
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={index}
                spacing={2}
              >
                <Grid item md={6} xs={12} mt={2}>
                  <img
                    src={data.img}
                    alt="blackcar"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="#373A41"
                  >
                    Vehicle Detail:
                  </Typography>
                  <Box sx={{ display: "flex", gap: 10, mt: "30px" }}>
                    <Box>
                      <Typography variant="subtitle1" color="#5A5A5A">
                        Name
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="#373A41"
                        fontWeight="bold"
                      >
                        {data.name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" color="#5A5A5A">
                        Number
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="#373A41"
                        fontWeight="bold"
                      >
                        {data.number}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" color="#5A5A5A">
                        Model
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="#373A41"
                        fontWeight="bold"
                      >
                        {data.model}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: 10, mt: "20px" }}>
                    <Box>
                      <Typography variant="subtitle1" color="#5A5A5A">
                        Color
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="#373A41"
                        fontWeight="bold"
                      >
                        {data.color}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" color="#5A5A5A">
                        No. of Seats
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="#373A41"
                        fontWeight="bold"
                      >
                        {data.seats}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" color="#5A5A5A">
                        Year
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="#373A41"
                        fontWeight="bold"
                      >
                        {data.year}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        )}

        {showRegisterVehicle && (
          <Box>
            <AddNewVehicle />
          </Box>
        )}

        {showEditDocuments && (
          <Box>
            Edit DocumentsEdit DocumentsEdit DocumentsEdit DocumentsEdit
            DocumentsEdit DocumentsEdit DocumentsEdit DocumentsEdit
            DocumentsEdit DocumentsEdit DocumentsEdit DocumentsEdit
            DocumentsEdit DocumentsEdit DocumentsEdit DocumentsEdit
            DocumentsEdit DocumentsEdit DocumentsEdit DocumentsEdit
            DocumentsEdit DocumentsEdit DocumentsEdit DocumentsEdit
            DocumentsEdit DocumentsEdit DocumentsEdit DocumentsEdit
            DocumentsEdit DocumentsEdit Documents
          </Box>
        )}
>>>>>>> 95d6aabca8bddd199511431e74372302cc16546d
      </Container>
    </>
  );
};

export default VehicleDetails;
