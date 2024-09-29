import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartsTab = () => {
  const [timeframe, setTimeframe] = useState("1w");

  const options: ApexOptions = {
    chart: {
      id: "price-chart",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      labels: {
        formatter: (value: number) => `$${value.toFixed(2)}`,
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      y: {
        formatter: (value: number) => `$${value.toFixed(2)}`,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    colors: ["#6366F1"],
  };

  const series = [
    {
      name: "Price",
      data: [
        [1632700800000, 61000],
        [1632787200000, 62500],
        [1632873600000, 64000],
        [1632960000000, 63500],
        [1633046400000, 64850.35],
        [1633132800000, 63179.71],
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        mx: "70px",
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: 10,
          }}>
          <Box sx={{ display: "flex" }}>
            <OpenInFullIcon fontSize="small" sx={{ color: "grey" }} />
            <Typography
              sx={{
                mx: 1,

                color: " #6F7177",
              }}>
              {"FullScreen"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", ml: 2 }}>
            <AddCircleOutlineIcon fontSize="small" sx={{ color: "grey" }} />
            <Typography sx={{ color: "grey", mx: 1 }}>{"Compare"}</Typography>
          </Box>
        </Box>

        <Box>
          <ButtonGroup sx={{ my: 2 }}>
            {["1d", "3d", "1w", "1m", "6m", "1y", "max"].map((tf) => (
              <Button
                sx={{
                  border: "none",
                  color: timeframe === tf ? "white" : "grey",
                  backgroundColor: timeframe === tf ? "#6366F1" : "transparent",
                  borderRadius: 1,
                }}
                key={tf}
                onClick={() => setTimeframe(tf)}
                variant={timeframe === tf ? "contained" : "outlined"}>
                <Typography>{tf}</Typography>
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>

      <Box sx={{ mt: 0 }}>
        <Chart options={options} series={series} type="area" height={350} />
      </Box>
    </Box>
  );
};

export default ChartsTab;
