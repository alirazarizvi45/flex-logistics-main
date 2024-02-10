import { styled } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

export const CustomizeTelInput = styled(MuiTelInput)(({ theme }) => ({
  marginTop: "0px",
  "& label.Mui-focused": {
    // color: "#1E1D1D",
  },
  "& label": {
    color: "#1E1D1D",

    fontFamily: "Russo One",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "none",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    fontWeight: "bold",
    "& fieldset": {
      borderColor: "none",
    },
    "&:hover fieldset": {
      borderColor: "none",
    },
    "&.Mui-focused fieldset": {
      borderColor: "none",
    },
  },
}));
