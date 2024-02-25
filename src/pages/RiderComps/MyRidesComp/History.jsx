import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../../components/CommonButton";
import historymap from "../../../assets/historymap.PNG";
import Nyambura from "../../../assets/nyambura.png";
import ChatIcon from "@mui/icons-material/Chat";
import PhoneIcon from "@mui/icons-material/Phone";
const History = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2F2F2",
          padding: "20px 30px",
          borderRadius: "7px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            alignItems: { md: "inherit", xs: "center" },
            gap: { md: "inherit", xs: "10px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography variant="subtitle1" color="#B5B5B5">
              5:50pm -
            </Typography>
            <Typography variant="subtitle1" color="#B5B5B5">
              6:45pm
            </Typography>
          </Box>
          <Box>
            <CommonButton
              sx={{
                backgroundColor: "#4BAE4F",
                color: "#fff",
                padding: "10px 30px",
              }}
            >
              Completed
            </CommonButton>
          </Box>
        </Stack>
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <img
            src={historymap}
            alt="historymap"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: { md: "inherit", xs: "center" },
              gap: "20px",
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

            <Box>
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
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Typography variant="subtitle1" color="#373A41">
                    (4.5)
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <Button
                  startIcon={<PhoneIcon />}
                  sx={{
                    backgroundColor: "#373A41",
                    color: "#fff",
                    textTransform: "none",
                    padding: "10px 20px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      border: "1px solid #373A41",
                      color: "#000",
                    },
                  }}
                >
                  Call
                </Button>
                <Button
                  startIcon={<ChatIcon />}
                  sx={{
                    backgroundColor: "#373A41",
                    color: "#fff",
                    textTransform: "none",
                    padding: "10px 20px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      border: "1px solid #373A41",
                      color: "#000",
                    },
                  }}
                >
                  Chat
                </Button>
              </Box>
              <Box
                sx={{
                  marginTop: "20px",
                }}
              >
                <Typography variant="h4" color="#373A41">
                  Vehicle Detail:
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="#373A41"
                      fontWeight={600}
                    >
                      Name:
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="#373A41"
                      fontWeight={600}
                    >
                      Number:
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="#373A41"
                      fontWeight={600}
                    >
                      Model:
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="#373A41"
                      fontWeight={600}
                    >
                      color:
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="subtitle1" color="#373A41">
                      Mercedes
                    </Typography>
                    <Typography variant="subtitle1" color="#373A41">
                      kdk 1024
                    </Typography>
                    <Typography variant="subtitle1" color="#373A41">
                      EleganceXpress
                    </Typography>
                    <Typography variant="subtitle1" color="#373A41">
                      Grey
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>

          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography variant="h5" fontWeight={600} color="#373A41">
              Total Fare
            </Typography>
            <Typography variant="h3" color="#F2B705">
              656 Ksh
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default History;
