import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const CustomizeInput = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "white",
    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
  },
  "& label": {
    color: "white",
    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#828282",
  },
  "& .MuiOutlinedInput-root": {
    color: "#9FA09C",
    backgroundColor: "#fff",
    "& fieldset": {
      // borderColor: "#828282",
    },
    "&:hover fieldset": {
      //  borderColor: "#828282",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#828282",
    },
    "&.Mui-disabled": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#828282",
      },
    },
  },
}));
