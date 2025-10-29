import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  const patients = useSelector((state) => state.patients.patients);
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
    navigate("/");
  };
  return (
    <div
      className={`fixed top-0 bg-mobile w-screen h-screen p-[24px] z-4 xl:hidden`}
    >
      <div
        className={`flex flex-col gap-[16px] h-fit py-[10px] z-4 overflow-hidden`}
      >
        <form
          onSubmit={handleSubmit}
          className="flex gap-[10px] bg-white border border-black/[.5] rounded-full px-[16px] py-[14px]"
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
        <>
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
            <p className="text-small font-semibold mb-[8px]">Recent Searches</p>
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
                    <p className="text-xs opacity-50">{patient.idcode}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default SearchBar;