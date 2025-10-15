import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { FiArrowUpRight } from 'react-icons/fi';

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Room = () => {
  const data = useSelector((state) => state.data);
  const chartRef = useRef(null);

  const availablePercent = (data.patients.room.available / (data.patients.room.available + data.patients.room.unavailable)) * 100;
  const unavailablePercent = (data.patients.room.unavailable / (data.patients.room.available + data.patients.room.unavailable)) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-small font-bold">Available room</p>
        </div>
        <button className="flex justify-center items-center bg-white size-[24px] rounded-[100%]"><FiArrowUpRight/></button>
      </div>
      <div className="flex items-start gap-[38px] w-full h-[120px] overflow-hidden">
        <Doughnut
          ref={chartRef}
          data={{
            labels: ["Available", "Unavailable"],
            datasets: [
              {
                data: [
                  data.patients?.room.available || 0,
                  data.patients?.room.unavailable || 0,
                ],
                backgroundColor: ["#008C00", "#e2e2e2ff"],
                borderWidth: 12,
                borderColor: "#F6F6EC",
                borderRadius: 100,
                circumference: 180,
                rotation: 270
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return context.label + ': ' + context.parsed;
                  },
                },
              },
            },
          }}
          height={200}
          className="max-w-[200px]"
        />
        <div className="flex flex-col gap-[10px]">
          <h2 className="font-bold">{data.patients.total.slice(-1)[0]}</h2>
          <p className="text-xs text-black/[.6]">
            <span className="text-green font-medium">{availablePercent}%</span> available and <span className="text-red font-medium">{unavailablePercent}%</span> unavailable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Room;
