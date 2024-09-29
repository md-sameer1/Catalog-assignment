import { Box } from "@mui/material";
import React from "react";
import NoDataPlaceholder from "./no-data-placeholder";

const SettingsTab = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mx: 10, mt: 10 }}>
      <NoDataPlaceholder title={"Settings"} />
    </Box>
  );
};

export default SettingsTab;
