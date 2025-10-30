import React, { useState } from "react";
import TotalPatients from "../components/charts/TotalPatients";
import AppointmentsChart from "../components/charts/AppointmentsChart";
import AddAppointments from "../sections/AddAppointments";
import Room from "../components/charts/Room";
import { useSelector, useDispatch } from "react-redux";
import { updateAppointmentStatus } from "../redux/slices/dataSlice";

import { PiHash } from "react-icons/pi";
import { PiPhone } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { PiX } from "react-icons/pi";
import { PiCheck } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";

const Appointment = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique status
  const status = [
    "All",
    ...new Set(data.patients.appointments.map((emp) => emp.status)),
  ];

  // Filter appointment based on selected status
  const filteredStatus =
    selectedStatus === "All"
      ? data.patients.appointments
      : data.patients.appointments.filter(
          (emp) => emp.status === selectedStatus
        );

  return (
    <div className="container">
      <h2 className="font-bold">Appointments</h2>
      <div className="overflow-x-auto">
        <div className="flex xl:grid grid-cols-3 gap-[16px] mt-[25px]">
          <div className="bg-white/[.4] min-w-[172px] w-full p-[20px] rounded-[20px]">
            <TotalPatients />
          </div>
          <div className="bg-white/[.4] min-w-[172px] w-full p-[20px] rounded-[20px]">
            <AppointmentsChart />
          </div>
          <div className="bg-white/[.4] min-w-[172px] w-full p-[20px] rounded-[20px]">
            <Room />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[24px] ml-0.5">
        <div className="flex gap-2 max-xl:hidden">
          {status.map((stat) => (
            <button
              key={stat}
              onClick={() => setSelectedStatus(stat)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedStatus === stat
                  ? "bg-white text-black"
                  : "outline-1 outline-black/[.6] text-black/[.6]"
              }`}
            >
              {stat}
            </button>
          ))}
        </div>
        <select className="text-xs xl:hidden">
          <button>
            <selectedcontent></selectedcontent>
            <span className="picker">
              <BsChevronDown />
            </span>
          </button>
          {status.map((stat) => (
            <option
              key={stat}
              onClick={() => setSelectedStatus(stat)}
              className={`rounded-full text-sm`}
            >
              {stat}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <div className="flex items-center gap-[10px] bg-white py-[10px] xl:pl-[12px] xl:pr-[16px] max-xl:px-[10px] rounded-full overflow-hidden">
            <RiSearchLine className="size-[23px] text-black/[.5]" />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-0 max-xl:hidden"
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group size-[42px] flex items-center justify-center bg-green rounded-[100%]"
          >
            <FaPlus className="text-white group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
      {data.patients.appointments.length > 0 ? (
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-[10px] mt-[20px]">
          {filteredStatus.map((appointment, index) => (
            <div key={index + 1} className="bg-white/[.4] rounded-[20px]">
              <div className="xl:p-[20px] p-[16px]">
                <div className="flex max-xl:flex-wrap-reverse max-xl:gap-2 justify-between items-center">
                  <div className="flex gap-[10px] items-center">
                    <div className="flex justify-center items-center size-[32px] bg-white rounded-[100%]">
                      <PiHash className="opacity-[60%]" />
                    </div>
                    <div>
                      <p className="text-small font-medium">{appointment.id}</p>
                      <p className="text-xs opacity-50">
                        With doctor {appointment.doctor}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end max-[375px]:w-full">
                    <div
                      className={`px-[10px] py-[6px] text-small rounded-full max-xl:justify-items-end ${
                        appointment.status === "In Queue"
                          ? "bg-red/[.1] text-red"
                          : appointment.status === "Accepted"
                          ? "bg-green/[.1] text-green"
                          : appointment.status === "Urgent"
                          ? "bg-red text-white"
                          : appointment.status === "Archive"
                          ? "bg-grey text-black"
                          : appointment.status === "Declined"
                          ? "bg-red/[.1] text-red"
                          : ""
                      }`}
                    >
                      {appointment.status}
                    </div>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-black/[.06] mt-[12px]"></div>
                <div className="flex justify-between my-[16px]">
                  <div className="flex items-center gap-[10px]">
                    <img
                      src={appointment.img}
                      alt={appointment.name}
                      className="size-[38px] object-cover rounded-[100%]"
                    />
                    <div>
                      <p className="text-xs opacity-50">Patient name</p>
                      <p className="text-small font-medium">
                        {appointment.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className="flex justify-center items-center size-[38px] bg-white rounded-[100%]">
                      <PiPhone />
                    </div>
                    <div>
                      <p className="text-xs opacity-50">Phone number</p>
                      <p className="text-small font-medium">
                        {appointment.phone}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="flex justify-center items-center size-[38px] bg-white rounded-[100%]">
                    <PiCalendarDots />
                  </div>
                  <div>
                    <p className="text-xs opacity-50">Date and time</p>
                    <div className="flex max-xl:flex-wrap items-center gap-2">
                      <p className="text-small font-medium">
                        {appointment.date}
                      </p>
                      <div className="bg-green/[.1] text-green text-xs px-[6px] py-[4px] rounded-full">
                        {appointment.start} to {appointment.end}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-black/[.06] mt-[8px]"></div>
              {appointment.status == "Accepted" ? (
                <div className="flex gap-[10px] px-[20px] mb-[20px] mt-[16px]">
                  <div className="flex items-center gap-[10px] w-full text-green bg-green/[.1] px-[10px] py-[8px] rounded-[8px]">
                    <PiCheck /> Request has been archived
                  </div>
                </div>
              ) : appointment.status == "Archive" ? (
                <div className="flex gap-[10px] px-[20px] mb-[20px] mt-[16px]">
                  <div className="flex items-center gap-[10px] w-full text-black/[.8] bg-grey px-[10px] py-[8px] rounded-[8px]">
                    <PiCheck /> Request has been archived
                  </div>
                </div>
              ) : appointment.status == "Declined" ? (
                <div className="flex gap-[10px] px-[20px] mb-[20px] mt-[16px]">
                  <div className="flex items-center gap-[10px] w-full text-red bg-red/[.1] px-[10px] py-[8px] rounded-[8px]">
                    <PiX /> Request has been declined
                  </div>
                </div>
              ) : (
                <div className="flex gap-[10px] px-[20px] mb-[20px] mt-[16px]">
                  <button
                    onClick={() => dispatch(updateAppointmentStatus({ id: appointment.id, status: "Declined" }))}
                    className="flex justify-center items-center gap-[10px] w-full outline-1 outline-red text-red px-[10px] py-[8px] rounded-full text-center hover:opacity-80 duration-300"
                  >
                    <PiX /> Decline
                  </button>
                  <button
                    onClick={() => dispatch(updateAppointmentStatus({ id: appointment.id, status: "Accepted" }))}
                    className="flex justify-center items-center gap-[10px] w-full bg-green text-white px-[10px] py-[8px] rounded-full text-center hover:opacity-80 duration-300"
                  >
                    <PiCheck /> Accept
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-[10px] justify-center items-center w-full h-[400px] py-[24px]">
          <div className="flex items-center justify-center size-[40px] rounded-[100%] bg-light-green text-green">
            <PiUsers className="size-[20px]" />
          </div>
          <p className="font-bold">No Appointments</p>
          <p className="text-small text-black/[.5]">
            You don't have any appointments yet
          </p>
          <button className="text-small font-medium text-green">
            +add new
          </button>
        </div>
      )}
      <AddAppointments
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Appointment;
