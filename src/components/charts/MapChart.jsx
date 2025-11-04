import React from "react";
import { Chart } from "react-google-charts";

const MapChart = () => {
  // Sample data for European countries with patient counts
  const data = [
    ["Country", "Total Patients"],
    ["Germany", 150],
    ["France", 120],
    ["United Kingdom", 110],
    ["Italy", 100],
    ["Spain", 90],
    ["Netherlands", 80],
    ["Belgium", 70],
    ["Switzerland", 60],
    ["Austria", 55],
    ["Sweden", 50],
    ["Poland", 45],
    ["Norway", 40],
    ["Denmark", 35],
    ["Finland", 30],
    ["Portugal", 25],
    ["Greece", 20],
    ["Czech Republic", 18],
    ["Hungary", 16],
    ["Ireland", 14],
    ["Slovakia", 12],
    ["Slovenia", 10],
    ["Croatia", 9],
    ["Bulgaria", 8],
    ["Romania", 7],
    ["Lithuania", 6],
    ["Latvia", 5],
    ["Estonia", 0],
    ["Luxembourg", 0],
    ["Malta", 0],
    ["Cyprus", 0],
    ["Iceland", 0],
  ];

  const options = {
    region: "150", // Europe
    colorAxis: {
      colors: ["#e7e7e7", "#fff4cc", "#cce8cc", "#ffc700", "#008c00"],
      values: [0, 1, 21, 51, 101]
    },
    backgroundColor: "transparent",
    datalessRegionColor: "#ffffff",
    defaultColor: "#f5f5f5",
    height: 400,
    width: "100%",
    legend: "none",
    tooltip: {
      textStyle: { color: "#333", fontSize: 12 },
    },
  };

  return (
    <div className="w-full h-full">
      <Chart
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default MapChart;
