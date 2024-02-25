import {
  Box,
  Container,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Schedule from "./Schedule";
import History from "./History";
import SearchIcon from "@mui/icons-material/Search";

const ControlPanel = () => {
  const [city, setCity] = useState("All Cities");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabContent = [<Schedule />, <History />];

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            border: "1px solid #3A3A3B",
            borderRadius: "11px ",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="#fff"
            variant="fullWidth"
          >
            {" "}
            ,
            <Tab
              label="Schedule"
              sx={{
                flexGrow: 1,

                borderBottom: "none",
                bgcolor: value === 0 ? "#373A41" : "#E9EAEA",

                padding: "30px 0px",
                borderRadius: "10px 10px 0px 0px",
                textDecoration: "none",
                fontWeight: "bold",
                color: value === 0 ? "#fff" : "#000",
                textTransform: "none",
                fontSize: "20px",
              }}
            />
            <Tab
              label="History"
              sx={{
                flexGrow: 1,

                borderBottom: "none",
                bgcolor: value === 1 ? "#373A41" : "#E9EAEA",

                padding: "30px 0px",
                borderRadius: "10px 10px 0px 0px",
                fontWeight: "bold",
                color: value === 1 ? "#fff" : "#000",
                textTransform: "none",
                fontSize: "20px",
              }}
            />
            {/* Rest of the tabs */}
          </Tabs>
          <Box
            sx={{
              padding: "20px 30px",
            }}
          >
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                sx={{ color: "#000" }}
                placeholder="Booking ID or Passenger name"
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{
                      marginRight: "-13px",
                    }}
                  >
                    <Select
                      fullWidth
                      value={city}
                      onChange={handleCityChange}
                      sx={{
                        backgroundColor: "#F2F2F2",
                        color: "#000000",
                        "& .MuiSelect-icon": {
                          color: "#000000",
                        },

                        // marginLeft: "654px",
                        marginLeft: "auto",
                      }}
                    >
                      <MenuItem value="All Cities" sx={{ color: "#000000" }}>
                        All Cities
                      </MenuItem>
                      <MenuItem value=" City Two " sx={{ color: "#000000" }}>
                        City Two
                      </MenuItem>
                      <MenuItem value="City Three" sx={{ color: "#000000" }}>
                        City Three
                      </MenuItem>
                    </Select>
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
          <Box sx={{ p: 3 }}>
            {tabContent.map((content, index) => (
              <div
                key={index}
                role="tabpanel"
                hidden={value !== index}
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
              >
                {value === index && <div>{content}</div>}
              </div>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ControlPanel;
