import { LoadingButton } from "@mui/lab";
import React from "react";

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

          padding: "5px 20px",

          backgroundColor: backgroundColor || "#F2B705",
          color: color || "#fff",

          "&:hover": {
            backgroundColor: backgroundColor || "transparent",
            color: color || "#fff",
            "&:hover": {
              backgroundColor: "#F2B705",
            },
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
