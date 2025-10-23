import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleToken } from "../redux/slices/tokenSlice";

import ButtonSecondary from "./ButtonSecondary";
import ButtonPrimary from "./ButtonPrimary";
import Notifications from "../sections/Notifications";

import logo from "../assets/logo.svg";

import { RiSearchLine } from "react-icons/ri";
import { RiSettings3Line } from "react-icons/ri";
import { RiNotification3Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Topbar = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isNotif, setIsNotif] = useState(false);

  const handleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleModal = () => {
    setIsModal(!isModal);
    setIsCollapsed(false);
  };

  const handleNotif = () => {
    setIsNotif(!isNotif);
  }

  return (
    <>
      <div className="flex justify-between items-center w-full py-[24px] px-[40px] sticky top-0 z-3 backdrop-blur-3xl">
        <Link to={"/"}>
          <img src={logo} alt="CareSync" className="max-h-[32px]" />
        </Link>
        <div className="flex items-center gap-[10px] bg-white py-[10px] pl-[12px] pr-[16px] rounded-full overflow-hidden max-xl:hidden">
          <RiSearchLine className="size-[23px] text-black/[.5]" />
          <input type="text" placeholder="Search" className="focus:outline-0" />
        </div>
        <div className="flex gap-[10px]">
          <Link
            to={"/settings"}
            className="group h-[42px] w-[42px] flex justify-center items-center bg-white rounded-[100%]"
          >
            <RiSearchLine className="size-[20px] group-hover:rotate-180 duration-500" />
          </Link>
          <Link
            to={"/settings"}
            className="group h-[42px] w-[42px] flex justify-center items-center bg-white rounded-[100%] max-xl:hidden"
          >
            <RiSettings3Line className="size-[20px] group-hover:rotate-180 duration-500" />
          </Link>
          <div className="relative">
            <button onClick={handleNotif} className="group relative h-[42px] w-[42px] flex justify-center items-center bg-white rounded-[100%]">
              <RiNotification3Line className="size-[20px] group-hover:rotate-30 duration-500" />
              <div className="absolute size-[8px] rounded-[100%] border-[1px] border-white bg-red ml-2 mb-3"></div>
            </button>
            <div className={`absolute ${isNotif ? "" : "hidden"} top-16 -right-24 flex justify-center`}>
              <div className="bg-white min-w-[352px] shadow rounded-[16px] py-[20px]">
                <Notifications onClose={() => setIsNotif(false)}/>
              </div>
            </div>
          </div>
          <div
            onClick={handleCollapsed}
            className="group relative flex items-center bg-white p-[5px] rounded-full cursor-pointer"
          >
            <img
              src={profile.img}
              className="object-cover size-[34px] rounded-[100%] xl:mr-[7px]"
            />
            <p className="select-none max-xl:hidden">Guy Hawkins</p>
            {isCollapsed ? (
              <FaChevronUp className="ml-[12px] mr-[6px] p-[2px] group-hover:-translate-y-0.5 duration-500 max-xl:hidden" />
            ) : (
              <FaChevronDown className="ml-[12px] mr-[6px] p-[2px] group-hover:translate-y-0.5 duration-500 max-xl:hidden" />
            )}
            <div
              className={`absolute ${
                isCollapsed ? "" : "hidden"
              } bg-white w-full py-[8px] rounded-[10px] top-16 right-0 shadow min-w-[120px]`}
            >
              <Link
                to={"/profile"}
                onClick={handleCollapsed}
                className="flex items-center gap-[10px] px-[10px] py-[11px] w-full cursor-pointer select-none hover:bg-grey"
              >
                <FiUser className="size-[16px]" />
                Profile
              </Link>
              <Link
                to={"/settings"}
                className="flex items-center gap-[10px] px-[10px] py-[11px] w-full cursor-pointer select-none hover:bg-grey"
              >
                <RiSettings3Line className="size-[16px]" />
                Settings
              </Link>
              <button
                onClick={handleModal}
                className="flex items-center gap-[10px] text-red px-[10px] py-[11px] w-full cursor-pointer select-none hover:bg-grey"
              >
                <RiLogoutBoxRLine className="size-[16px]" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isModal ? "fadeIn" : "hidden"
        } fixed top-0 flex justify-center items-center h-screen w-screen bg-black/[.2] z-9`}
      >
        <div className="flex flex-col gap-[33px] bg-white px-[24px] py-[28px] rounded-[24px] w-[374px]">
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center items-center size-[64px] rounded-[100%] bg-red/[.1] text-red mb-[24px]">
              <RiLogoutBoxRLine className="size-[26px]" />
            </div>
            <p className="text-subtitle font-semibold mb-[10px]">
              Are you sure you want to log out?
            </p>
            <p className="text-small">
              You'll be logged out from your account. You can log back in
              anytime.
            </p>
          </div>
          <div className="flex gap-[10px]">
            <ButtonSecondary
              onClick={handleModal}
              text={"Cancel"}
              style={"grey"}
            />
            <ButtonPrimary
              onClick={() => {
                dispatch(toggleToken());
              }}
              text={"Log Out"}
              style={"bg-red"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
