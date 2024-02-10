import { LoadingButton } from "@mui/lab";
import React from "react";
import theme from "../theme";
const CommonButton = (props) => {
  const { children, loading, backgroundColor, color, LeftIcon, RightIcon } =
    props;
  return (
    <>
      <LoadingButton
        loadingPosition="end"
        type="submit"
        loading={loading}
        disabled={loading}
        sx={{
          fontSize: {
            md: "14px",
            xs: "10px",
          },
          textTransform: "none",
          padding: "5px 20px",
          fontFamily: theme.typography.subtitle1.fontFamily,
          backgroundColor: backgroundColor || "#F2B705",
          color: color || "#fff",

          "&:hover": {
            backgroundColor: backgroundColor || "transparent",
            color: color || "#fff",
          },
        }}
        {...props}
      >
        {LeftIcon ?? false}
        {loading ? "Processing" : children}
        {RightIcon ?? false}
      </LoadingButton>
    </>
  );
};
export default CommonButton;
