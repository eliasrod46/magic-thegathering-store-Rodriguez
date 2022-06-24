//Spiner de Material UI
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spiner = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress/>
    </Box>
  );
};

export default Spiner;
