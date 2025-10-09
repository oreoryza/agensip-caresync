import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleToken } from "../redux/slices/tokenSlice";

import logo from "../assets/logo.svg"

import { RiSearchLine } from "react-icons/ri";
import { RiSettings3Line } from "react-icons/ri";
import { RiNotification3Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FiUser } from 'react-icons/fi';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const Topbar = () => {
  const dispatch = useDispatch();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapsed = () => {
      setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="flex justify-between items-center w-full py-[24px] px-[40px] sticky top-0 z-2 backdrop-blur-lg">
      <img src={logo} alt="CareSync" className="max-h-[32px]" />
      <div className="flex items-center gap-[10px] bg-white py-[10px] pl-[12px] pr-[16px] rounded-full overflow-hidden">
        <RiSearchLine className="size-[23px]" />
        <input type="text" placeholder="Search" className="focus:outline-0" />
      </div>
      <div className="relative flex gap-[10px]">
        <div className="group h-[42px] w-[42px] flex justify-center items-center bg-white rounded-[100%]">
          <RiSettings3Line className="size-[20px] group-hover:rotate-180 duration-500" />
        </div>
        <div className="group h-[42px] w-[42px] flex justify-center items-center bg-white rounded-[100%]">
          <RiNotification3Line className="size-[20px] group-hover:rotate-30 duration-500" />
        </div>
        <div onClick={handleCollapsed} className="group flex items-center bg-white p-[5px] rounded-full cursor-pointer z-1">
          <div className="bg-green size-[34px] rounded-[100%] mr-[7px]"></div>
          <p>Guy Hawkins</p>
          {isCollapsed ? (<FaChevronUp className="ml-[12px] mr-[6px] p-[2px] group-hover:-translate-y-0.5 duration-500" />):(<FaChevronDown className="ml-[12px] mr-[6px] p-[2px] group-hover:translate-y-0.5 duration-500" />)}
        </div>
        <div className={`absolute ${isCollapsed ? "slideIn":"hidden"} bg-white min-w-[169px] py-[8px] rounded-[10px] top-16 right-0 shadow`}>
          <button
            className="flex items-center gap-[10px] px-[10px] py-[11px] w-full cursor-pointer hover:bg-grey"
          >
            <FiUser className="size-[16px]"/>
            Profile
          </button>
          <button
            className="flex items-center gap-[10px] px-[10px] py-[11px] w-full cursor-pointer hover:bg-grey"
          >
            <RiSettings3Line className="size-[16px]"/>
            Settings
          </button>
          <button
            onClick={() => {
              dispatch(toggleToken());
            }}
            className="flex items-center gap-[10px] text-red px-[10px] py-[11px] w-full cursor-pointer hover:bg-grey"
          >
            <RiLogoutBoxRLine className="size-[16px]"/>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
