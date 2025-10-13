import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { RiHome5Line } from "react-icons/ri";
import { BiChevronsLeft } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import { RiCalendar2Line } from "react-icons/ri";
import { PiHeartbeatBold } from "react-icons/pi";
import { RiCalendarCheckLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";

const Navbar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div
      className={`sticky top-[98px] pl-[30px] pr-[40px] ${
        isCollapse ? "w-[120px]" : "w-[240px]"
      } duration-500`}
    >
      <div
        className={`flex ${
          isCollapse ? "justify-center" : "justify-end -mr-2"
        } mb-[20px]`}
      >
        <button
          onClick={toggleCollapse}
          className="p-[6px] border border-black/[.16] rounded-[100%] cursor-pointer"
        >
          {isCollapse ? (
            <BiChevronsRight className="min-w-[8px] min-h-[8px]" />
          ) : (
            <BiChevronsLeft className="min-w-[8px] min-h-[8px]" />
          )}
        </button>
      </div>
      <ul className="flex flex-col gap-[10px] w-full">
        <li className="flex h-full w-full">
          <NavLink
            to={"/"}
            className={`px-[16px] py-[12px] flex items-center gap-[13px] w-full rounded-full`}
          >
            <RiHome5Line className="min-w-[20px] min-h-[20px]" />
            <span className="truncate">Home</span>
          </NavLink>
        </li>
        <li className="flex h-full w-full">
          <NavLink
            to={"/schedule"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full rounded-full"
          >
            <RiCalendar2Line className="min-w-[20px] min-h-[20px]" />
            <span className="truncate">Schedule</span>
          </NavLink>
        </li>
        <li className="flex h-full w-full">
          <NavLink
            to={"/patients"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full rounded-full"
          >
            <PiHeartbeatBold className="min-w-[20px] min-h-[20px]" />
            <span className="truncate">Patients</span>
          </NavLink>
        </li>
        <li className="flex h-full w-full">
          <NavLink
            to={"/appointment"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full rounded-full"
          >
            <RiCalendarCheckLine className="min-w-[20px] min-h-[20px]" />
            <span className="truncate">Appointment</span>
          </NavLink>
        </li>
        <li className="flex h-full w-full">
          <NavLink
            to={"/employee"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full rounded-full"
          >
            <FiUser className="min-w-[20px] min-h-[20px]" />
            <span className="truncate">Employee</span>
          </NavLink>
        </li>
      </ul>
      <div className="flex w-full mt-[45px]">
        <NavLink
          to={"/help-center"}
          className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full rounded-full"
        >
          <BiHelpCircle className="min-w-[20px] min-h-[20px]" />
          <span className="truncate">Help Center</span>
        </NavLink>
      </div>
      <div
        className={`fixed bottom-[34px] left-[46px] ${
          isCollapse ? "w-[27px]" : "w-[240px]"
        } flex text-small truncate duration-500`}
      >
        <p>v1.0</p>
        <p>, Copyright Agensip</p>
      </div>
    </div>
  );
};

export default Navbar;
