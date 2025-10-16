import React from "react";
import TotalPatients from "../components/charts/TotalPatients";
import AppointmentsChart from "../components/charts/AppointmentsChart";

const Patients = () => {
  return (
    <div className="container">
      <h2 className="font-bold">Patients</h2>
      <div className="grid grid-cols-2 gap-[16px]">
        <div className="row-span-2 w-full"></div>
        <div className="bg-white/[.4] p-[20px] rounded-[20px]">
          <TotalPatients />
        </div>
        <div className="bg-white/[.4] p-[20px] rounded-[20px]">
          <AppointmentsChart />
        </div>
        <div className="col-span-2 w-full bg-white/[.4] p-[20px] rounded-[20px]"></div>
      </div>
    </div>
  );
};

export default Patients;
