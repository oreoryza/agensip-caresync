import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RiSearchLine } from "react-icons/ri";
import { FaPlus } from 'react-icons/fa';

const Employee = () => {
  const { employees } = useSelector((state) => state.employee);
  const [selectedJobCategory, setSelectedJobCategory] = useState("All");

  // Get unique job categories
  const jobCategories = ["All", ...new Set(employees.map((emp) => emp.jobCategory))];

  // Filter employees based on selected job category
  const filteredEmployees =
    selectedJobCategory === "All"
      ? employees
      : employees.filter((emp) => emp.jobCategory === selectedJobCategory);

  return (
    <div className="w-full pb-[24px]">
      <h2 className="font-bold">Employee</h2>
      <div className="flex justify-between my-[24px]">
        <div className="flex gap-2">
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
        <div className="flex gap-2">
          <div className="flex items-center gap-[10px] bg-white py-[10px] pl-[12px] pr-[16px] rounded-full overflow-hidden">
            <RiSearchLine className="size-[23px] text-black/[.5]" />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-0"
            />
          </div>
          <button className="size-[42px] flex items-center justify-center bg-green rounded-[100%]"><FaPlus className="text-white"/></button>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-2 gap-[10px]">
        {filteredEmployees.map((employee) => (
          <Link to={`/employee/${employee.id}`} key={employee.id}>
            <div className="flex justify-around bg-white rounded-[20px] pt-[24px] pr-[28px] h-full hover:outline-2 outline-offset-2 outline-green">
              <img src={employee.img} alt={employee.name} className="w-[50%]" />
              <div className="flex flex-col gap-[33px] ml-[1rem] max-w-[220px]">
                <div className="flex gap-1">
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
