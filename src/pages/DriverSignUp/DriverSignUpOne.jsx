import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomizeTelInput } from "../../components/CustomizeTelInput";
import CommonButton from "../../components/CommonButton";

const DriverSignUpOne = () => {
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const [telNumber, setTelNumber] = useState("");
  const handleTelInputChange = (value) => {
    setTelNumber(value); // Update telNumber state with new value
  };
  return (
    <>
      <Box
        sx={{
          padding: "20px 40px",
          border: "1px solid #F2B705",
          borderRadius: "10px",
          boxShadow: "0px 0px 18px rgba(242, 183, 5, 0.2)",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4" textAlign="center">
          Register today and become a{" "}
          <span style={{ color: "#F2B705" }}> Flex Captain </span>
        </Typography>
        <Box
          sx={{
            paddingTop: "20px",
          }}
        >
          <Typography variant="subtitle1" fontSize="18px" pb={1}>
            Select City
          </Typography>
          <FormControl sx={{ marginTop: "5px" }} fullWidth>
            <Select
              value={city}
              onChange={handleCityChange}
              fullWidth
              sx={{
                backgroundColor: "#fff",
                color: "#000000",
                "& .MuiSelect-icon": {
                  color: "#000000",
                },
              }}
            >
              <MenuItem value="City one" sx={{ color: "#000000" }}>
                City one
              </MenuItem>
              <MenuItem value=" City Two " sx={{ color: "#000000" }}>
                City Two
              </MenuItem>
              <MenuItem value="City Three" sx={{ color: "#000000" }}>
                City Three
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Typography variant="subtitle2">Phone Number</Typography>
          <CustomizeTelInput
            placeholder="7X0 XXXXXX"
            name="telephone"
            value={telNumber}
            onChange={handleTelInputChange}
            defaultCountry="KE"
            MenuProps={{
              sx: {
                ".MuiTypography-root": {
                  color: "#1E1D1D !important",
                  fontWeight: "bold",
                },
              },
            }}
            textAlign="center"
          />
        </Box>
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <Typography variant="subtitle1" fontSize="12px">
            By proceeding, I consent to Flex Logistics or its representatives
            contacting me via email, phone, or SMS (including automatic
            telephone dialing systems) at the provided email address or number,
            including for marketing purposes.
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "right",
            mt: "20px",
          }}
        >
          <CommonButton>Next</CommonButton>
        </Box>
      </Box>
    </>
  );
};

export default DriverSignUpOne;
