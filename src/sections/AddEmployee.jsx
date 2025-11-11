import React, { useState } from "react";

import ButtonPrimary from "../components/ButtonPrimary";

import { PiX } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";

const AddEmployee = ({ isOpen, onClose }) => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedGender("");
    onClose();
  };

  const gender = ["Male", "Female"];

  return (
    <div
      className={`${
        isOpen ? "fadeIn" : "hidden"
      } fixed xl:top-0 bottom-0 left-0 flex justify-center xl:items-center items-end w-screen h-screen bg-black/[.2] z-9`}
    >
      <div className="bg-white xl:w-[393px] w-screen xl:rounded-[20px] max-xl:rounded-t-[20px]">
        <div className="flex justify-between items-center px-[24px] py-[20px] border-b-[1px] border-black/[.1] mb-[24px]">
          <p className="text-subtitle font-medium">Add employee</p>
          <button onClick={onClose} className="text-black/[.5]">
            <PiX className="size-[20px]" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[10px] px-[24px]">
            <div className="flex items-center gap-[10px]">
              <div className="size-[62px] rounded-[100%] bg-grey"></div>
              <div>
                <div className="flex items-center gap-[10px] mb-[9px]">
                  <button className="text-xs text-green">Upload photo</button>
                  <div className="w-[1px] h-[10px] bg-grey"></div>
                  <button className="text-xs text-red">Delete</button>
                </div>
                <p className="text-[10px] text-black/[.5]">
                  Photo with a maximum photo size of 2mb.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-medium text-black/[.8]"
              >
                Name
              </label>
              <div className="outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Employee name"
                  className="text-small focus:outline-0 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="jobTitle"
                className="text-xs font-medium text-black/[.8]"
              >
                Job Title
              </label>
              <div className="outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                <input
                  name="jobTitle"
                  id="jobTitle"
                  type="text"
                  placeholder="Job title"
                  className="text-small focus:outline-0 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="address"
                className="text-xs font-medium text-black/[.8]"
              >
                Address
              </label>
              <div className="outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                <input
                  name="address"
                  id="address"
                  type="text"
                  placeholder="Employee address"
                  className="text-small focus:outline-0 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="status"
                className="text-xs font-medium text-black/[.8]"
              >
                Gender
              </label>
              <div className="flex gap-[8px] w-full">
                {gender.map((gen) => (
                  <div
                    key={gen}
                    onClick={() => setSelectedGender(gen)}
                    className={`flex items-center gap-[10px] outline-black/[.1] p-[12px] w-full rounded-[10px] cursor-pointer ${
                      selectedGender === gen ? "bg-light-green" : "outline-1"
                    }`}
                  >
                    <div
                      className={`size-[16px] rounded-[100%] outline-black/[.1] ${
                        selectedGender === gen ? "bg-green" : "outline-1"
                      }`}
                    ></div>
                    <p className="text-small">{gen}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="status"
                className="text-xs font-medium text-black/[.8]"
              >
                Job Type
              </label>
              <div className="outline-1 outline-black/[.1] py-[6px] rounded-[10px]">
                <select name="status" id="status" className="text-small w-full">
                  <button>
                    <selectedcontent></selectedcontent>
                    <span className="picker">
                      <BsChevronDown />
                    </span>
                  </button>
                  <option value="">Full-time</option>
                  <option value="">Contract</option>
                  <option value="">Intern</option>
                </select>
              </div>
            </div>
          </div>
          <div className="py-[18px] px-[16px] mt-[14px] border-t border-black/[.1]">
            <ButtonPrimary text="Save" style="bg-green" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;