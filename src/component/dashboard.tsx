import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import AnalysisTab from "./analysis-tab";
import ChartsTab from "./charts-tab";
import TotalSales from "./header";
import SettingsTab from "./settings-tab";
import StatisticsTab from "./statistics-tab";
import SummaryTab from "./summary-tab";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState<string>("charts");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          mt: "50px",
          ml: "70px",
        }}>
        <TotalSales />
      </Box>

      <Box>
        <Box sx={{ width: "100%" }}>
          <Tabs
            sx={{
              color: "black",
              ml: "55px",
              mt: "10px",
              "& .MuiTabs-indicator": {
                backgroundColor: "black",
              },
            }}
            value={currentTab}
            onChange={handleChange}
            aria-label="wrapped label tabs example">
            <Tab
              label={
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    font: "Circular Std",
                    lineHeight: "22.77px",
                    color: "#1A243A",
                  }}>
                  {"Summary"}
                </Typography>
              }
              value={"summary"}
            />
            <Tab
              label={
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    font: "Circular Std",
                    lineHeight: "22.77px",
                    color: "#1A243A",
                  }}>
                  {"Charts"}
                </Typography>
              }
              value={"charts"}
            />
            <Tab
              label={
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    font: "Circular Std",
                    lineHeight: "22.77px",
                    color: "#1A243A",
                  }}>
                  {"Statistics"}
                </Typography>
              }
              value={"statistics"}
            />
            <Tab
              label={
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    font: "Circular Std",
                    lineHeight: "22.77px",
                    color: "#1A243A",
                  }}>
                  {"Analysis"}
                </Typography>
              }
              value={"analysis"}
            />
            <Tab
              label={
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    font: "Circular Std",
                    lineHeight: "22.77px",
                    color: "#1A243A",
                  }}>
                  {"Settings"}
                </Typography>
              }
              value={"settings"}
            />
          </Tabs>
          <Divider style={{ width: "100%" }} />
        </Box>

        {currentTab === "summary" && <SummaryTab />}
        {currentTab === "charts" && <ChartsTab />}
        {currentTab === "statistics" && <StatisticsTab />}
        {currentTab === "analysis" && <AnalysisTab />}
        {currentTab === "settings" && <SettingsTab />}
      </Box>
    </Box>
  );
};

export default Dashboard;
