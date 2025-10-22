import React from "react";
import { useSelector } from "react-redux";

import { FiArrowUpRight } from "react-icons/fi";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PatientsGender = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className="w-full">
      <div className="relative flex items-start gap-[38px] w-full">
        <div className="relative w-full h-full pr-[120px] max-w-[350px]">
          <Doughnut
            data={{
              labels: ["Male", "Female"],
              datasets: [
                {
                  data: [
                    data.patients?.genders.male || 0,
                    data.patients?.genders.female || 0,
                  ],
                  backgroundColor: ["#008C00", "#ffc700"],
                  borderWidth: 12,
                  borderColor: "#F6F6EC",
                  hoverBorderColor: '#F6F6EC',
                  borderRadius: 100,
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
                    label: function (context) {
                      return context.label + ": " + context.parsed;
                    },
                  },
                },
              },
            }}
            height={200}
          />
        </div>
        <div className="absolute right-[20px] flex flex-col h-full justify-center gap-[10px] max-w-[120px]">
          <div>
            <div className="flex items-center gap-2 text-small text-black/[.5]">
              <div className="size-[10px] bg-green rounded-[2px]"></div> Male
            </div>
            <h2 className="font-bold">{data.patients.genders.male}</h2>
          </div>
          <div>
            <div className="flex items-center gap-2 text-small text-black/[.5]">
              <div className="size-[10px] bg-yellow rounded-[2px]"></div> Female
            </div>
            <h2 className="font-bold">{data.patients.genders.female}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsGender;
