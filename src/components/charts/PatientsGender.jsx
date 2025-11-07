import React from "react";
import { useSelector } from "react-redux";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PatientsGender = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className="w-full">
      <div className="relative flex items-start gap-[38px] w-full">
        <div className="relative flex justify-center items-center w-full h-full pr-[120px] max-w-[350px]">
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
                  cutout: "70%",
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
                  enabled: true,
                },
              },
            }}
            height={200}
          />
          <div className="absolute text-center">
            <p className="text-[10px]">Total</p>
            <p className="text-title font-bold">
              {data.patients?.genders.male + data.patients?.genders.female}
            </p>
          </div>
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
