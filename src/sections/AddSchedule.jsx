import React, { useState } from "react";
import Select from "react-select";

import ButtonPrimary from "../components/ButtonPrimary";

import { PiX } from "react-icons/pi";
import { PiArrowRight } from "react-icons/pi";
import { useSelector } from "react-redux";

const AddSchedule = ({ isOpen, onClose }) => {
  const data = useSelector((state) => state.data);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  }

  return (
    <div
      className={`${
        isOpen ? "fadeIn" : "hidden"
      } fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/[.1] z-9`}
    >
      <div className="bg-white w-[393px] rounded-[20px]">
        <div className="flex justify-between items-center px-[24px] py-[20px] border-b-[1px] border-black/[.1] mb-[24px]">
          <p className="text-subtitle font-medium">Add new schedule</p>
          <button onClick={onClose}>
            <PiX />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[10px] px-[24px]">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-xs font-medium text-black/[.5]"
              >
                Title
              </label>
              <div className="outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                <input
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Your schedule title"
                  className="text-small focus:outline-0 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="assign"
                className="text-xs font-medium text-black/[.5]"
              >
                Assign to
              </label>
              <div className="outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                <Select
                  options={data.doctors.lists}
                  value={selectedOptions}
                  onChange={handleChange}
                  isMulti={true}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="date"
                className="text-xs font-medium text-black/[.5]"
              >
                Date
              </label>
              <div className="outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                <input
                  name="date"
                  id="date"
                  type="date"
                  placeholder="Choose date"
                  className="text-small focus:outline-0 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="time"
                className="text-xs font-medium text-black/[.5]"
              >
                Time
              </label>
              <div className="flex items-center gap-[10px]">
                <div className="w-full outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                  <input
                    name="time"
                    id="time"
                    type="time"
                    placeholder="Choose date"
                    className="text-small focus:outline-0 w-full"
                  />
                </div>
                <PiArrowRight className="min-w-[12px] min-h-[10px]" />
                <div className="w-full outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                  <input
                    name="time"
                    id="time"
                    type="time"
                    placeholder="Choose date"
                    className="text-small focus:outline-0 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-[18px] px-[16px] mt-[14px] border-t border-black/[.1]">
            <ButtonPrimary text="Save" style="bg-green"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSchedule;
