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
  const patients = useSelector((state) => state.patients.patients);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isNotif, setIsNotif] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleModal = () => {
    setIsModal(!isModal);
    setIsCollapsed(false);
  };

  const handleNotif = () => {
    setIsNotif(!isNotif);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearchBar(false);
    setSearchValue("");
  };

  return (
    <>
      <div className="relative flex gap-[24px] justify-between items-center w-full xl:py-[24px] py-[10px] xl:px-[40px] px-[20px] sticky top-0 z-3 backdrop-blur-3xl">
        <Link to={"/"} className="z-1">
          <img
            src={logo}
            alt="CareSync"
            className="xl:max-h-[32px] max-h-[24px]"
          />
        </Link>
        <div className="absolute left-0 flex justify-center top-[24px] w-full">
          <div
            onClick={() => setIsSearchBar(true)}
            className={`flex flex-col gap-[10px] bg-white h-fit py-[10px] ${
              isSearchBar ? "w-[35%] rounded-[16px] shadow" : "rounded-full"
            } z-4 overflow-hidden max-xl:hidden`}
          >
            <form
              onSubmit={handleSubmit}
              className="flex gap-[10px] pl-[12px] pr-[16px]"
            >
              <RiSearchLine className="size-[23px] text-black/[.5]" />
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-0 w-full"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
            {isSearchBar && (
              <>
                <div className="bg-black/[.2] h-[1px]"></div>
                <div className="px-[12px] py-[8px]">
                  <div className="flex flex-wrap gap-[8px]">
                    <button
                      onClick={() => setSearchValue("Patients")}
                      className="text-left text-small bg-grey px-[10px] py-[6px] rounded-full"
                    >
                      Patients
                    </button>
                    <button
                      onClick={() => setSearchValue("Staff")}
                      className="text-left text-small bg-grey px-[10px] py-[6px] rounded-full"
                    >
                      Staff
                    </button>
                    <button
                      onClick={() => setSearchValue("Appointments")}
                      className="text-left text-small bg-grey px-[10px] py-[6px] rounded-full"
                    >
                      Appointments
                    </button>
                    <button
                      onClick={() => setSearchValue("Medical records")}
                      className="text-left text-small bg-grey px-[10px] py-[6px] rounded-full"
                    >
                      Medical records
                    </button>
                    <button
                      onClick={() => setSearchValue("Patients")}
                      className="text-left text-small bg-grey px-[10px] py-[6px] rounded-full"
                    >
                      Patients
                    </button>
                    <button
                      onClick={() => setSearchValue("Schedule")}
                      className="text-left text-small bg-grey px-[10px] py-[6px] rounded-full"
                    >
                      Schedule
                    </button>
                    <button
                      onClick={() => setSearchValue("Prescription")}
                      className="text-left text-small bg-grey px-[10px] py-[6px] rounded-full"
                    >
                      Prescription
                    </button>
                  </div>
                </div>
                <div className="px-[12px] py-[8px]">
                  <p className="text-small font-semibold mb-[8px]">
                    Recent Searches
                  </p>
                  <div className="flex flex-col gap-[4px]">
                    {patients.map((patient, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchValue(patient.name)}
                        className="flex items-center gap-2 text-left text-small hover:bg-grey px-[8px] py-[4px] rounded-[4px]"
                      >
                        <img
                          src={patient.img}
                          alt=""
                          className="size-[32px] rounded-[100%] object-cover"
                        />
                        <div className="">
                          <p>{patient.name}</p>
                          <p className="text-xs opacity-50">{patient.id}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          onClick={() => setIsSearchBar(false)}
          className={`fixed ${
            isSearchBar
              ? `left-0 top-0 flex justify-center bg-black/[.2] z-3 w-full h-screen`
              : ""
          }`}
        ></div>
        <div className="flex xl:gap-[10px] gap-[6px]">
          <Link
          to={"/search"}
            className="group h-[42px] w-[42px] flex justify-center items-center bg-white rounded-[100%] xl:hidden"
          >
            <RiSearchLine className="size-[20px] group-hover:rotate-180 duration-500" />
          </Link>
          <Link
            to={"/settings"}
            className="group h-[42px] w-[42px] flex justify-center items-center bg-white z-1 rounded-[100%] max-xl:hidden"
          >
            <RiSettings3Line className="size-[20px] group-hover:rotate-180 duration-500" />
          </Link>
          <div className="relative">
            <Link
            to={"/notifications"}
              className="group relative h-[42px] w-[42px] flex justify-center items-center bg-white rounded-[100%] xl:hidden"
            >
              <RiNotification3Line className="size-[20px] group-hover:rotate-30 duration-500" />
              <div className="absolute size-[8px] rounded-[100%] border-[1px] border-white bg-red ml-2 mb-3"></div>
            </Link>
            <button
              onClick={handleNotif}
              className="group relative h-[42px] w-[42px] flex justify-center items-center bg-white rounded-[100%] max-xl:hidden"
            >
              <RiNotification3Line className="size-[20px] group-hover:rotate-30 duration-500" />
              <div className="absolute size-[8px] rounded-[100%] border-[1px] border-white bg-red ml-2 mb-3"></div>
            </button>
            <div
              className={`absolute ${
                isNotif ? "" : "hidden"
              } top-16 -right-24 flex justify-center`}
            >
              <div className="bg-white min-w-[352px] shadow rounded-[16px] py-[20px]">
                <Notifications onClose={() => setIsNotif(false)} />
              </div>
            </div>
          </div>
          <div
            onClick={handleCollapsed}
            className="relative flex items-center xl:bg-white xl:p-[5px] xl:rounded-full xl:hover:bg-black/[.2] duration-300 cursor-pointer"
          >
            <img
              src={profile.img}
              className="object-cover size-[34px] max-xl:size-[42px] rounded-[100%] bg-white xl:mr-[7px]"
            />
            <p className="select-none max-xl:hidden">Guy Hawkins</p>
            {isCollapsed ? (
              <FaChevronUp className="ml-[12px] mr-[6px] p-[2px] max-xl:hidden" />
            ) : (
              <FaChevronDown className="ml-[12px] mr-[6px] p-[2px max-xl:hidden" />
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
        } fixed top-0 flex justify-center xl:items-center items-end h-screen w-screen bg-black/[.2] z-9`}
      >
        <div className="flex flex-col gap-[33px] bg-white px-[24px] py-[28px] xl:rounded-[24px] max-xl:rounded-t-[20px] xl:w-[374px] w-screen">
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
              style={"text-black/[.5]"}
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
