import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PatientsChart = () => {
  const data = useSelector((state) => state.data);

  const chartData = {
    labels: data?.patients?.treatments?.map((treatment) => treatment.name),
    datasets: [
      {
        label: "Recovered",
        data: data?.patients?.treatments?.map((treatment) => treatment.recovered),
        backgroundColor: "rgba(0, 128, 0, 0.8)",
        stack: "Stack 0",
      },
      {
        label: "Under Treatment",
        data: data?.patients?.treatments?.map((treatment) => treatment.under),
        backgroundColor: "rgba(229, 229, 229, 0.8)",
        stack: "Stack 0",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
        min: 50
      },
    },
    elements: {
      bar: {
        borderRadius: 100,
      },
    },
  };

  return (
    <div className="xl:w-full max-xl:min-w-[400px] h-[200px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default PatientsChart;
