import { Box, Typography } from "@mui/material";
import React from "react";

const TotalSales = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            fontSize: "70px",
            fontWeight: 400,
            font: "Circular Std",
            lineHeight: "88.56px",
          }}>
          {"63,179.71"}
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 400,
            font: "Circular Std",
            lineHeight: "30.36px",
            color: "#BDBEBF",
            mt: "12px",
          }}>
          {"USD"}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            font: "Circular Std",
            lineHeight: "22.77px",
            color: "#67BF6B",
          }}>
          {"+ 2,161.42 (3.54%)"}
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalSales;
