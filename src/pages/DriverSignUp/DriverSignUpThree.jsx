import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomizeTelInput } from "../../components/CustomizeTelInput";
import CommonButton from "../../components/CommonButton";

const DriverSignUpThree = () => {
  const [language, setLanguage] = useState("");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          padding: "40px",
          border: "1px solid #F2B705",
          borderRadius: "10px",
          boxShadow: "0px 0px 18px rgba(242, 183, 5, 0.2)",
          marginTop: "50px",
        }}
      >
        <Typography variant="h4" textAlign="center">
          Select your language
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mt={2}>
          Adjust your language preference here or at any time in the Help
          section.
        </Typography>
        <Box
          sx={{
            paddingTop: "20px",
          }}
        >
          <Typography variant="subtitle1" fontSize="14px">
            Language
          </Typography>
          <FormControl sx={{ marginTop: "5px" }} fullWidth>
            <Select
              value={language}
              onChange={handleLanguageChange}
              fullWidth
              sx={{
                backgroundColor: "#fff",
                color: "#000000",
                "& .MuiSelect-icon": {
                  color: "#000000",
                },
              }}
            >
              <MenuItem value="Language one" sx={{ color: "#000000" }}>
                Language one
              </MenuItem>
              <MenuItem value=" Language Two " sx={{ color: "#000000" }}>
                Language Two
              </MenuItem>
              <MenuItem value="Language Three" sx={{ color: "#000000" }}>
                LanguageThree
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <CommonButton fullWidth>Continue</CommonButton>
        </Box>
      </Box>
    </>
  );
};

export default DriverSignUpThree;
