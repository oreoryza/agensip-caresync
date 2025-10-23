import React, { useState } from "react";
import AddSchedule from "../sections/AddSchedule";

import { PiCalendarDots } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const Schedule = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isAdd, setIsAdd] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Doctor",
    "Operation",
    "Room",
    "Nurse",
    "Ambulance",
  ];

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

  return (
    <div className="container overflow-hidden">
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
        <div className="fixed right-[40px] mt-4 rounded-[20px] shadow-md z-2">
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
      )}
      <div className="flex flex-col bg-white/[.4] mt-[40px] rounded-[20px] overflow-hidden">
        <div className="flex justify-between items-center my-[50px] mx-[40px]">
          <div className="flex gap-2 max-xl:hidden">
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
          <select className="text-xs xl:hidden">
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
              className="size-[42px] flex items-center justify-center bg-green rounded-[100%]"
            >
              <FaPlus className="text-white" />
            </button>
          </div>
        </div>
        <div className="flex w-full px-[24px] overflow-scroll hide-scroll">
          <div className="group flex justify-center p-[24px] h-screen min-w-[282px] rounded-t-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              09.00 AM
            </div>
          </div>
          <div className="group flex justify-center p-[24px] h-screen min-w-[282px] rounded-t-[20px] bg-white">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              10.00 AM
            </div>
          </div>
          <div className="group flex justify-center p-[24px] h-screen min-w-[282px] rounded-t-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              11.00 AM
            </div>
          </div>
          <div className="group flex justify-center p-[24px] h-screen min-w-[282px] rounded-t-[20px] bg-white">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              12.00 PM
            </div>
          </div>
          <div className="relative group flex justify-center p-[24px] h-screen min-w-[282px] rounded-t-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              01.00 PM
            </div>
            <div className="flex flex-col gap-[24px] absolute left-0 top-[100px] min-w-[500px]">
              <button className="flex items-center gap-[12px] p-[5px] bg-light-yellow rounded-full overflow-hidden">
                <div className="min-w-[70px] min-h-[70px] bg-yellow rounded-[100%]"></div>
                <div className="flex flex-col items-start text-left gap-[10px]">
                  <p>Patient transfer to another hospital</p>
                  <p className="text-xs text-black/[.6]">
                    12:00 AM - 01:10 PM | Driver : Jonathan
                  </p>
                </div>
              </button>
              <button className="ml-[100px] flex items-center gap-[12px] p-[5px] bg-light-green rounded-full overflow-hidden">
                <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                <div className="flex flex-col items-start text-left gap-[10px]">
                  <p>Family Medicine Checkups</p>
                  <p className="text-xs text-black/[.6]">
                    01:30 PM - 02:45 PM | Driver : Jonathan
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="group flex justify-center p-[24px] h-screen min-w-[282px] rounded-t-[20px] bg-white">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              02.00 PM
            </div>
          </div>
          <div className="group flex justify-center p-[24px] h-screen min-w-[282px] rounded-t-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              03.00 PM
            </div>
          </div>
          <div className="group flex justify-center p-[24px] h-screen min-w-[282px] rounded-t-[20px] bg-white">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              04.00 PM
            </div>
          </div>
          <div className="group flex justify-center p-[24px] h-screen min-w-[282px] rounded-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              05.00 AM
            </div>
          </div>
          <div className="group flex justify-center p-[24px] h-screen min-w-[282px] rounded-t-[20px] bg-white">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              06.00 AM
            </div>
          </div>
          <div className="group flex justify-center p-[24px] h-screen min-w-[282px] rounded-t-[20px] ">
            <div className="h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
              07.00 AM
            </div>
          </div>
        </div>
      </div>
      <AddSchedule isOpen={isAdd} onClose={() => setIsAdd(false)} />
    </div>
  );
};

export default Schedule;
