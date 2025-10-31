import React, { useState, useEffect, useRef } from "react";
import AddSchedule from "../sections/AddSchedule";

import { PiCalendarDots } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { PiX } from "react-icons/pi";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const Schedule = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isAdd, setIsAdd] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const categories = [
    "All",
    "Doctor",
    "Operation",
    "Room",
    "Nurse",
    "Ambulance",
  ];

  const shouldShow = (id) => {
    if (selectedCategory === "All") return true;
    return selectedCategory.toLowerCase() === id;
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const handleScheduleClick = (schedule) => {
    setSelectedSchedule(schedule);
    setIsModalOpen(true);
  };

  return (
    <div className="container overflow-hidden slideIn">
      <div className="flex justify-between items-center">
        <h2 className="font-bold">Schedule</h2>
        <div className="flex items-center gap-[20px] py-[8px] pl-[24px] pr-[8px] outline-1 outline-black/[.1] rounded-full">
          <p>{formattedDate}</p>
          <button
            onClick={toggleCalendar}
            className="flex justify-center items-center bg-white size-[36px] rounded-[100%]"
          >
            <PiCalendarDots />
          </button>
        </div>
      </div>
      {showCalendar && (
        <div className="fixed xl:right-[40px] right-0 max-xl:bottom-0 max-xl:left-0 max-xl:w-screen max-xl:h-screen max-xl:flex items-end justify-center max-xl:bg-black/[.4] mt-4 shadow-md z-4">
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
      )}
      <div className="flex flex-col bg-white/[.4] mt-[40px] rounded-[20px] overflow-hidden">
        <div className="flex justify-between items-center xl:my-[50px] xl:mx-[40px] max-xl:p-[14px] max-xl:mb-[10px]">
          <div className="flex gap-2 max-xl:hidden">
            {categories.map((category) => (
              <button
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-[4px] text-small outline-1 outline-black/[.1] px-[20px] py-[10px] rounded-full ${
                  selectedCategory === category
                    ? "bg-white outline-o text-black font-medium"
                    : "text-black/[.5]"
                }`}
              >
                <div
                  className={`size-[8px] ${
                    category === "Doctor"
                      ? "bg-green"
                      : category === "Operation"
                      ? "bg-yellow"
                      : category === "Room"
                      ? "bg-blue"
                      : category === "Nurse"
                      ? "bg-purple-500"
                      : category === "Ambulance"
                      ? "bg-red"
                      : "hidden"
                  } rounded-[100%]`}
                ></div>
                <p>{category}</p>
              </button>
            ))}
          </div>
          <select className="text-small xl:hidden">
            <button>
              <selectedcontent></selectedcontent>
              <span className="picker">
                <BsChevronDown />
              </span>
            </button>
            {categories.map((category) => (
              <option
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full text-sm`}
              >
                {category}
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
              onClick={() => setIsAdd(true)}
              className="group size-[42px] flex items-center justify-center bg-green rounded-[100%]"
            >
              <FaPlus className="text-white group-hover:rotate-90 duration-300" />
            </button>
          </div>
        </div>
        <div className="flex w-full px-[24px] overflow-scroll hide-scroll">
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-t-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              09.00 AM
            </div>
          </div>
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-t-[20px] bg-white">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              10.00 AM
            </div>
            <div className="relative flex flex-col gap-[24px] w-full">
              <div className="absolute flex flex-col gap-[24px] min-w-[500px] pointer-events-none">
                {shouldShow("doctor") && (
                  <button
                    onClick={() =>
                      handleScheduleClick({
                        title: "Family Medicine Checkups",
                        time: "01:30 PM - 02:45 PM",
                        person: "Dr. John Smith",
                        date: formattedDate,
                        note: "Regular checkup for family medicine",
                      })
                    }
                    className="doctor flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit pointer-events-auto hover:z-3 hover:scale-[1.05] duration-300"
                  >
                    <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p>Family Medicine Checkups</p>
                      <p className="text-xs text-black/[.6]">
                        01:30 PM - 02:45 PM | Dr. John Smith
                      </p>
                    </div>
                  </button>
                )}
                {shouldShow("operation") && (
                  <button
                    onClick={() =>
                      handleScheduleClick({
                        title: "Patient transfer to another hospital",
                        time: "01:30 PM - 02:45 PM",
                        person: "Driver : Jonathan",
                        date: formattedDate,
                        note: "Transfer patient to another hospital",
                      })
                    }
                    className="operation flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-yellow rounded-full overflow-hidden w-fit pointer-events-auto hover:z-3 hover:scale-[1.05] duration-300"
                  >
                    <div className="min-w-[70px] min-h-[70px] bg-yellow rounded-[100%]"></div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p>Patient transfer to another hospital</p>
                      <p className="text-xs text-black/[.6]">
                        01:30 PM - 02:45 PM | Driver : Jonathan
                      </p>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-t-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              11.00 AM
            </div>
            <div className="relative flex flex-col gap-[24px] w-full">
              <div className="absolute flex flex-col gap-[24px] min-w-[500px] pointer-events-none">
                <button className="flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit hover:z-3 hover:scale-[1.05] duration-300 opacity-0">
                  <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                  <div className="flex flex-col items-start text-left gap-[10px]">
                    <p>Family Medicine Checkups</p>
                    <p className="text-xs text-black/[.6]">
                      01:30 PM - 02:45 PM | Driver : Jonathan
                    </p>
                  </div>
                </button>
                <button className="flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit hover:z-3 hover:scale-[1.05] duration-300 opacity-0">
                  <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                  <div className="flex flex-col items-start text-left gap-[10px]">
                    <p>Family Medicine Checkups</p>
                    <p className="text-xs text-black/[.6]">
                      01:30 PM - 02:45 PM | Driver : Jonathan
                    </p>
                  </div>
                </button>
                {shouldShow("room") && (
                  <button
                    onClick={() =>
                      handleScheduleClick({
                        title: "General Meeting Room 101",
                        time: "01:30 PM - 02:45 PM",
                        person: "All Doctor",
                        date: formattedDate,
                        note: "Meeting for all doctors",
                      })
                    }
                    className="room flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-blue rounded-full overflow-hidden w-fit pointer-events-auto hover:z-3 hover:scale-[1.05] duration-300"
                  >
                    <div className="min-w-[70px] min-h-[70px] bg-blue rounded-[100%]"></div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p>General Meeting Room 101</p>
                      <p className="text-xs text-black/[.6]">
                        01:30 PM - 02:45 PM | All Doctor
                      </p>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-t-[20px] bg-white">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              12.00 PM
            </div>
            <div className="relative flex flex-col gap-[24px] w-full pointer-events-none">
              <div className="absolute flex flex-col gap-[24px] min-w-[500px]">
                {shouldShow("operation") && (
                  <button
                    onClick={() =>
                      handleScheduleClick({
                        title: "Patient transfer to another hospital",
                        time: "12:00 AM - 01:10 PM",
                        person: "Driver : Jonathan",
                        date: formattedDate,
                        note: "Transfer patient to another hospital",
                      })
                    }
                    className="operation flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-yellow rounded-full overflow-hidden w-fit pointer-events-auto hover:z-3 hover:scale-[1.05] duration-300"
                  >
                    <div className="min-w-[70px] min-h-[70px] bg-yellow rounded-[100%]"></div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p>Patient transfer to another hospital</p>
                      <p className="text-xs text-black/[.6]">
                        12:00 AM - 01:10 PM | Driver : Jonathan
                      </p>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-t-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              01.00 PM
            </div>
            <div className="relative flex flex-col gap-[24px] w-full pointer-events-none">
              <div className="absolute flex flex-col gap-[24px] min-w-[500px]">
                <button className="flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit hover:z-3 hover:scale-[1.05] duration-300 opacity-0">
                  <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                  <div className="flex flex-col items-start text-left gap-[10px]">
                    <p>Family Medicine Checkups</p>
                    <p className="text-xs text-black/[.6]">
                      01:30 PM - 02:45 PM | Driver : Jonathan
                    </p>
                  </div>
                </button>
                {shouldShow("doctor") && (
                  <button
                    onClick={() =>
                      handleScheduleClick({
                        title: "Family Medicine Checkups",
                        time: "01:30 PM - 02:45 PM",
                        person: "Dr. John Smith",
                        date: formattedDate,
                        note: "Regular checkup for family medicine",
                      })
                    }
                    className="doctor flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit pointer-events-auto hover:z-3 hover:scale-[1.05] duration-300"
                  >
                    <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p>Family Medicine Checkups</p>
                      <p className="text-xs text-black/[.6]">
                        01:30 PM - 02:45 PM | Dr. John Smith
                      </p>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-t-[20px] bg-white">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              02.00 PM
            </div>
            <div className="relative flex flex-col gap-[24px] w-full">
              <div className="absolute flex flex-col gap-[24px] min-w-[500px] pointer-events-none">
                <button className="flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit hover:z-3 hover:scale-[1.05] duration-300 opacity-0">
                  <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                  <div className="flex flex-col items-start text-left gap-[10px]">
                    <p>Family Medicine Checkups</p>
                    <p className="text-xs text-black/[.6]">
                      01:30 PM - 02:45 PM | Driver : Jonathan
                    </p>
                  </div>
                </button>
                <button className="flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit hover:z-3 hover:scale-[1.05] duration-300 opacity-0">
                  <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                  <div className="flex flex-col items-start text-left gap-[10px]">
                    <p>Family Medicine Checkups</p>
                    <p className="text-xs text-black/[.6]">
                      01:30 PM - 02:45 PM | Driver : Jonathan
                    </p>
                  </div>
                </button>
                <button className="flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit hover:z-3 hover:scale-[1.05] duration-300 opacity-0">
                  <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                  <div className="flex flex-col items-start text-left gap-[10px]">
                    <p>Family Medicine Checkups</p>
                    <p className="text-xs text-black/[.6]">
                      01:30 PM - 02:45 PM | Driver : Jonathan
                    </p>
                  </div>
                </button>
                {shouldShow("nurse") && (
                  <button
                    onClick={() =>
                      handleScheduleClick({
                        title: "Brain Tumor Removal",
                        time: "01:30 PM - 02:45 PM",
                        person: "Dr. Robert Taylor",
                        date: formattedDate,
                        note: "Surgical procedure for brain tumor removal",
                      })
                    }
                    className="nurse flex items-center gap-[12px] p-[5px] pr-[20px] bg-purple-200 rounded-full overflow-hidden w-fit pointer-events-auto hover:z-3 hover:scale-[1.05] duration-300"
                  >
                    <div className="min-w-[70px] min-h-[70px] bg-purple-500 rounded-[100%]"></div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p>Brain Tumor Removal</p>
                      <p className="text-xs text-black/[.6]">
                        01:30 PM - 02:45 PM | Dr. Robert Taylor
                      </p>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-t-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              03.00 PM
            </div>
            <div className="relative flex flex-col gap-[24px] w-full">
              <div className="absolute flex flex-col gap-[24px] min-w-[500px] pointer-events-none">
                <button className="flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit hover:z-3 hover:scale-[1.05] duration-300 opacity-0">
                  <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                  <div className="flex flex-col items-start text-left gap-[10px]">
                    <p>Family Medicine Checkups</p>
                    <p className="text-xs text-black/[.6]">
                      01:30 PM - 02:45 PM | Driver : Jonathan
                    </p>
                  </div>
                </button>
                <button className="flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit hover:z-3 hover:scale-[1.05] duration-300 opacity-0">
                  <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                  <div className="flex flex-col items-start text-left gap-[10px]">
                    <p>Family Medicine Checkups</p>
                    <p className="text-xs text-black/[.6]">
                      01:30 PM - 02:45 PM | Driver : Jonathan
                    </p>
                  </div>
                </button>
                {shouldShow("room") && (
                  <button
                    onClick={() =>
                      handleScheduleClick({
                        title: "General Meeting Room 101",
                        time: "03:00 PM - 04:00 PM",
                        person: "All Doctor",
                        date: formattedDate,
                        note: "Meeting for all doctors",
                      })
                    }
                    className="room flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-blue rounded-full overflow-hidden w-fit pointer-events-auto hover:z-3 hover:scale-[1.05] duration-300"
                  >
                    <div className="min-w-[70px] min-h-[70px] bg-blue rounded-[100%]"></div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p>General Meeting Room 101</p>
                      <p className="text-xs text-black/[.6]">
                        03:00 PM - 04:00 PM | All Doctor
                      </p>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-t-[20px] bg-white">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              04.00 PM
            </div>
          </div>
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              05.00 AM
            </div>
          </div>
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-t-[20px] bg-white">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              06.00 AM
            </div>
          </div>
          <div className="group flex flex-col items-center gap-[24px] py-[24px] h-screen min-w-[282px] rounded-t-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              07.00 AM
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isModalOpen && selectedSchedule ? "fadeIn" : "hidden"
        } fixed inset-0 bg-black/[.5] flex xl:items-center items-end justify-center z-50`}
      >
        <div className="bg-white xl:rounded-[20px] rounded-t-[20px] p-[24px] xl:max-w-[393px] w-full">
          <div className="flex justify-between items-start mb-[16px]">
            <p className="font-bold text-title">{selectedSchedule?.title}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-black/[.5]"
            >
              <PiX size={20} />
            </button>
          </div>
          <div className="space-y-[12px] py-[24px]">
            <div className="flex">
              <p className="font-medium text-sm text-black/[.6] w-[100px]">
                Date
              </p>
              <p className="text-small">{selectedSchedule?.date}</p>
            </div>
            <div className="flex">
              <p className="font-medium text-sm text-black/[.6] w-[100px]">
                Time
              </p>
              <p className="text-small">{selectedSchedule?.time}</p>
            </div>
            <div className="flex">
              <p className="font-medium text-sm text-black/[.6] w-[100px]">
                Task
              </p>
              <p className="text-small">{selectedSchedule?.person}</p>
            </div>
            <div className="flex">
              <p className="font-medium text-sm text-black/[.6] w-[100px]">
                Assignee
              </p>
              <p className="text-small">{selectedSchedule?.person}</p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-black/[.1] mb-[20px]"></div>
          <div className="flex">
            <p className="text-small text-black/[.5]">
              {selectedSchedule?.note}
            </p>
          </div>
        </div>
      </div>
      <AddSchedule isOpen={isAdd} onClose={() => setIsAdd(false)} />
    </div>
  );
};

export default Schedule;
