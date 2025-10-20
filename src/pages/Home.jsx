import React, { useState } from "react";
import { useSelector } from "react-redux";
import TotalPatients from "../components/charts/TotalPatients";
import AppointmentsChart from "../components/charts/AppointmentsChart";
import Room from "../components/charts/Room";
import TotalAmbulances from "../components/charts/TotalAmbulances";
import PatientsChart from "../components/charts/PatientsChart";
import PatientsGender from "../components/charts/PatientsGender";

import { BsChevronDown } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { PiSyringeBold } from "react-icons/pi";
import { PiHeartbeatBold } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { LiaUserNurseSolid } from "react-icons/lia";

const Home = () => {
  const data = useSelector((state) => state.data);
  const [selectedGender, setSelectedGender] = useState("All");
  const i = 250; // Number of bars to display

  // Get gender
  const gender = [
    "All",
    ...new Set(data.patients.appointments.map((emp) => emp.gender)),
  ];

  // Filter patients by gender
  const filteredGender =
    selectedGender === "All"
      ? data.patients.appointments
      : data.patients.appointments.filter(
          (emp) => emp.gender === selectedGender
        );

  return (
    <div className="container h-full">
      <div className="flex gap-[16px] h-full">
        <div className="flex flex-col gap-[24px] bg-white/[.4] p-[20px] rounded-[20px]">
          <div className="flex justify-between items-center">
            <p className="text-subtitle font-bold">Appointments</p>
            <select className="text-xs">
              <button>
                <selectedcontent></selectedcontent>
                <span className="picker">
                  <BsChevronDown />
                </span>
              </button>
              <option value="">Weekly</option>
              <option value="">Monthly</option>
              <option value="">Today</option>
            </select>
          </div>
          <div className="flex gap-2">
            {gender.map((gen) => (
              <button
                key={gen}
                onClick={() => setSelectedGender(gen)}
                className={`px-4 py-2 rounded-full text-small w-full ${
                  selectedGender === gen
                    ? "bg-white text-black"
                    : "outline-1 outline-black/[.6] text-black/[.6]"
                }`}
              >
                {gen}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-[10px]">
            {filteredGender.map((app) => (
              <div className="flex items-end bg-white rounded-[16px] overflow-hidden">
                <img
                  src={app.img}
                  alt={app.name}
                  className="max-w-[136px] max-h-[147px] ml-[16px]"
                />
                <div className="flex flex-col gap-[20px] p-[16px] min-w-[131px]">
                  <div className="flex items-center gap-[4px] ">
                    <div className="bg-black/[.06] text-xs text-black/[.5] px-[6px] py-[4px] rounded-full">
                      {app.gender}
                    </div>
                    <div className="bg-black/[.06] text-xs text-black/[.5] px-[6px] py-[4px] rounded-full">
                      {app.start}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{app.name}</p>
                    <p className="text-xs text-black/[.5]">{app.disease}</p>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <a
                      href="https://www.whatsapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center bg-green text-xs text-white px-[16px] py-[8px] rounded-full"
                    >
                      <MdCall />
                      Call
                    </a>
                    <a
                      href="https://www.whatsapp.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex gap-2 items-center bg-white text-xs px-[16px] py-[8px] rounded-full outline-1 outline-[#DDDDDD]"
                    >
                      <RiSendPlaneFill />
                      Chat
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          <div className="flex gap-[16px]">
            <div className="flex flex-col gap-[16px] w-full">
              <div className="bg-white/[.4] p-[20px] rounded-[20px]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[16px]">
                    <div className="flex items-center justify-center min-w-[42px] max-w-[42px] min-h-[42px] max-h-[42px] bg-white rounded-[100%]">
                      <PiHeartbeatBold className="size-[17px]" />
                    </div>
                    <div>
                      <p className="font-bold">Patients</p>
                      <p className="text-xs text-black/[.6]">
                        insightful overview of patient recovery and ongoing care
                      </p>
                    </div>
                  </div>
                  <select className="text-xs">
                    <button>
                      <selectedcontent></selectedcontent>
                      <span className="picker">
                        <BsChevronDown />
                      </span>
                    </button>
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                    <option value="">Today</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="text-sm font-medium">
                      <h2 className="font-bold">
                        {data.patients.treatments.slice(-1)[0].under}
                      </h2>
                      <div className="flex items-center gap-1">
                        <div className="size-[6px] rounded-full bg-grey"></div>
                        <p className="text-black/[.5]">Under Treatment</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      <h2 className="font-bold">
                        {data.patients.treatments.slice(-1)[0].recovered}
                      </h2>
                      <div className="flex items-center gap-1">
                        <div className="size-[6px] rounded-full bg-green"></div>
                        <p className="text-black/[.5]">Recovered</p>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[360px]">
                    <PatientsChart />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] bg-white/[.4] p-[20px] rounded-[20px] h-full">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[16px]">
                    <div className="flex items-center justify-center min-w-[42px] max-w-[42px] min-h-[42px] max-h-[42px] bg-white rounded-[100%]">
                      <PiSyringeBold className="size-[16px]" />
                    </div>
                    <div>
                      <p className="font-bold">Polyclinics</p>
                      <p className="text-xs text-black/[.6]">
                        Key statistics on the most frequently visited
                        polyclinics
                      </p>
                    </div>
                  </div>
                  <select className="text-xs">
                    <button>
                      <selectedcontent></selectedcontent>
                      <span className="picker">
                        <BsChevronDown />
                      </span>
                    </button>
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                    <option value="">Today</option>
                  </select>
                </div>
                <div>
                  {data.polyclinics.map((poly, index) => (
                    <div key={index} className="py-[16px]">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <p className="text-small font-medium">{poly.name}</p>
                          <div
                            className={`p-[4px] rounded-full text-xs ${
                              poly.percentage === "increase"
                                ? "bg-green/[.1] text-green"
                                : "bg-red/[.1] text-red"
                            }`}
                          >
                            {poly.percentage === "increase" ? "+" : "-"}
                            {poly.value}
                          </div>
                        </div>
                        <p className="text-xs text-black/[.5]">
                          <span className="text-small text-black font-medium">
                            {poly.visitors}
                          </span>{" "}
                          Visitors
                        </p>
                      </div>
                      <div className="relative mt-[13px] bg-linear-to-r from-green to-yellow h-[24px] rounded-full overflow-hidden">
                        <div
                          className="absolute bottom-0 right-0 bg-grey h-full"
                          style={{
                            width: `${100 - (poly.visitors / 400) * 100}%`,
                          }}
                        ></div>
                        <div className="absolute bottom-0 left-0 flex gap-[1px] justify-between px-[1px] w-full h-full">
                          {Array.from({ length: i }, (_, index) => (
                            <div
                              key={index}
                              className="bg-[#F4F5ED] h-full min-w-[1px] max-w-[1px]"
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
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
              <div className="bg-white/[.4] p-[20px] rounded-[20px]">
                <Room />
              </div>
              <div className="bg-white/[.4] p-[20px] rounded-[20px]">
                <TotalAmbulances />
              </div>
            </div>
          </div>
          <div className="flex gap-[16px] w-full">
            <div className="bg-white/[.4] p-[20px] rounded-[20px] w-full">
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px]">
                  <div className="flex items-center justify-center min-w-[42px] max-w-[42px] min-h-[42px] max-h-[42px] bg-white rounded-[100%]">
                    <FiUser className="size-[16px]" />
                  </div>
                  <div>
                    <p className="font-bold">Patients Gender</p>
                    <p className="text-xs text-black/[.6]">
                      Offering insights into male and female representation
                    </p>
                  </div>
                </div>
                <button className="flex justify-center items-center bg-white size-[24px] rounded-[100%]">
                  <FiArrowUpRight />
                </button>
              </div>
              <PatientsGender />
            </div>
            <div className="bg-white/[.4] p-[20px] rounded-[20px] w-full">
              <div className="flex justify-between items-center">
                <div className="flex gap-[16px]">
                  <div className="flex items-center justify-center min-w-[42px] max-w-[42px] min-h-[42px] max-h-[42px] bg-white rounded-[100%]">
                    <LiaUserNurseSolid className="size-[20px]" />
                  </div>
                  <div>
                    <p className="font-bold">Doctor & Nurses</p>
                    <p className="text-xs text-black/[.6]">
                      Overview of the distribution between doctors and nurses
                    </p>
                  </div>
                </div>
                <button className="flex justify-center items-center bg-white size-[24px] rounded-[100%]">
                  <FiArrowUpRight />
                </button>
              </div>
              <div className="w-80 bg-red h-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
