import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import CommonButton from "../../components/CommonButton";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ReChart = () => {
  const data = [
    { name: "January", uv: 4000, pv: 2400, amt: 2400 },
    { name: "February", uv: 3000, pv: 1398, amt: 2210 },
    { name: "March", uv: 2000, pv: 9800, amt: 2290 },
    { name: "April", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "June", uv: 2390, pv: 3800, amt: 2500 },
    { name: "July", uv: 3490, pv: 4300, amt: 2100 },
    { name: "August", uv: 3490, pv: 4300, amt: 2100 },
    { name: "September", uv: 3490, pv: 4300, amt: 2100 },
    { name: "October", uv: 3490, pv: 4300, amt: 2100 },
    { name: "November", uv: 3490, pv: 4300, amt: 2100 },
    { name: "December", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#D7A91C"
          fill="#D7A91C"
        />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#E1BE54"
          fill="#E1BE54"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
const Earning = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent={{ md: "space-between", xs: "center" }}
            alignItems="center"
            gap={{ md: "0px", xs: "20px" }}
            mt={4}
          >
            <Typography variant="h3" color="#000">
              Earning Overview
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                background: "#fff",
                padding: "10px 30px",
                borderRadius: "6px",
                // boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
                boxShadow:
                  "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box>
                <Typography variant="subtitle1" color="#000">
                  Total Balance
                </Typography>
                <Typography variant="h4" color="#000">
                  50,356 Ksh
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Box
            sx={{
              background: "#fff",
              boxShadow:
                "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              borderRadius: "7px",
            }}
            mt={4}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <CommonButton
                sx={{
                  backgroundColor: "#F1F1F1",
                  color: "#000",
                  textTransform: "none",
                  padding: "5px 20px",
                }}
              >
                Weekly
              </CommonButton>
              <CommonButton
                sx={{
                  backgroundColor: "#373A41",
                  color: "#fff",
                  textTransform: "none",
                  padding: "5px 20px",
                }}
              >
                Monthly
              </CommonButton>
              <CommonButton
                sx={{
                  backgroundColor: "#F1F1F1",
                  color: "#000",
                  textTransform: "none",
                  padding: "5px 20px",
                }}
              >
                Yearly
              </CommonButton>
            </Box>
            <Box mt={4}>
              <ReChart />
            </Box>
          </Box>
          <Typography variant="h3" color="#000" sx={{ margin: "20px 0px" }}>
            Overview
          </Typography>
          <Grid
            container
            sx={{
              borderRadius: "5px",
              boxShadow:
                "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
              padding: "40px 20px ",
              background: "#fff",
            }}
          >
            <Grid item md={3} xs={12}>
              <Box
                sx={{
                  mt: "20px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: { md: "row", xs: "column" },
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h4" color="#000">
                    1844
                  </Typography>
                  <Typography variant="subtitle1" color="#000">
                    Total Rides
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    position: { md: "absolute", xs: "none" },
                    top: 0,
                    right: 0,
                    height: { md: "50px", xs: "2px" },
                    width: { md: "1px", xs: "100px" },
                    background: "linear-gradient(to bottom,#FAE39C, #F2B705 )",
                  }}
                />
              </Box>
            </Grid>

            <Grid item md={3} xs={12}>
              <Box
                sx={{
                  mt: "20px",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h4" color="#000">
                    1844
                  </Typography>
                  <Typography variant="subtitle1" color="#000">
                    Total Rides
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    position: { md: "absolute", xs: "none" },
                    top: 0,
                    right: 0,
                    height: { md: "50px", xs: "2px" },
                    width: { md: "2px", xs: "100px" },
                    background: "linear-gradient(to bottom,#FAE39C, #F2B705 )",
                  }}
                />
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box
                sx={{
                  mt: "20px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: { md: "row", xs: "column" },
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h4" color="#000">
                    1844
                  </Typography>
                  <Typography variant="subtitle1" color="#000">
                    Total Rides
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    position: { md: "absolute", xs: "none" },
                    top: 0,
                    right: 0,
                    height: { md: "50px", xs: "2px" },
                    width: { md: "1px", xs: "100px" },
                    background: "linear-gradient(to bottom,#FAE39C, #F2B705 )",
                  }}
                />
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box
                sx={{
                  mt: "20px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: { md: "row", xs: "column" },
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h4" color="#000">
                    1844
                  </Typography>
                  <Typography variant="subtitle1" color="#000">
                    Total Rides
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    position: { md: "absolute", xs: "none" },
                    top: 0,
                    right: 0,
                    height: { md: "50px", xs: "2px" },
                    width: { md: "1px", xs: "100px" },
                    background: "linear-gradient(to bottom,#FAE39C, #F2B705 )",
                    display: { md: "none", xs: "block" },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Earning;
