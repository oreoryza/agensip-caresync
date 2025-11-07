import React, { useState } from "react";
import { useSelector } from "react-redux";
import TotalPatients from "../components/charts/TotalPatients";
import AppointmentsChart from "../components/charts/AppointmentsChart";
import Room from "../components/charts/Room";
import TotalAmbulances from "../components/charts/TotalAmbulances";
import PatientsChart from "../components/charts/PatientsChart";
import PatientsGender from "../components/charts/PatientsGender";
import DoctorNurses from "../components/charts/DoctorNurses";

import { BsChevronDown } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { PiSyringeBold } from "react-icons/pi";
import { PiHeartbeatBold } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { LiaUserNurseSolid } from "react-icons/lia";
import { PiUsers } from "react-icons/pi";

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
    <main className="container h-full slideIn">
      <div className="flex max-xl:flex-col-reverse gap-[16px] h-full">
        {/* Appointment lists card */}
        <section className="flex flex-col gap-[24px] card xl:px-[20px] px-[14px] pt-[20px]">
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
                    : "outline-1 outline-black/[.1] text-black/[.5]"
                }`}
              >
                {gen}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-[10px] pb-[20px] h-full max-h-[980px] overflow-y-auto overflow-x-hidden hide-scroll">
            {data.patients.appointments.length > 0 ? (
              <>
                {filteredGender.map((app, index) => (
                  <div key={index} className="bg-white rounded-[16px]">
                    <div className="flex items-center gap-[4px] p-[14px] sm:hidden">
                      <div className="bg-black/[.06] text-xs text-black/[.5] px-[6px] py-[4px] rounded-full">
                        {app.gender}
                      </div>
                      <div className="bg-black/[.06] text-xs text-black/[.5] px-[6px] py-[4px] rounded-full">
                        {app.start}
                      </div>
                    </div>
                    <div className="flex items-end">
                      <img
                        src={app.img}
                        alt={app.name}
                        className="max-w-[136px] max-sm:max-w-[90px] max-h-[147px]  ml-[16px]"
                      />
                      <div className="flex flex-col gap-[20px] p-[16px] xl:min-w-[131px]">
                        <div className="flex max-xl:flex-wrap items-center gap-[4px] max-sm:hidden">
                          <div className="bg-black/[.06] text-xs text-black/[.5] px-[6px] py-[4px] rounded-full">
                            {app.gender}
                          </div>
                          <div className="bg-black/[.06] text-xs text-black/[.5] px-[6px] py-[4px] rounded-full">
                            {app.start}
                          </div>
                        </div>
                        <div>
                          <p className="font-medium max-sm:text-small">{app.name}</p>
                          <p className="text-xs text-black/[.5]">
                            {app.disease}
                          </p>
                        </div>
                        <div className="flex max-sm:hidden items-center gap-[4px]">
                          <a
                            href="https://www.whatsapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 items-center bg-green text-xs text-white px-[16px] py-[8px] rounded-full hover:opacity-80 duration-300"
                          >
                            <MdCall />
                            Call
                          </a>
                          <a
                            href="https://www.whatsapp.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="flex gap-2 items-center bg-white text-xs px-[16px] py-[8px] rounded-full outline-1 outline-[#DDDDDD] hover:opacity-80 duration-300"
                          >
                            <RiSendPlaneFill />
                            Chat
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-full gap-[4px] p-[14px] sm:hidden">
                      <a
                        href="https://www.whatsapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center justify-center bg-green text-xs text-white px-[16px] py-[8px] w-full rounded-full hover:opacity-80 duration-300"
                      >
                        <MdCall />
                        Call
                      </a>
                      <a
                        href="https://www.whatsapp.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex gap-2 items-center justify-center bg-white text-xs px-[16px] py-[8px] w-full rounded-full outline-1 outline-[#DDDDDD] hover:opacity-80 duration-300"
                      >
                        <RiSendPlaneFill />
                        Chat
                      </a>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex flex-col gap-[10px] justify-center items-center w-full h-full py-[24px]">
                <div className="flex items-center justify-center size-[40px] rounded-[100%] bg-light-green text-green">
                  <PiUsers className="size-[20px]" />
                </div>
                <p className="font-bold">No Appointments</p>
                <p className="text-small text-black/[.5] text-center">
                  You don't have any appointments yet
                </p>
              </div>
            )}
          </div>
        </section>
        <div className="flex xl:flex-col flex-col-reverse gap-[16px] w-full">
          <div className="flex max-xl:flex-col-reverse gap-[16px]">
            <div className="flex flex-col gap-[16px] w-full">
              {/* Patients card */}
              <section className="flex flex-col gap-[24px] card p-[20px]">
                <div className="flex max-[375px]:flex-wrap justify-between max-[375px]:justify-end items-center gap-2">
                  <div className="flex gap-[16px]">
                    <div className="flex items-center justify-center min-w-[42px] max-w-[42px] min-h-[42px] max-h-[42px] bg-white rounded-[100%]">
                      <PiHeartbeatBold className="size-[17px]" />
                    </div>
                    <div>
                      <p className="font-bold">Patients</p>
                      <p className="text-xs text-black/[.6]">
                        Insightful overview of patient recovery
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
                <div className="flex max-xl:flex-col gap-2">
                  {data.patients.treatments.length > 0 ? (
                    <>
                      <div className="flex xl:flex-col max-xl:flex-wrap justify-around gap-2">
                        <div className="max-xl:flex gap-[10px] text-sm font-medium">
                          <h2 className="font-bold">
                            {data.patients.treatments.slice(-1)[0].under}
                          </h2>
                          <div className="flex items-center gap-1">
                            <div className="size-[6px] rounded-full bg-grey"></div>
                            <p className="text-black/[.5]">Under Treatment</p>
                          </div>
                        </div>
                        <div className="max-xl:flex gap-[10px] text-sm font-medium">
                          <h2 className="font-bold">
                            {data.patients.treatments.slice(-1)[0].recovered}
                          </h2>
                          <div className="flex items-center gap-1">
                            <div className="size-[6px] rounded-full bg-green"></div>
                            <p className="text-black/[.5]">Recovered</p>
                          </div>
                        </div>
                      </div>
                      <div className="xl:max-w-[360px] max-xl:overflow-x-scroll">
                        <PatientsChart />
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col gap-[10px] justify-center items-center w-full h-full py-[24px]">
                      <div className="flex items-center justify-center size-[40px] rounded-[100%] bg-light-green text-green">
                        <PiUsers className="size-[20px]" />
                      </div>
                      <p className="font-bold">No Appointments</p>
                      <p className="text-small text-black/[.5]">
                        You don't have any appointments yet
                      </p>
                    </div>
                  )}
                </div>
              </section>
              {/* Polyclinics card */}
              <section className="flex flex-col gap-[20px] card xl:p-[20px] p-[14px] h-full">
                <div className="flex max-[375px]:flex-wrap justify-between max-[375px]:justify-end items-center gap-2">
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
                <div className="h-full">
                  {data.polyclinics.length > 0 ? (
                    <>
                      {data.polyclinics.map((poly, index) => (
                        <div key={index} className="py-[16px]">
                          <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                              <p className="text-small font-medium">
                                {poly.name}
                              </p>
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
                          <div className="relative mt-[13px] bg-linear-to-r from-green to-yellow h-[24px] rounded-full overflow-hidden leftIn">
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
                    </>
                  ) : (
                    <div className="flex flex-col gap-[10px] justify-center items-center w-full h-full py-[24px]">
                      <div className="flex items-center justify-center size-[40px] rounded-[100%] bg-light-green text-green">
                        <PiUsers className="size-[20px]" />
                      </div>
                      <p className="font-bold">No Polyclinics</p>
                      <p className="text-small text-black/[.5]">
                        You don't have any appointments yet
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </div>
            <div className="xl:flex flex-col gap-[16px] grid grid-cols-2 max-[375px]:grid-cols-1">
              {/* Total patients card */}
              <section className="card p-[20px] h-full">
                <TotalPatients />
              </section>
              {/* Appointments chart card */}
              <section className="card p-[20px] h-full">
                <AppointmentsChart />
              </section>
              {/* Room card */}
              <section className="card p-[20px] h-full">
                <Room />
              </section>
              {/* Total Ambulances card */}
              <section className="card p-[20px] h-full xl:min-w-[300px]">
                <TotalAmbulances />
              </section>
            </div>
          </div>
          <div className="flex max-xl:flex-col-reverse gap-[16px] w-full">
            {/* Patients gender card */}
            <section className="flex flex-col gap-[24px] card p-[20px] w-full">
              <div className="flex justify-between items-center gap-2">
                <div className="flex gap-[16px]">
                  <div className="flex items-center justify-center min-w-[42px] max-w-[42px] min-h-[42px] max-h-[42px] bg-white rounded-[100%]">
                    <FiUser className="size-[16px]" />
                  </div>
                  <div>
                    <p className="font-bold">Patients Gender</p>
                    <p className="text-xs text-black/[.6]">
                      Insights into male and female representation
                    </p>
                  </div>
                </div>
                <button className="flex justify-center items-center bg-white size-[24px] rounded-[100%]">
                  <FiArrowUpRight />
                </button>
              </div>
              {data.patients.genders.male + data.patients.genders.female > 0 ? (
                <PatientsGender />
              ) : (
                <div className="flex flex-col gap-[10px] justify-center items-center w-full h-full py-[24px]">
                  <div className="flex items-center justify-center size-[40px] rounded-[100%] bg-light-green text-green">
                    <PiUsers className="size-[20px]" />
                  </div>
                  <p className="font-bold">No Data</p>
                  <p className="text-small text-black/[.5] text-center">
                    You don't have any data yet
                  </p>
                </div>
              )}
            </section>
            {/* doctor & nurses card */}
            <section className="flex flex-col justify-between gap-[24px] xl:bg-white/[.4] xl:backdrop-blur p-[20px] rounded-[20px] w-full h-full">
              <div className="flex max-[375px]:flex-wrap justify-between max-[375px]:justify-end items-center gap-2">
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
              {data.doctors.total + data.nurses.total > 0 ? (
                <DoctorNurses />
              ) : (
                <div className="flex flex-col gap-[10px] justify-center items-center w-full h-full py-[24px]">
                  <div className="flex items-center justify-center size-[40px] rounded-[100%] bg-light-green text-green">
                    <PiUsers className="size-[20px]" />
                  </div>
                  <p className="font-bold">No Data</p>
                  <p className="text-small text-black/[.5] text-center">
                    You don't have any data yet
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
