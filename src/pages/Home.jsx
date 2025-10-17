import React from "react";
import TotalPatients from "../components/charts/TotalPatients";
import AppointmentsChart from "../components/charts/AppointmentsChart";
import Room from "../components/charts/Room";
import TotalAmbulances from "../components/charts/TotalAmbulances";

import { BsChevronDown } from "react-icons/bs";

const Home = () => {
  return (
    <div className="container h-full">
      <div className="flex gap-[16px] h-full">
        <div className="bg-white/[.4] p-[20px] rounded-[20px]">
          <div className="flex justify-between items-center">
            <p className="text-subtitle font-bold">Appointments</p>
            <select>
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
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[16px]">
            <div className="flex flex-col gap-[16px] w-full">
              <div className="bg-white/[.4] p-[20px] rounded-[20px]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[16px]">
                    <div className="flex items-center justify-center min-w-[42px] min-h-[42px] bg-white rounded-[100%]">
                      P
                    </div>
                    <div>
                      <p className="font-bold">Patients</p>
                      <p className="text-xs text-black/[.6]">
                        insightful overview of patient recovery and ongoing care
                      </p>
                    </div>
                  </div>
                  <select>
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
              </div>
              <div className="bg-white/[.4] p-[20px] rounded-[20px] h-full">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[16px]">
                    <div className="flex items-center justify-center min-w-[42px] min-h-[42px] bg-white rounded-[100%]">
                      P
                    </div>
                    <div>
                      <p className="font-bold">Polyclinics</p>
                      <p className="text-xs text-black/[.6]">
                        Key statistics on the most frequently visited
                        polyclinics
                      </p>
                    </div>
                  </div>
                  <select>
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
                <p className="text-subtitle font-bold">Patients Gender</p>
                <select>
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
            </div>
            <div className="bg-white/[.4] p-[20px] rounded-[20px] w-full">
              <div className="flex justify-between items-center">
                <p className="text-subtitle font-bold">Doctor & Nurses</p>
                <select>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
