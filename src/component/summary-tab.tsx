import { Box } from "@mui/material";
import React from "react";
import NoDataPlaceholder from "./no-data-placeholder";

const SummaryTab = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mx: 10, mt: 10 }}>
      <NoDataPlaceholder title={"Summary"} />
    </Box>
  );
};

export default SummaryTab;
