import { styled } from "@mui/material/styles";
import dynamic from "next/dynamic";
import type { Props } from "react-apexcharts";

const ApexChart = dynamic<Props>(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => null,
});

export const Chart = styled(ApexChart)(({ theme }) => ({
  "& .apexcharts-xaxistooltip": {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[16],
    borderRadius: theme.shape.borderRadius,
    border: 20,
    "&::before, &::after": {
      display: "none",
    },
  },
  "& .apexcharts-tooltip": {
    "&.apexcharts-theme-light, &.apexcharts-theme-dark": {
      backdropFilter: "blur(6px)",
      background: "transparent",
      border: 20,
      boxShadow: "none",
      "& .apexcharts-tooltip-title": {
        background: "#543453",
        border: 20,
        color: theme.palette.common.white,
        margin: 0,
      },
      "& .apexcharts-tooltip-series-group": {
        background: "#543453",
        border: 0,
        color: theme.palette.common.white,
      },
    },
  },
}));
