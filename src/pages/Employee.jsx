import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RiSearchLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

const Employee = () => {
  const { employees } = useSelector((state) => state.employee);
  const [selectedJobCategory, setSelectedJobCategory] = useState("All");

  // Get unique job categories
  const jobCategories = [
    "All",
    ...new Set(employees.map((emp) => emp.jobCategory)),
  ];

  // Filter employees based on selected job category
  const filteredEmployees =
    selectedJobCategory === "All"
      ? employees
      : employees.filter((emp) => emp.jobCategory === selectedJobCategory);

  return (
    <div className="container">
      <h2 className="font-bold">Employee</h2>
      <div className="flex justify-between my-[24px]">
        <div className="flex gap-2 ml-0.5 max-xl:hidden">
          {jobCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedJobCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedJobCategory === category
                  ? "bg-white text-black"
                  : "outline-1 outline-black/[.6] text-black/[.6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <select className="text-xs xl:hidden">
          <button>
            <selectedcontent></selectedcontent>
            <span className="picker">
              <BsChevronDown />
            </span>
          </button>
          {jobCategories.map((category) => (
            <option
              key={category}
              onClick={() => setSelectedJobCategory(category)}
              className={`rounded-full text-sm`}
            >
              {category}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <div className="flex items-center gap-[10px] bg-white py-[10px] xl:pl-[12px] xl:pr-[16px] max-xl:px-[10px] rounded-full overflow-hidden">
            <RiSearchLine className="size-[23px] text-black/[.5]" />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-0 max-xl:hidden"
            />
          </div>
          <button className="group size-[42px] flex items-center justify-center bg-green rounded-[100%]">
            <FaPlus className="text-white group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-[10px]">
        {filteredEmployees.map((employee) => (
          <Link to={`/employee/${employee.id}`} key={employee.id}>
            <div className="group flex bg-white rounded-[20px] sm:pt-[24px] pt-[14px] sm:pr-[28px] pr-[16px] h-full overflow-hidden">
              <img
                src={employee.img}
                alt={employee.name}
                className="min-w-[50%] h-[230px] object-top group-hover:scale-[1.1] duration-300"
              />
              <div className="flex flex-col gap-[33px] max-[375px]:gap-[14px] ml-[1rem] max-w-[220px]">
                <div className="flex max-[375px]:flex-wrap gap-1">
                  <div
                    className={`px-[8px] py-[6px] rounded-full text-small ${
                      employee.status === "Active"
                        ? "text-green bg-green/[.1]"
                        : "text-red bg-red/[.1]"
                    }`}
                  >
                    {employee.status}
                  </div>
                  <div className="px-[8px] py-[6px] rounded-full text-small bg-black/[.06] text-black/[.5]">
                    {employee.category}
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <h5 className="font-medium">{employee.name}</h5>
                  <p className="text-small opacity-50">{employee.jobTitle}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Employee;
