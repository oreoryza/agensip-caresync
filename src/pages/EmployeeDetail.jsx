import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmployee } from "../redux/slices/employeeSlice";

import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { PiPhone } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import { PiPencilSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const EmployeeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee.employee);
  const [selectedTime, setSelectedTime] = useState("week");

  const percentage =
    ((employee?.patients?.total.slice(-1)[0] -
      employee?.patients?.total.slice(-2)[0]) /
      employee?.patients?.total.slice(-2)[0]) *
    100;
  const percent = percentage.toFixed(1);

  useEffect(() => {
    dispatch(setEmployee(parseInt(id)));
  }, [id, dispatch]);

  const chartData = {
    labels: employee?.patients?.total?.map((_, index) => index.toString()),
    datasets: [
      {
        label: "Appointments",
        data: employee?.patients?.total,
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.1)",
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 4,
        hitRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="container">
      <div className="flex items-center gap-[7px] pl-[17px]">
        <Link
          to={"/employee"}
          className="opacity-50 hover:text-green duration-300"
        >
          Employee
        </Link>
        <BsChevronRight className="opacity-50" />
        <p className="text-green">Employee Detail</p>
      </div>
      <div className="flex max-xl:flex-col justify-between pt-[17px] xl:pl-[17px] w-full h-full">
        <div className="flex w-full">
          <div className="relative w-full max-w-[294px]">
            <img
              src={employee.img}
              alt={employee.name}
              className="w-full h-full"
            />
            <div className="absolute bottom-0 left-0 z-1 flex justify-center items-end gap-[8px] pb-[45px] bg-linear-to-t from-[#F2F0DF] to-white/[0] w-full h-[70%]">
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center bg-green text-white px-[16px] py-[8px] rounded-full"
              >
                <MdCall />
                Call
              </a>
              <a
                href="https://www.whatsapp.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex gap-2 items-center bg-white px-[16px] py-[8px] rounded-full"
              >
                <RiSendPlaneFill />
                Chat
              </a>
            </div>
          </div>
          <div className="flex flex-col max-xl:gap-[16px] justify-between py-[32px] ml-[1rem] w-full">
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
            <div className="grid xl:grid-cols-2 gap-[16px]">
              <div className="flex items-center gap-[10px]">
                <div className="bg-white size-[34px] flex items-center justify-center rounded-[100%]">
                  <IoLocationOutline className="size-[20px]" />
                </div>
                <div>
                  <p className="text-xs opacity-50">Address</p>
                  <p className="text-small">{employee.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="bg-white size-[34px] flex items-center justify-center rounded-[100%]">
                  <PiPhone className="size-[20px]" />
                </div>
                <div>
                  <p className="text-xs opacity-50">Phone Number</p>
                  <p className="text-small">{employee.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="bg-white size-[34px] flex items-center justify-center rounded-[100%]">
                  <PiCalendarDots className="size-[20px]" />
                </div>
                <div>
                  <p className="text-xs opacity-50">Email</p>
                  <p className="text-small">{employee.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end max-xl:gap-[20px] justify-between py-[32px] xl:max-w-[342px]">
          <button className="flex items-center gap-2 bg-green/[.1] text-green text-small font-medium rounded-full px-[16px] py-[8px]">
            <PiPencilSimple className="size-[16px]" />
            Edit Profile
          </button>
          <div className="flex flex-col gap-[16px] bg-white/[.4] p-[20px] rounded-[20px]">
            <p className="font-bold text-subtitle">About</p>
            <p className="text-small opacity-50">{employee.about}</p>
          </div>
        </div>
      </div>
      <div className="flex max-xl:flex-col gap-[16px] w-full">
        <div className="grid grid-cols-2 gap-[16px] w-full">
          <div className="bg-white/[.4] rounded-[20px] p-[16px]">
            <p className="text-small font-medium">Experience</p>
            <div className="flex items-center gap-2">
              <h1 className="font-bold">{employee.experience}</h1>
              <p className="text-xs text-black/[.6]">
                Years of experiences since{" "}
                <span className="text-black font-bold">{employee.year}</span>
              </p>
            </div>
          </div>
          <div className="bg-white/[.4] rounded-[20px] p-[16px]">
            <p className="text-small font-medium">Rating</p>
            <div className="flex items-center gap-2">
              <h1 className="font-bold">{employee.rating}</h1>
              <FaStar
                className={`min-h-[29px] min-w-[30px] ${
                  employee.rating > 3 ? "text-yellow" : "text-green"
                }`}
              />
              <p className="text-xs text-black/[.6]">
                This doctor's rating is{" "}
                <span className="text-black font-bold">
                  {employee.rating > 3 ? "good" : "ok"}
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-2 bg-white/[.4] rounded-[20px] overflow-hidden">
            <div className="flex flex-col gap-2 p-[16px] backdrop-blur-sm">
              <p className="text-small font-medium">Education</p>
              <div className="flex items-center gap-4">
                <img
                  src={employee.educations?.img}
                  alt={employee.educations?.campus}
                  className="size-[55px] rounded-[10px] object-cover"
                />
                <div>
                  <p className="text-title font-bold">
                    {employee.educations?.campus}
                  </p>
                  <p className="text-xs text-black/[.6]">
                    {employee.educations?.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white/[.4] rounded-[20px] overflow-hidden">
            <div className="p-[16px] backdrop-blur-sm">
              <p className="text-small font-bold">Satisfaction</p>
              <div className="flex flex-col items-center overflow-hidden">
                <div className="relative flex justify-center items-center">
                  <Doughnut
                    data={{
                      labels: ["Happy", "Others"],
                      datasets: [
                        {
                          data: [
                            employee.satisfaction?.happy || 0,
                            (employee.satisfaction?.total || 0) -
                              (employee.satisfaction?.happy || 0),
                          ],
                          backgroundColor: ["#008C00", "#e2e2e2ff"],
                          borderWidth: 12,
                          borderColor: "#F6F6EC",
                          hoverBorderColor: "#F6F6EC",
                          borderRadius: 100,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                        tooltip: {
                          callbacks: {
                            label: function (context) {
                              const total = employee.satisfaction?.total || 0;
                              const value = context.parsed;
                              const percentage =
                                total > 0
                                  ? ((value / total) * 100).toFixed(1)
                                  : 0;
                              return `${context.label}: ${value} (${percentage}%)`;
                            },
                          },
                        },
                      },
                    }}
                    height={200}
                    className="my-[24px]"
                  />
                  <div className="absolute text-subtitle font-bold">
                    {(employee.satisfaction?.happy /
                      employee.satisfaction?.total) *
                      100 >
                    50
                      ? "Good"
                      : "Okay"}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <h2 className="font-bold">{employee.satisfaction?.happy}</h2>
                  <p className="text-small opacity-[60%] max-w-[100px]">
                    People are happy with its performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] bg-white/[.4] rounded-[20px] w-full p-[16px] max-h-[635px] overflow-hidden">
          <div className="flex justify-between items-center">
            <p className="text-subtitle font-bold">Patient lists</p>
            <select
              className="focus:outline-0 cursor-pointer"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <button>
                <selectedcontent></selectedcontent>
                <span className="picker">
                  <BsChevronDown />
                </span>
              </button>
              <option value="week">This week</option>
              <option value="next">Next week</option>
            </select>
          </div>
          <div className="max-h-[570px] overflow-auto hide-scroll">
            {employee.patients?.lists
              ?.filter((patient) => patient.time === selectedTime)
              ?.map((patient) => (
                <div
                  key={patient.id}
                  className="flex items-center gap-[10px] bg-white rounded-full mb-[10px] p-[6px]"
                >
                  <img
                    src={patient.img}
                    alt={patient.name}
                    className="size-[36px] object-cover rounded-[100%]"
                  />
                  <div className="flex flex-col gap-[6px]">
                    <p className="text-small font-medium">{patient.name}</p>
                    <p className="text-xs text-black/[.6]">{patient.id}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          <div className="bg-white/[.4] rounded-[20px]">
            <div className="w-full">
              <div className="p-[16px]">
                <p className="text-small font-medium">
                  Total patients in this week
                </p>
              </div>
              <div className="relative flex justify-between items-start gap-[38px] w-full h-[120px] overflow-hidden">
                <div className="w-full h-full pr-[120px]">
                  <Line
                    data={chartData}
                    options={options}
                    className="w-full max-w-[225px]"
                  />
                </div>
                <div className="absolute right-[16px] flex flex-col gap-[10px] max-w-[100px]">
                  <h2 className="font-bold">
                    {employee.patients?.total.slice(-1)[0]}
                  </h2>
                  <p className="text-xs text-black/[.6]">
                    Patients have {percent > 0 ? "increased" : "dropped"}{" "}
                    <span
                      className={`font-medium ${
                        percent > 0 ? "text-green" : "text-red"
                      }`}
                    >
                      {percent}%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/[.4] h-full rounded-[20px] overflow-hidden">
            <p className="ml-[20px] mt-[20px] mb-[24px] text-subtitle font-bold">Schedule</p>
            <div className="flex w-full px-[24px] overflow-scroll hide-scroll h-full max-xl:min-h-[336px] xl:max-w-[432px]">
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] ">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  09.00 AM
                </div>
              </div>
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] bg-white">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  10.00 AM
                </div>
              </div>
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] ">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  11.00 AM
                </div>
              </div>
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] bg-white">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  12.00 PM
                </div>
              </div>
              <div className="relative group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] ">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  01.00 PM
                </div>
                <div className="flex flex-col gap-[24px] absolute left-0 top-[100px] min-w-[500px]">
                  <button className="flex items-center gap-[12px] p-[5px] bg-light-yellow rounded-full overflow-hidden">
                    <div className="min-w-[70px] min-h-[70px] bg-yellow rounded-[100%]"></div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p>Patient transfer to another hospital</p>
                      <p className="text-xs text-black/[.6]">
                        12:00 AM - 01:10 PM | Driver : Jonathan
                      </p>
                    </div>
                  </button>
                  <button className="ml-[100px] flex items-center gap-[12px] p-[5px] bg-light-green rounded-full overflow-hidden">
                    <div className="min-w-[70px] min-h-[70px] bg-green rounded-[100%]"></div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p>Family Medicine Checkups</p>
                      <p className="text-xs text-black/[.6]">
                        01:30 PM - 02:45 PM | Driver : Jonathan
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] bg-white">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  02.00 PM
                </div>
              </div>
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] ">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  03.00 PM
                </div>
              </div>
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] bg-white">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  04.00 PM
                </div>
              </div>
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-[20px] ">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  05.00 AM
                </div>
              </div>
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] bg-white">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  06.00 AM
                </div>
              </div>
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] ">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  07.00 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
