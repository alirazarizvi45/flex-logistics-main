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
        {!showRegisterVehicle && !showEditDocuments && (
          <Box>
            <Stack
              direction={{ md: "row", xs: "column" }}
              justifyContent="space-between"
              gap={{ md: "unset", xs: "10px" }}
              mt={4}
            >
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
                  padding: " 20px ",
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
                  <Box>
                    <img
                      src={data.img}
                      alt="blackcar"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="#373A41"
                    textAlign="center"
                  >
                    Vehicle Detail:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "row", xs: "column" },
                      justifyContent: "space-around",
                      gap: { md: "20px", xs: "10px" },
                      mt: "30px",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { md: "column", xs: "row" },
                        alignItems: "center",
                        gap: { md: "unset", xs: "10px" },
                      }}
                    >
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
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { md: "column", xs: "row" },
                        alignItems: "center",
                        gap: { md: "unset", xs: "10px" },
                      }}
                    >
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
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { md: "column", xs: "row" },
                        alignItems: "center",
                        gap: { md: "unset", xs: "10px" },
                      }}
                    >
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "row", xs: "column" },
                      justifyContent: "space-around",
                      gap: { md: "20px", xs: "10px" },
                      mt: "30px",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { md: "column", xs: "row" },
                        alignItems: "center",
                        gap: { md: "unset", xs: "10px" },
                      }}
                    >
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
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { md: "column", xs: "row" },
                        alignItems: "center",
                        gap: { md: "unset", xs: "10px" },
                      }}
                    >
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
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { md: "column", xs: "row" },
                        alignItems: "center",
                        gap: { md: "unset", xs: "10px" },
                      }}
                    >
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
      </Container>
    </>
  );
};

export default VehicleDetails;
