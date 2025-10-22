import React, { useState } from "react";
import TotalPatients from "../components/charts/TotalPatients";
import AppointmentsChart from "../components/charts/AppointmentsChart";
import { useSelector } from "react-redux";

import map from "../assets/map.svg";

import { MdCall } from "react-icons/md";
import { PiDotsThreeVertical } from "react-icons/pi";
import { LuChevronsUpDown } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

const Patients = () => {
  const patients = useSelector((state) => state.patients.patients);
   const [selectedCategory, setSelectedCategory] = useState("Day");
  
    const categories = [
      "Day",
      "Week",
      "Month",
    ];
  return (
    <div className="container">
      <h2 className="font-bold">Patients</h2>
      <div className="flex flex-col gap-[16px] mt-[24px]">
        <div className="flex gap-[16px]">
          <div className="flex w-full bg-white/[.4] rounded-[20px] overflow-hidden">
            <div className="flex flex-col justify-between p-[20px]">
              <p className="text-small font-bold">Patient locations</p>
              <div>
                <div className="mb-[20px]">
                  <h2 className="font-bold">400</h2>
                  <p className="text-small text-black/[.5]">Total patients</p>
                </div>
                <div className="mb-[20px]">
                  <div className="flex gap-2 items-center">
                    <h2 className="font-bold">300</h2>
                    <div className="flex">
                      <div className="bg-green size-[20px] rounded-[100%] outline-2 outline-white/[.6] z-2"></div>
                      <div className="bg-green size-[20px] rounded-[100%] outline-2 outline-white/[.6] -ml-1 z-1"></div>
                      <div className="bg-green size-[20px] rounded-[100%] outline-2 outline-white/[.6] -ml-1"></div>
                    </div>
                  </div>
                  <p className="text-small text-black/[.5]">Local patients</p>
                </div>
                <div className="mb-[20px]">
                  <div className="flex gap-2 items-center">
                    <h2 className="font-bold">100</h2>
                    <div className="flex">
                      <div className="bg-green size-[20px] rounded-[100%] outline-2 outline-white/[.6] z-2"></div>
                      <div className="bg-green size-[20px] rounded-[100%] outline-2 outline-white/[.6] -ml-1 z-1"></div>
                      <div className="bg-green size-[20px] rounded-[100%] outline-2 outline-white/[.6] -ml-1"></div>
                    </div>
                  </div>
                  <p className="text-small text-black/[.5]">
                    Foreigner country
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-end w-full">
              <img src={map} alt="" />
              <div className="absolute bottom-0 flex justify-end items-end h-[130px] w-full bg-linear-to-t from-[#F2F5F1] to-[#F2F5F1]/[.0]">
                <div className="flex gap-[20px] mb-[20px] mr-[20px]">
                  <div className="flex items-center gap-1 text-xs text-black/[.6]">
                    <div className="size-[10px] rounded-[100%] bg-grey"></div>
                    No patients
                  </div>
                  <div className="flex items-center gap-1 text-xs text-black/[.6]">
                    <div className="size-[10px] rounded-[100%] bg-light-yellow"></div>
                    1-20 patients
                  </div>
                  <div className="flex items-center gap-1 text-xs text-black/[.6]">
                    <div className="size-[10px] rounded-[100%] bg-light-green"></div>
                    21-50 patients
                  </div>
                  <div className="flex items-center gap-1 text-xs text-black/[.6]">
                    <div className="size-[10px] rounded-[100%] bg-yellow"></div>
                    51-100 patients
                  </div>
                  <div className="flex items-center gap-1 text-xs text-black/[.6]">
                    <div className="size-[10px] rounded-[100%] bg-green"></div>
                    100+ patients
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="bg-white/[.4] p-[20px] rounded-[20px]">
              <TotalPatients />
            </div>
            <div className="bg-white/[.4] p-[20px] rounded-[20px]">
              <AppointmentsChart />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="flex flex-col gap-[10px] w-full min-w-[1000px] bg-white/[.4] p-[40px] rounded-[20px]">
            <div className="flex justify-between items-center mb-[20px]">
              <div className="flex gap-2">
            {categories.map((category) => (
              <button
                onClick={() => setSelectedCategory(category)}
                className={`text-small outline-1 outline-black/[.1] px-[20px] py-[10px] rounded-full ${
                  selectedCategory === category
                    ? "bg-white outline-o text-black font-medium"
                    : "text-black/[.5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-[10px] bg-white py-[10px] pl-[12px] pr-[16px] rounded-full overflow-hidden">
                  <RiSearchLine className="size-[23px] text-black/[.5]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="focus:outline-0"
                  />
                </div>
                <button
                  onClick={() => setIsAdd(true)}
                  className="size-[42px] flex items-center justify-center bg-green rounded-[100%]"
                >
                  <FaPlus className="text-white" />
                </button>
              </div>
            </div>
            <div className="flex text-small text-black/[.8]">
              <div className="flex gap-2 items-center w-[17%]">
                Patient name <LuChevronsUpDown />
              </div>
              <div className="flex gap-2 items-center w-[19%]">
                Address <LuChevronsUpDown />
              </div>
              <div className="flex gap-2 items-center w-[13%]">
                Gender <LuChevronsUpDown />
              </div>
              <div className="flex gap-2 items-center w-[13%]">
                Category <LuChevronsUpDown />
              </div>
              <div className="flex gap-2 items-center w-[15%]">
                Treatment <LuChevronsUpDown />
              </div>
              <div className="flex gap-2 items-center w-[15%]">
                Payment <LuChevronsUpDown />
              </div>
              <div className="flex gap-2 items-center">Actions</div>
            </div>
            <div className="flex flex-col gap-[6px] w-full">
              {patients.map((patient) => (
                <div
                  key={patient.id}
                  className="flex items-center bg-white/[.4] rounded-full p-[12px]"
                >
                  <div className="flex gap-1 items-center w-[17%]">
                    <img
                      src={patient.img}
                      alt={patient.name}
                      className="size-[36px] object-cover rounded-[100%]"
                    />
                    <div>
                      <p className="text-small">{patient.name}</p>
                      <p className="text-xs text-black/[.5]">{patient.id}</p>
                    </div>
                  </div>
                  <div className="w-[19%] text-small overflow-hidden">
                    <div title={patient.address} className="w-[70%] truncate">
                      {patient.address}
                    </div>
                  </div>
                  <div className="w-[13%] text-small">{patient.gender}</div>
                  <div className="w-[13%]">
                    <div
                      className={`w-fit text-xs px-[10px] py-[6px] rounded-full ${
                        patient.ages >= 45
                          ? "text-blue bg-light-blue"
                          : patient.ages >= 16
                          ? "text-green bg-light-green"
                          : "text-yellow bg-light-yellow"
                      }`}
                    >
                      {patient.ages >= 45
                        ? "Elderly"
                        : patient.ages >= 16
                        ? "Adults"
                        : "Children"}
                    </div>
                  </div>
                  <div className="w-[15%] text-small">{patient.treatment}</div>
                  <div className="w-[15%]">
                    <div
                      className={`flex items-center gap-1 w-fit text-xs px-[10px] py-[6px] rounded-full ${
                        patient.payment === "Pending"
                          ? "text-red bg-red/[.12]"
                          : patient.payment === "Paid"
                          ? "text-green bg-light-green"
                          : "text-yellow bg-light-yellow"
                      }`}
                    >
                      <div
                        className={`size-[7px] max-w-[7px] max-h-[7px] rounded-[100%] ${
                          patient.payment === "Pending"
                            ? "bg-red"
                            : patient.payment === "Paid"
                            ? "bg-green"
                            : "bg-yellow"
                        }`}
                      ></div>{" "}
                      {patient.payment}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center size-[36px] bg-white rounded-[100%]">
                      <MdCall />
                    </button>
                    <button className="flex items-center justify-center size-[36px] bg-white rounded-[100%]">
                      <PiDotsThreeVertical />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
