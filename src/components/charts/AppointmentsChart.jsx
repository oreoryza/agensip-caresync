import React from "react";
import { useSelector } from "react-redux";

import { FiArrowUpRight } from "react-icons/fi";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AppointmentsChart = () => {
  const data = useSelector((state) => state.data);

  const percentage =
    ((data.patients.appointment.slice(-1)[0] -
      data.patients.appointment.slice(-2)[0]) /
      data.patients.appointment.slice(-2)[0]) *
    100;
  const percent = percentage.toFixed(1);

  const chartData = {
    labels: data?.patients?.appointment?.map((_, index) => index.toString()),
    datasets: [
      {
        label: "Appointments",
        data: data?.patients?.appointment,
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.2)",
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 4,
        hitRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="max-xl:flex flex-col justify-between h-full w-full">
      <div className="flex justify-between items-center mb-[10px]">
        <div className="flex gap-2 items-center">
          <p className="text-small font-bold">Appointments</p>
          <div
            className={`${
              percent > 0 ? "bg-green/[.1] text-green" : "bg-red/[.1] text-red"
            } text-xs font-medium p-[4px] rounded-full max-xl:hidden`}
          >
            {percent}%
          </div>
        </div>
        <button className="flex justify-center items-center bg-white size-[24px] rounded-[100%]">
          <FiArrowUpRight />
        </button>
      </div>
      <div className="relative flex justify-between items-start gap-[38px] w-full h-[120px] overflow-hidden">
        <div className="w-full h-full pr-[120px] max-xl:hidden">
          <Line
            data={chartData}
            options={options}
            className="w-full max-w-[225px]"
          />
        </div>
        <div className="xl:absolute right-0 flex flex-col gap-[10px] max-w-[100px]">
          <div className="flex items-center gap-2">
            <h2 className="font-bold">
              {data.patients.appointment.slice(-1)[0]}
            </h2>
            <div
              className={`${
                percent > 0
                  ? "bg-green/[.1] text-green"
                  : "bg-red/[.1] text-red"
              } text-xs font-medium p-[4px] rounded-full xl:hidden`}
            >
              {percent}%
            </div>
          </div>
          <p className="text-xs text-black/[.6]">
            Appointments have {percent > 0 ? "increased" : "dropped"}{" "}
            <span
              className={`font-medium ${
                percent > 0 ? "text-green" : "text-red"
              }`}
            >
              {percent}%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsChart;
