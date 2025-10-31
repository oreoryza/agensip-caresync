import React, { useState } from "react";
import { useSelector } from "react-redux";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";

import { PiX } from "react-icons/pi";
import { PiHeartbeatBold } from "react-icons/pi";
import { PiCheck } from "react-icons/pi";
import { PiStethoscope } from "react-icons/pi";
import { PiNotepad } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import { PiArrowRight } from "react-icons/pi";
import { PiCheckCircleFill } from "react-icons/pi";

const AddAppointments = ({ isOpen, onClose }) => {
  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(false);
  const [isStep3, setIsStep3] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const appointments = useSelector((state) => state.data.patients.appointments);
  const doctors = useSelector((state) => state.data.doctors.lists);

  // Sort appointments alphabetically by name
  const sortedAppointments = [...appointments].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Filter appointments based on search term
  const filteredAppointments = sortedAppointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group appointments by first letter
  const groupedAppointments = filteredAppointments.reduce(
    (groups, appointment) => {
      const firstLetter = appointment.name.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(appointment);
      return groups;
    },
    {}
  );

  // Sort doctors alphabetically by name
  const sortedDoctors = [...doctors].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Filter doctors based on search term
  const filteredDoctors = sortedDoctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group doctors by first letter
  const groupedDoctors = filteredDoctors.reduce((groups, doctor) => {
    const firstLetter = doctor.name.charAt(0).toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(doctor);
    return groups;
  }, {});

  const handleStep1 = () => {
    setIsStep1(true);
    setIsStep2(false);
    setIsStep3(false);
  };

  const handleStep2 = () => {
    setIsStep1(false);
    setIsStep2(true);
    setIsStep3(false);
  };

  const handleStep3 = () => {
    setIsStep1(false);
    setIsStep2(false);
    setIsStep3(true);
  };

  const handleModal = () => {
    onClose();
    setIsStep1(true);
    setIsStep2(false);
    setIsStep3(false);
  };

  return (
    <>
      <div
        className={`${
          isOpen ? "fadeIn" : "hidden"
        } fixed xl:top-0 bottom-0 left-0 flex justify-center xl:items-center items-end w-screen h-screen bg-black/[.2] z-9`}
      >
        <div className="bg-white xl:w-[393px] w-screen xl:rounded-[20px] max-xl:rounded-t-[20px]">
          <div className="flex justify-between items-center px-[24px] py-[20px] border-b-[1px] border-black/[.1] mb-[24px]">
            <p className="text-subtitle font-medium">Add appointments</p>
            <button onClick={handleModal} className="text-black/[.5]">
              <PiX className="size-[20px]" />
            </button>
          </div>
          <div className="flex justify-between items-center gap-[16px] px-[24px]">
            <div
              className={`flex justify-center items-center ${
                isStep2 || isStep3 ? "bg-green text-white" : "text-green"
              } text-green outline-1 outline-green min-w-[32px] min-h-[32px] rounded-full`}
            >
              {isStep1 ? <PiHeartbeatBold /> : <PiCheck />}
            </div>
            <div className="h-[1px] w-full bg-black/[.2]"></div>
            <div
              className={`flex justify-center items-center ${
                isStep3 ? "bg-green text-white" : ""
              } ${
                isStep1
                  ? "outline-dashed outline-black/[.5] text-black/[.5]"
                  : "text-green outline-green"
              } outline-1 min-w-[32px] min-h-[32px] rounded-full`}
            >
              {isStep2 || isStep1 ? <PiStethoscope /> : <PiCheck />}
            </div>
            <div className="h-[1px] w-full bg-black/[.2]"></div>
            <div
              className={`${
                isStep1 || isStep2
                  ? "outline-dashed outline-black/[.5] text-black/[.5]"
                  : "text-green outline-green"
              } outline-1 flex justify-center items-center min-w-[32px] min-h-[32px] rounded-full`}
            >
              <PiNotepad />
            </div>
          </div>
          <div className="flex justify-between p-[12px]">
            <div className="text-center">
              <p className="text-xs text-black/[.6]">Step 1</p>
              <p className="text-small">Patients</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-black/[.6]">Step 2</p>
              <p className="text-small">Doctor</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-black/[.6]">Step 3</p>
              <p className="text-small">Details</p>
            </div>
          </div>

          {isStep1 ? (
            <div className="px-[24px]">
              <form className="my-[12px] py-[14px] px-[12px] outline-1 outline-black/[.1] rounded-[10px]">
                <input
                  type="text"
                  placeholder="Search patient name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full focus:outline-0"
                />
              </form>
              <div className="max-h-[220px] hide-scroll overflow-y-auto">
                {Object.keys(groupedAppointments)
                  .sort()
                  .map((letter) => (
                    <div key={letter} className="mb-[16px]">
                      <p className="text-xs font-medium text-black/[.5] mb-[8px]">
                        {letter}
                      </p>
                      <ul className="space-y-[8px]">
                        {groupedAppointments[letter].map((appointment) => (
                          <li
                            key={appointment.name}
                            onClick={() => setSelectedPatient(appointment.name)}
                            className={`flex items-center justify-between p-[8px] bg-gray-50 rounded-[8px] cursor-pointer ${
                              selectedPatient === appointment.name
                                ? "mx-2 bg-light-green"
                                : "hover:bg-gray-100"
                            } duration-300`}
                          >
                            <div className="flex">
                              <img
                                src={appointment.img || "/default-avatar.png"}
                                alt={appointment.name}
                                className="w-[40px] h-[40px] object-cover rounded-full mr-[12px]"
                              />
                              <div>
                                <p className="text-sm font-medium">
                                  {appointment.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {appointment.id}
                                </p>
                              </div>
                            </div>
                            {selectedPatient === appointment.name ? (
                              <div className="size-[20px] min-w-[20px] min-h-[20px] rounded-[100%]">
                                <PiCheckCircleFill className="w-full h-full text-green" />
                              </div>
                            ) : (
                              <div className="size-[16px] min-w-[16px] min-h-[16px] rounded-[100%] outline-1 outline-black"></div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          ) : isStep2 ? (
            <div className="px-[24px]">
              <form className="my-[12px] py-[14px] px-[12px] outline-1 outline-black/[.1] rounded-[10px]">
                <input
                  type="text"
                  placeholder="Search doctor name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full focus:outline-0"
                />
              </form>
              <div className="max-h-[220px] hide-scroll overflow-y-auto">
                {Object.keys(groupedDoctors)
                  .sort()
                  .map((letter) => (
                    <div key={letter} className="mb-[16px]">
                      <p className="text-xs font-medium text-black/[.5] mb-[8px]">
                        {letter}
                      </p>
                      <ul className="space-y-[8px]">
                        {groupedDoctors[letter].map((doctor) => (
                          <li
                            key={doctor.name}
                            onClick={() => setSelectedDoctor(doctor.name)}
                            className={`flex items-center justify-between p-[8px] bg-gray-50 rounded-[8px] cursor-pointer ${
                              selectedDoctor === doctor.name
                                ? "mx-2 bg-light-green"
                                : "hover:bg-gray-100"
                            } duration-300`}
                          >
                            <div className="flex">
                              <img
                                src={doctor.img || "/default-avatar.png"}
                                alt={doctor.name}
                                className="w-[40px] h-[40px] object-cover rounded-full mr-[12px]"
                              />
                              <div>
                                <p className="text-sm font-medium">
                                  {doctor.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {doctor.id}
                                </p>
                              </div>
                            </div>
                            {selectedDoctor === doctor.name ? (
                              <div className="size-[20px] min-w-[20px] min-h-[20px] rounded-[100%]">
                                <PiCheckCircleFill className="w-full h-full text-green" />
                              </div>
                            ) : (
                              <div className="size-[16px] min-w-[16px] min-h-[16px] rounded-[100%] outline-1 outline-black"></div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div className="py-[24px] px-[24px] max-h-[300px] xl:hide-scroll overflow-y-auto">
              <form className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="status"
                    className="text-xs font-medium text-black/[.5]"
                  >
                    Status
                  </label>
                  <div className="outline-1 outline-black/[.1] py-[6px] rounded-[10px]">
                    <select
                      name="status"
                      id="status"
                      className="text-small w-full"
                    >
                      <button>
                        <selectedcontent></selectedcontent>
                        <span className="picker">
                          <BsChevronDown />
                        </span>
                      </button>
                      <option value="">In Queue</option>
                      <option value="">Accepted</option>
                      <option value="">Urgent</option>
                      <option value="">Archive</option>
                    </select>
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
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="note"
                    className="text-xs font-medium text-black/[.5]"
                  >
                    Quick note <span className="font-regular">(optional)</span>
                  </label>
                  <div className="outline-1 outline-black/[.1] p-[12px] rounded-[10px]">
                    <textarea
                      name="note"
                      id="note"
                      placeholder="Write a note"
                      resize
                      className="text-small w-full min-h-[100px] focus:outline-0"
                    />
                  </div>
                </div>
              </form>
            </div>
          )}

          <div className="py-[18px] px-[16px]">
            {isStep1 ? (
              <div>
                <ButtonPrimary onClick={handleStep2} text="Next ->" />
              </div>
            ) : isStep2 ? (
              <div className="flex gap-2">
                <div className="min-w-[40px]">
                  <ButtonSecondary
                    onClick={handleStep1}
                    text="<-"
                    style="opacity-50"
                  />
                </div>
                <ButtonPrimary onClick={handleStep3} text="Next ->" />
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="min-w-[40px]">
                  <ButtonSecondary
                    onClick={handleStep2}
                    text="<-"
                    style="opacity-50"
                  />
                </div>
                <ButtonPrimary
                  onClick={handleModal}
                  text="
                Save"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAppointments;
