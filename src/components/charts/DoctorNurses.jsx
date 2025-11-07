import React from "react";
import { useSelector } from "react-redux";

import person1 from "/src/assets/patient-1.jpg"
import person2 from "/src/assets/patient-2.jpg"
import person3 from "/src/assets/patient-3.jpg"

const DoctorNurses = () => {
  const data = useSelector((state) => state.data);
  return (
    <div className="flex w-full h-full">
      <div
        className="flex flex-col justify-between"
        style={{
          width: `${
            (data.nurses.total / (data.nurses.total + data.doctors.total)) * 100
          }%`,
        }}
      >
        <div className="flex flex-col gap-[10px] pb-[24px] pl-[10px] h-full border-l border-black/[.2] border-dashed">
          <div className="flex gap-2 items-center text-xs text-black/[.5]">
            <div className="size-[8px] bg-green rounded-[2px]"></div>Nurses
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-title font-bold">{data.nurses.total}</p>
            <div className="flex">
              <div className="bg-green size-[14px] rounded-[100%] outline-2 outline-white/[.6] z-2 overflow-hidden">
                <img src={person1} alt=""/>
              </div>
              <div className="bg-green size-[14px] rounded-[100%] outline-2 outline-white/[.6] -ml-1 z-1 overflow-hidden">
                <img src={person2} alt=""/>
              </div>
              <div className="bg-green size-[14px] rounded-[100%] outline-2 outline-white/[.6] -ml-1 overflow-hidden">
                <img src={person3} alt=""/>
              </div>
            </div>
          </div>
          <p className="text-xs text-black/[.5]">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="h-[64px] w-full leftIn bg-green rounded-l-full"></div>
      </div>
      <div
        className="flex flex-col justify-between"
        style={{
          width: `${
            (data.doctors.total / (data.nurses.total + data.doctors.total)) *
            100
          }%`,
        }}
      >
        <div className="flex flex-col gap-[10px] pb-[24px] pl-[10px] h-full border-l border-black/[.2] border-dashed">
          <div className="flex gap-2 items-center text-xs text-black/[.5]">
            <div className="size-[8px] bg-yellow rounded-[2px]"></div>Doctor
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-title font-bold">{data.doctors.total}</p>
            <div className="flex">
              <div className="bg-green size-[14px] rounded-[100%] outline-2 outline-white/[.6] z-2 overflow-hidden">
                <img src={person2} alt=""/>
              </div>
              <div className="bg-green size-[14px] rounded-[100%] outline-2 outline-white/[.6] -ml-1 z-1 overflow-hidden">
                <img src={person3} alt=""/>
              </div>
              <div className="bg-green size-[14px] rounded-[100%] outline-2 outline-white/[.6] -ml-1 overflow-hidden">
                <img src={person1} alt=""/>
              </div>
            </div>
          </div>
          <p className="text-xs text-black/[.5]">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="h-[64px] w-full leftIn bg-yellow rounded-r-full"></div>
      </div>
    </div>
  );
};

export default DoctorNurses;
