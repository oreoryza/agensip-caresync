import React from "react";
import { NavLink } from "react-router-dom";

import { RiHome5Line, RiHome5Fill } from "react-icons/ri";
import { RiCalendar2Line, RiCalendar2Fill } from "react-icons/ri";
import { PiHeartbeatBold, PiHeartbeatFill } from "react-icons/pi";
import { RiCalendarCheckLine, RiCalendarCheckFill } from "react-icons/ri";
import { FiUser, FiUserCheck } from "react-icons/fi";
import { BiHelpCircle, BiSolidHelpCircle } from "react-icons/bi";

const NavbarMobile = () => {
  return (
    <div className="max-xl:fixed max-xl:left-0 max-xl:right-0 bottom-0 px-[20px] pb-[20px] z-3 xl:hidden">
      <ul className="flex justify-around bg-white/[.2] p-[4px] backdrop-blur-xl rounded-full w-full shadow overflow-x-scroll hide-scroll">
        <li className="flex h-full w-full justify-center">
          <NavLink
            to={"/"}
            className={`px-[16px] py-[12px] flex items-center gap-[13px] justify-center rounded-full`}
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <>
                    <RiHome5Fill className="min-w-[20px] min-h-[20px]" />
                    <span className="truncate">Home</span>
                  </>
                ) : (
                  <RiHome5Line className="min-w-[20px] min-h-[20px]" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="flex h-full w-full justify-center">
          <NavLink
            to={"/schedule"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px]  justify-center rounded-full"
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <>
                    <RiCalendar2Fill className="min-w-[20px] min-h-[20px]" />
                    <span className="truncate">Schedule</span>
                  </>
                ) : (
                  <RiCalendar2Line className="min-w-[20px] min-h-[20px]" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="flex h-full w-full justify-center">
          <NavLink
            to={"/patients"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px]  justify-center rounded-full"
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <>
                    <PiHeartbeatFill className="min-w-[20px] min-h-[20px]" />
                    <span className="truncate">Patients</span>
                  </>
                ) : (
                  <PiHeartbeatBold className="min-w-[20px] min-h-[20px]" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="flex h-full w-full justify-center">
          <NavLink
            to={"/appointment"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px]  justify-center rounded-full"
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <>
                    <RiCalendarCheckFill className="min-w-[20px] min-h-[20px]" />
                    <span className="truncate">Appointment</span>
                  </>
                ) : (
                  <RiCalendarCheckLine className="min-w-[20px] min-h-[20px]" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="flex h-full w-full justify-center">
          <NavLink
            to={"/employee"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px]  justify-center rounded-full"
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <>
                    <FiUserCheck className="min-w-[20px] min-h-[20px]" />
                    <span className="truncate">Employee</span>
                  </>
                ) : (
                  <FiUser className="min-w-[20px] min-h-[20px]" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="flex h-full w-full justify-center">
          <NavLink
            to={"/help-center"}
            className=" px-[16px] py-[12px] flex items-center gap-[13px]  justify-center rounded-full"
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <>
                    <BiSolidHelpCircle className="min-w-[20px] min-h-[20px]" />
                    <span className="truncate">Help Center</span>
                  </>
                ) : (
                  <BiHelpCircle className="min-w-[20px] min-h-[20px]" />
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
