import React from "react";
import { useSelector } from "react-redux";

import { FiArrowUpRight } from "react-icons/fi";

const TotalPatients = () => {
  const data = useSelector((state) => state.data);

  const percentage =
    ((data.patients.total.slice(-1)[0] - data.patients.total.slice(-2)[0]) /
      data.patients.total.slice(-2)[0]) *
    100;
  const percent = percentage.toFixed(1);

  return (
    <div className="max-xl:flex flex-col justify-between h-full w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-small font-bold">Total patients</p>
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
      <div className="flex justify-between items-start gap-[38px] w-full h-[120px]">
        <div className="flex items-end gap-2 w-full h-full max-xl:hidden">
          {data?.patients?.total?.map((total, index) => (
            <h2
              key={index}
              className={`flex w-full rounded-full ${
                index === data?.patients?.total?.length - 1
                  ? "bg-linear-to-b from-yellow to-green"
                  : "bg-grey"
              }`}
              style={{ height: `${(total / 400) * 100}%` }}
            ></h2>
          ))}
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-2">
            <h2 className="font-bold">{data.patients.total.slice(-1)[0]}</h2>
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
            Patient count has {percent > 0 ? "increased" : "dropped"}{" "}
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

export default TotalPatients;
