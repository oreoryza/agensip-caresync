import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { RiHome5Line, RiHome5Fill } from "react-icons/ri";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { RiCalendar2Line, RiCalendar2Fill } from "react-icons/ri";
import { PiHeartbeatBold, PiHeartbeatFill } from "react-icons/pi";
import { RiCalendarCheckLine, RiCalendarCheckFill } from "react-icons/ri";
import { FiUser, FiUserCheck } from "react-icons/fi";
import { BiHelpCircle, BiSolidHelpCircle } from "react-icons/bi";

const Navbar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div
      className={`sticky top-[98px] pl-[30px] pr-[40px] max-w-full max-xl:hidden ${
        isCollapse ? "w-[121px]" : "min-w-[240px]"
      }`}
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
            className={`px-[16px] py-[12px] flex items-center gap-[13px] w-full  rounded-full hover:bg-black/[.1] duration-300`}
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <RiHome5Fill className="min-w-[20px] min-h-[20px]" />
                ) : (
                  <RiHome5Line className="min-w-[20px] min-h-[20px]" />
                )}
                <span className="truncate">Home</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="flex h-full w-full">
          <NavLink
            to={"/schedule"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full  rounded-full hover:bg-black/[.1] duration-300"
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <RiCalendar2Fill className="min-w-[20px] min-h-[20px]" />
                ) : (
                  <RiCalendar2Line className="min-w-[20px] min-h-[20px]" />
                )}
                <span className="truncate">Schedule</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="flex h-full w-full">
          <NavLink
            to={"/patients"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full  rounded-full hover:bg-black/[.1] duration-300"
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <PiHeartbeatFill className="min-w-[20px] min-h-[20px]" />
                ) : (
                  <PiHeartbeatBold className="min-w-[20px] min-h-[20px]" />
                )}
                <span className="truncate">Patients</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="flex h-full w-full">
          <NavLink
            to={"/appointment"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full  rounded-full hover:bg-black/[.1] duration-300"
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <RiCalendarCheckFill className="min-w-[20px] min-h-[20px]" />
                ) : (
                  <RiCalendarCheckLine className="min-w-[20px] min-h-[20px]" />
                )}
                <span className="truncate">Appointment</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="flex h-full w-full">
          <NavLink
            to={"/employee"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full  rounded-full hover:bg-black/[.1] duration-300"
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <FiUserCheck className="min-w-[20px] min-h-[20px]" />
                ) : (
                  <FiUser className="min-w-[20px] min-h-[20px]" />
                )}
                <span className="truncate">Employee</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="flex h-full w-full xl:hidden">
          <NavLink
            to={"/help-center"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full  rounded-full hover:bg-black/[.1] duration-300"
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <BiSolidHelpCircle className="min-w-[20px] min-h-[20px]" />
                ) : (
                  <BiHelpCircle className="min-w-[20px] min-h-[20px]" />
                )}
                <span className="truncate">Help Center</span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <div className="flex w-full mt-[45px] max-xl:hidden">
        <NavLink
          to={"/help-center"}
          className=" px-[16px] py-[12px] flex items-center gap-[13px] w-full rounded-full hover:bg-black/[.1] duration-300"
        >
          {({ isActive }) => (
            <>
              {isActive ? (
                <BiSolidHelpCircle className="min-w-[20px] min-h-[20px]" />
              ) : (
                <BiHelpCircle className="min-w-[20px] min-h-[20px]" />
              )}
              <span className="truncate">Help Center</span>
            </>
          )}
        </NavLink>
      </div>
      <div
        className={`fixed bottom-[34px] left-[46px] ${
          isCollapse ? "w-[27px]" : "w-[240px]"
        } flex text-small truncate`}
      >
        <p>v1.0</p>
        <p>, Copyright <a href="https://start.agensip.com/" className="hover:underline" target="_blank">Agensip</a></p>
      </div>
    </div>
  );
};

export default Navbar;
