import React from "react";
import { useSelector } from "react-redux";

import { FiArrowUpRight } from 'react-icons/fi';

const TotalAmbulances = () => {
  const data = useSelector((state) => state.data);

  const percentage =
    ((data.ambulances.slice(-1)[0] - data.ambulances.slice(-2)[0]) /
      data.ambulances.slice(-2)[0]) *
    100;
  const percent = percentage.toFixed(1);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-small font-bold">Total ambulance</p>
          <div
            className={`${
              percent > 0 ? "bg-green/[.1] text-green" : "bg-red/[.1] text-red"
            } text-xs font-medium p-[4px] rounded-full max-xl:hidden`}
          >
            {percent > 0 ? ("+"+percent) : (percent)}%
          </div>
        </div>
        <button className="flex justify-center items-center bg-white size-[24px] rounded-[100%]"><FiArrowUpRight/></button>
      </div>
      <div className="flex justify-between items-start gap-[38px] w-full xl:h-[120px]">
        <div className="flex items-end gap-2 w-full h-full max-xl:hidden">
          {data?.ambulances?.map((total, index) => (
            <div
              key={index}
              title={total}
              className={`flex w-full rounded-full ${
                index === data?.ambulances?.length - 1
                  ? "bg-linear-to-b from-yellow to-green"
                  : "bg-grey"
              }`}
              style={{ height: `${(total / 120) * 100}%` }}
            ></div>
          ))}
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-2">
          <h2 className="font-bold">{data.ambulances.slice(-1)[0]}</h2>
          <div
            className={`${
              percent > 0 ? "bg-green/[.1] text-green" : "bg-red/[.1] text-red"
            } text-xs font-medium p-[4px] rounded-full xl:hidden`}
          >
            {percent > 0 ? ("+"+percent) : (percent)}%
          </div>
          </div>
          <p className="text-xs text-black/[.6]">
            Ambulances {percent > 0 ? "increased by" : "dropped by"}{" "}
            <span
              className={`font-medium ${
                percent > 0 ? "text-green" : "text-red"
              }`}
            >
              {percent > 0 ? ("+"+percent) : (percent)}%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalAmbulances;
