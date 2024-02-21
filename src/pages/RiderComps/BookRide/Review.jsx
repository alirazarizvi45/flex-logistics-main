import React, { useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Nyambura from "../../../assets/nyambura.png";
import EditIcon from "@mui/icons-material/Edit";
import CommonButton from "../../../components/CommonButton";

const Review = () => {
  const [value, setValue] = useState();
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
                flexDirection: { md: "row", xs: "column" },
                alignItems: "center",

                gap: "5px",
                marginTop: "20px",
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { md: "inherit", xs: "center" },
                marginTop: "20px",
              }}
            >
              <Typography variant="subtitle1" color="#373A41" fontWeight={600}>
                Rate your trip
              </Typography>

              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                size="large"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <IconButton sx={{ color: "#F2B705" }}>
                <EditIcon />
              </IconButton>
              <Typography variant="subtitle1" color="#373A41">
                Write a review
              </Typography>
            </Box>
            <Box>
              <TextField
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                placeholder="Message"
                sx={{
                  backgroundColor: "#fff",
                }}
              />
            </Box>
            <Box
              sx={{
                marginTop: "20px",
              }}
            >
              <CommonButton fullWidth>Submit</CommonButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Review;
