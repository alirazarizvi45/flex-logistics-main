import React from "react";
import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import CommonButton from "../../../components/CommonButton";
import Nyambura from "../../../assets/nyambura.png";
const Review = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            background: "#F9F9F9",

            borderRadius: "7px ",
            border: "1px solid #373A41",
          }}
        >
          <Box
            sx={{
              background: "#373A41",
              padding: "20px 0px",
              borderRadius: "7px 7px 0px 0px ",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#fff", textAlign: "center" }}
            >
              Rate your rider
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "20px",
            }}
          >
            <Typography variant="h5" fontWeight={600} color="#373A41">
              How was your trip with Nyambura Wanjiru?
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                gap: "5px",
              }}
            >
              <Box>
                <img
                  src={Nyambura}
                  alt="Nyambura"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  gap: "10px",
                }}
              >
                <Typography variant="h4" color="#373A41">
                  Nyambura Wanjiru
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Rating name="half-rating" defaultValue={4} precision={0.5} />
                  <Typography variant="subtitle1" color="#373A41">
                    (4.5)
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Review;
