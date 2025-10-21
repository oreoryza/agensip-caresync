import React from "react";
import TotalPatients from "../components/charts/TotalPatients";
import AppointmentsChart from "../components/charts/AppointmentsChart";

const Patients = () => {
  return (
    <div className="container">
      <h2 className="font-bold">Patients</h2>
      <div className="flex flex-col gap-[16px] mt-[24px]">
      <div className="flex gap-[16px]">
        <div className="w-full bg-white/[.4] p-[20px] rounded-[20px]"></div>
        <div className="flex flex-col gap-[16px]">
          <div className="bg-white/[.4] p-[20px] rounded-[20px]">
            <TotalPatients />
          </div>
          <div className="bg-white/[.4] p-[20px] rounded-[20px]">
            <AppointmentsChart />
          </div>
        </div>
      </div>
      <div className="w-full bg-white/[.4] p-[20px] rounded-[20px]"></div>
      </div>
    </div>
  );
};

export default Patients;
