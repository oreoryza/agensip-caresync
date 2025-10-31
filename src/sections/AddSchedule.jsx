import React, { useState } from "react";
import Select from "react-select";

import ButtonPrimary from "../components/ButtonPrimary";

import { PiX } from "react-icons/pi";
import { PiArrowRight } from "react-icons/pi";
import { useSelector } from "react-redux";

const AddSchedule = ({ isOpen, onClose }) => {
  const data = useSelector((state) => state.data);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedService, setSelectedService] = useState("Check Up");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [endTime, setEndTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  const services = ["Check Up", "Monitoring", "Driver"]

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
      } fixed xl:top-0 bottom-0 left-0 flex justify-center xl:items-center items-end w-screen h-screen bg-black/[.2] z-9`}
    >
      <div className="bg-white xl:w-[393px] w-screen xl:rounded-[20px] max-xl:rounded-t-[20px]">
        <div className="flex justify-between items-center px-[24px] py-[20px] border-b-[1px] border-black/[.1] mb-[24px]">
          <p className="text-subtitle font-medium">Add new schedule</p>
          <button onClick={onClose} className="text-black/[.5]">
            <PiX className="size-[20px]" />
          </button>
        </div>
            <div className="flex flex-col gap-2 px-[24px] mb-[10px]">
              <p
                className="text-small font-medium text-black"
              >
                Services
              </p>
              <div className="flex gap-2">
              {services.map((service) => (
              <button onClick={() => setSelectedService(service)} className={`outline-1 text-black/[.5] outline-black/[.1] p-[12px] rounded-[10px] ${selectedService === service ? "bg-light-green outline-green text-green" : ""}`}>
                {service}
              </button>
              ))}
              </div>
            </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[10px] px-[24px]">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-xs font-medium text-black/[.8]"
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
                className="text-xs font-medium text-black/[.8]"
              >
                Assign to
              </label>
                <Select
                  options={data.doctors.lists}
                  value={selectedOptions}
                  onChange={handleChange}
                  isMulti={true}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      padding: '6px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.1)',
                    }),
                  }}
                />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="date"
                className="text-xs font-medium text-black/[.8]"
              >
                Date
              </label>
              <div className="outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                <input
                  name="date"
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Choose date"
                  className="text-small focus:outline-0 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="time"
                className="text-xs font-medium text-black/[.8]"
              >
                Time
              </label>
              <div className="flex items-center gap-[10px]">
                <div className="w-full outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                  <input
                    name="startTime"
                    id="startTime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    placeholder="Choose time"
                    className="text-small focus:outline-0 w-full"
                  />
                </div>
                <PiArrowRight className="min-w-[12px] min-h-[10px]" />
                <div className="w-full outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                  <input
                    name="endTime"
                    id="endTime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    placeholder="Choose time"
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
