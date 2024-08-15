import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function CircularProgressWithLabel() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (progress < 100) {
      timer = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 10);
      }, 1000); // Update progress every second
    }

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, [progress]); // Run effect when progress changes

  useEffect(() => {
    // Reset progress to 0 when the component mounts or when progress reaches 100
    if (progress >= 100) {
      setProgress(0);
    }
  }, [progress]);

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={progress} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" color="text.secondary">
          {`${Math.floor(progress / 10)}`}
        </Typography>
      </Box>
    </Box>
  );
}
