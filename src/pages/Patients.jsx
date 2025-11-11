import React, { useState, useMemo } from "react";
import TotalPatients from "../components/charts/TotalPatients";
import AppointmentsChart from "../components/charts/AppointmentsChart";
import MapChart from "../components/charts/MapChart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AddPatients from "../sections/AddPatients";

import spain from "../assets/spain.svg";
import norway from "../assets/norway.jpg";
import sweden from "../assets/sweden.jpg";
import patient1 from "../assets/patient-1.jpg";
import patient2 from "../assets/patient-2.jpg";
import patient3 from "../assets/patient-3.jpg";

import { MdCall } from "react-icons/md";
import { PiDotsThreeVertical } from "react-icons/pi";
import { LuChevronsUpDown, LuChevronUp, LuChevronDown } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";

const Patients = () => {
  const patients = useSelector((state) => state.patients.patients);
  const [selectedCategory, setSelectedCategory] = useState("Day");
  const [isAdd, setIsAdd] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const categoryLimits = { Day: 3, Week: 5, Month: 12 };

  const [visiblePatients, setVisiblePatients] = useState(categoryLimits["Day"]);

  const categories = ["Day", "Week", "Month"];

  const sortedPatients = useMemo(() => {
    if (!sortBy) return patients;
    return [...patients].sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === "name") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [patients, sortBy, sortOrder]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return <LuChevronsUpDown />;
    return sortOrder === "asc" ? <LuChevronUp /> : <LuChevronDown />;
  };

  return (
    <div className="container slideIn">
      <h2 className="font-bold">Patients</h2>
      <div className="flex flex-col gap-[16px] mt-[24px]">
        <div className="flex max-xl:flex-col-reverse gap-[16px]">
          <div className="flex max-xl:flex-col w-full card overflow-hidden">
            <div className="flex flex-col justify-between p-[20px]">
              <p className="text-small font-bold">Patient locations</p>
              <div className="max-xl:flex gap-2 justify-around">
                <div className="mb-[20px]">
                  <h2 className="font-bold">400</h2>
                  <p className="text-small text-black/[.5]">Total patients</p>
                </div>
                <div className="mb-[20px]">
                  <div className="flex max-xl:flex-wrap xl:gap-2 gap-1 items-center">
                    <h2 className="font-bold">300</h2>
                    <div className="flex">
                      <div className="bg-green xl:size-[20px] size-[14px] rounded-[100%] outline-2 outline-white/[.6] z-2 overflow-hidden">
                        <img
                          src={patient1}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="bg-green xl:size-[20px] size-[14px] rounded-[100%] outline-2 outline-white/[.6] -ml-1 z-1 overflow-hidden">
                        <img
                          src={patient2}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="bg-green xl:size-[20px] size-[14px] rounded-[100%] outline-2 outline-white/[.6] -ml-1 overflow-hidden">
                        <img
                          src={patient3}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-small text-black/[.5]">Local patients</p>
                </div>
                <div className="mb-[20px]">
                  <div className="flex max-xl:flex-wrap xl:gap-2 gap-1 items-center">
                    <h2 className="font-bold">100</h2>
                    <div className="flex">
                      <div className="bg-green xl:size-[20px] size-[14px] rounded-[100%] outline-2 outline-white/[.6] z-2 overflow-hidden">
                        <img
                          src={spain}
                          alt=""
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="bg-green xl:size-[20px] size-[14px] rounded-[100%] outline-2 outline-white/[.6] -ml-1 z-1 overflow-hidden">
                        <img
                          src={sweden}
                          alt=""
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="bg-green xl:size-[20px] size-[14px] rounded-[100%] outline-2 outline-white/[.6] -ml-1 overflow-hidden">
                        <img
                          src={norway}
                          alt=""
                          className="h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-small text-black/[.5]">
                    Foreigner country
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-end w-full">
              <div className="overflow-x-auto">
                <MapChart />
              </div>
              <div className="absolute bottom-0 flex justify-end items-end h-[130px] w-full bg-linear-to-t from-[#F2F5F1] to-[#F2F5F1]/[.0] pointer-events-none">
                <div className="flex gap-[20px] max-xl:px-[16px] max-xl:flex-wrap mb-[20px] xl:mr-[20px]">
                  <div className="flex items-center gap-1 text-xs text-black/[.6]">
                    <div className="size-[10px] rounded-[100%] bg-grey"></div>
                    No patients
                  </div>
                  <div className="flex items-center gap-1 text-xs text-black/[.6]">
                    <div className="size-[10px] rounded-[100%] bg-light-yellow"></div>
                    1-20 patients
                  </div>
                  <div className="flex items-center gap-1 text-xs text-black/[.6]">
                    <div className="size-[10px] rounded-[100%] bg-light-green"></div>
                    21-50 patients
                  </div>
                  <div className="flex items-center gap-1 text-xs text-black/[.6]">
                    <div className="size-[10px] rounded-[100%] bg-yellow"></div>
                    51-100 patients
                  </div>
                  <div className="flex items-center gap-1 text-xs text-black/[.6]">
                    <div className="size-[10px] rounded-[100%] bg-green"></div>
                    100+ patients
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-[375px]:flex-wrap xl:flex-col xl:gap-[16px] gap-[10px]">
            <div className="card p-[20px] w-full h-full">
              <TotalPatients />
            </div>
            <div className="card p-[20px] w-full h-full">
              <AppointmentsChart />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] w-full card xl:p-[40px] p-[14px] max-h-[90vh] overflow-hidden">
          <div className="flex justify-between items-center mb-[20px]">
            <div className="flex gap-2 max-xl:hidden">
              {categories.map((category) => (
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisiblePatients(categoryLimits[category]);
                  }}
                  className={`text-small outline-black/[.1] px-[20px] py-[10px] rounded-full ${
                    selectedCategory === category
                      ? "bg-white outline-0 text-black font-medium"
                      : "text-black/[.5] outline-1"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setVisiblePatients(categoryLimits[e.target.value]);
              }}
              className="text-xs xl:hidden px-[10px] py-[8px] rounded-full border border-black/[.1] bg-white"
            >
              <button>
                <selectedcontent></selectedcontent>
                <span className="picker">
                  <BsChevronDown />
                </span>
              </button>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="flex gap-2">
              <div className="flex items-center gap-[10px] bg-white py-[10px] max-xl:px-[10px] xl:pl-[12px] xl:pr-[16px] rounded-full overflow-hidden max-xl:hidden">
                <RiSearchLine className="size-[23px] text-black/[.5]" />
                <input
                  type="text"
                  placeholder="Search"
                  className="focus:outline-0"
                />
              </div>
              <Link
                to="/search"
                className="flex items-center gap-[10px] bg-white py-[10px] px-[10px] rounded-[100%] overflow-hidden xl:hidden"
              >
                <RiSearchLine className="size-[23px] text-black/[.5]" />
              </Link>
              <button
                onClick={() => setIsAdd(true)}
                className="group size-[42px] flex items-center justify-center bg-green rounded-[100%]"
              >
                <FaPlus className="text-white group-hover:rotate-90 duration-300" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] overflow-x-auto hide-scroll w-full">
            <div className="flex text-small text-black/[.8]">
              <button
                onClick={() => handleSort("name")}
                className="flex gap-2 items-center w-[17%] max-xl:min-w-[200px]"
              >
                Patient name {getSortIcon("name")}
              </button>
              <button
                onClick={() => handleSort("address")}
                className="flex gap-2 items-center w-[19%] max-xl:min-w-[250px]"
              >
                Address {getSortIcon("address")}
              </button>
              <button
                onClick={() => handleSort("gender")}
                className="flex gap-2 items-center w-[13%] max-xl:min-w-[130px]"
              >
                Gender {getSortIcon("gender")}
              </button>
              <button
                onClick={() => handleSort("ages")}
                className="flex gap-2 items-center w-[13%] max-xl:min-w-[130px]"
              >
                Category {getSortIcon("ages")}
              </button>
              <button
                onClick={() => handleSort("treatment")}
                className="flex gap-2 items-center w-[15%] max-xl:min-w-[150px]"
              >
                Treatment {getSortIcon("treatment")}
              </button>
              <button
                onClick={() => handleSort("payment")}
                className="flex gap-2 items-center w-[15%] max-xl:min-w-[150px]"
              >
                Payment {getSortIcon("payment")}
              </button>
              <div className="flex gap-2 items-center max-xl:min-w-[100px]">
                Actions
              </div>
            </div>
            {patients.length > 0 ? (
              <div className="flex flex-col gap-[6px] w-full xl:overflow-y-auto">
                {sortedPatients.slice(0, visiblePatients).map((patient) => (
                  <div
                    key={patient.id}
                    className="flex items-center bg-white/[.4] backdrop-blur xl:w-full w-fit rounded-full p-[12px] hover:bg-black/[.1] duration-300"
                  >
                    <div className="flex gap-1 items-center w-[17%] max-xl:min-w-[200px]">
                      <img
                        src={patient.img}
                        alt={patient.name}
                        className="size-[36px] object-cover rounded-[100%]"
                      />
                      <div>
                        <p className="text-small">{patient.name}</p>
                        <p className="text-xs text-black/[.5]">
                          {patient.idcode}
                        </p>
                      </div>
                    </div>
                    <div className="w-[19%] min-w-[250px] text-small overflow-hidden">
                      <div title={patient.address} className="w-[70%] truncate">
                        {patient.address}
                      </div>
                    </div>
                    <div className="w-[13%] max-xl:min-w-[130px] text-small">
                      {patient.gender}
                    </div>
                    <div className="w-[13%] max-xl:min-w-[130px]">
                      <div
                        className={`w-fit text-xs px-[10px] py-[6px] rounded-full ${
                          patient.ages >= 45
                            ? "text-blue bg-light-blue"
                            : patient.ages >= 16
                            ? "text-green bg-light-green"
                            : "text-yellow bg-light-yellow"
                        }`}
                      >
                        {patient.ages >= 45
                          ? "Elderly"
                          : patient.ages >= 16
                          ? "Adult"
                          : "Children"}
                      </div>
                    </div>
                    <div className="w-[15%] max-xl:min-w-[150px] text-small">
                      {patient.treatment}
                    </div>
                    <div className="w-[15%] max-xl:min-w-[150px]">
                      <div
                        className={`flex items-center gap-1 w-fit text-xs px-[10px] py-[6px] rounded-full ${
                          patient.payment === "Pending"
                            ? "text-red bg-red/[.12]"
                            : patient.payment === "Paid"
                            ? "text-green bg-light-green"
                            : "text-yellow bg-light-yellow"
                        }`}
                      >
                        <div
                          className={`size-[7px] max-w-[7px] max-h-[7px] rounded-[100%] ${
                            patient.payment === "Pending"
                              ? "bg-red"
                              : patient.payment === "Paid"
                              ? "bg-green"
                              : "bg-yellow"
                          }`}
                        ></div>{" "}
                        {patient.payment}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 max-xl:min-w-[100px]">
                      <a
                        href="https://www.whatsapp.com/"
                        target="_blank"
                        className="flex items-center justify-center size-[36px] bg-white rounded-[100%]"
                      >
                        <MdCall />
                      </a>
                      <Link
                        to={`/patients/${patient.id}`}
                        className="flex items-center justify-center size-[36px] bg-white rounded-[100%]"
                      >
                        <PiDotsThreeVertical />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-[10px] justify-center items-center w-full h-[400px] py-[24px]">
                <div className="flex items-center justify-center size-[40px] rounded-[100%] bg-light-green text-green">
                  <PiUsers className="size-[20px]" />
                </div>
                <p className="font-bold">No Patients</p>
                <p className="text-small text-black/[.5]">
                  You don't have any patients yet
                </p>
                <button className="text-small font-medium text-green">
                  +add new
                </button>
              </div>
            )}
          </div>
          {visiblePatients < categoryLimits[selectedCategory] &&
            visiblePatients < sortedPatients.length && (
              <button
                onClick={() =>
                  setVisiblePatients(
                    Math.min(
                      visiblePatients + 6,
                      categoryLimits[selectedCategory]
                    )
                  )
                }
                className="mt-[20px] px-[20px] py-[10px] text-black/[.5] border-1 border-black/[.1] rounded-full hover:text-green hover:border-green duration-300"
              >
                Load More
              </button>
            )}
        </div>
      </div>
      <AddPatients isOpen={isAdd} onClose={() => setIsAdd(false)} />
    </div>
  );
};

export default Patients;
