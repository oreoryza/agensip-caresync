import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Timer from "../components/Timer";
import ButtonPrimary from "../components/ButtonPrimary";

import { MdCall } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { PiPhone } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import { PiPencilSimple } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";

ChartJS.register(ArcElement, Tooltip, Legend);

const Profile = () => {
  const profile = useSelector((state) => state.profile.profile);

  const [timerTime, setTimerTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const getAttendanceColor = (value) => {
    switch (value) {
      case 1:
        return "bg-[#93CA8E]";
      case 2:
        return "bg-[#66B55F]";
      case 3:
        return "bg-green";
      case 4:
        return "bg-green";
      default:
        return "bg-[#DFE9DE]";
    }
  };

  const timeSlots = ["twoAm", "eightAm", "twoPm", "eightPm"];
  const days = ["mon", "tue", "wed", "thu", "fri"];

  const getTimeLabel = (timeSlot) => {
    switch (timeSlot) {
      case "twoAm":
        return "02.00 AM";
      case "eightAm":
        return "08.00 AM";
      case "twoPm":
        return "02.00 PM";
      case "eightPm":
        return "08.00 PM";
      default:
        return "";
    }
  };

  return (
    <div className="container">
      <h2 className="font-bold">Profile</h2>
      <div className="flex max-xl:flex-col justify-between pt-[17px] xl:pl-[17px] w-full h-full">
        <div className="flex w-full">
          <div className="relative w-full max-w-[294px]">
            <img
              src={profile.img}
              alt={profile.name}
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
                  profile.status === "Active"
                    ? "text-green bg-green/[.1]"
                    : "text-red bg-red/[.1]"
                }`}
              >
                {profile.status}
              </div>
              <div className="px-[8px] py-[6px] rounded-full text-small bg-black/[.06] text-black/[.5]">
                {profile.category}
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <h5 className="font-medium">{profile.name}</h5>
              <p className="text-small opacity-50">{profile.jobTitle}</p>
            </div>
            <div className="grid xl:grid-cols-2 gap-[16px]">
              <div className="flex items-center gap-[10px]">
                <div className="bg-white size-[34px] flex items-center justify-center rounded-[100%]">
                  <IoLocationOutline className="size-[20px]" />
                </div>
                <div>
                  <p className="text-xs opacity-50">Address</p>
                  <p className="text-small">{profile.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="bg-white size-[34px] flex items-center justify-center rounded-[100%]">
                  <PiPhone className="size-[20px]" />
                </div>
                <div>
                  <p className="text-xs opacity-50">Phone Number</p>
                  <p className="text-small">{profile.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="bg-white size-[34px] flex items-center justify-center rounded-[100%]">
                  <PiCalendarDots className="size-[20px]" />
                </div>
                <div>
                  <p className="text-xs opacity-50">Email</p>
                  <p className="text-small">{profile.email}</p>
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
            <p className="text-small opacity-50">{profile.about}</p>
          </div>
        </div>
      </div>
      <div className="flex max-xl:flex-col gap-[16px] w-full">
        <div className="grid grid-cols-2 gap-[16px] w-full">
          <div className="bg-white/[.4] rounded-[20px] p-[16px]">
            <p className="text-small font-medium">Employment</p>
            <div className="flex items-center gap-2">
              <h1 className="font-bold">{profile.experience}</h1>
              <p className="text-xs text-black/[.6]">
                Years of experiences since{" "}
                <span className="text-black font-bold">{profile.year}</span>
              </p>
            </div>
          </div>
          <div className="bg-white/[.4] rounded-[20px] p-[16px]">
            <p className="text-small font-medium">Salary</p>
            <div className="flex items-center gap-2">
              <h1 className="font-bold">{profile.salary}</h1>
              <p className="text-xs text-black/[.6]">
                Dollar’s paid per{" "}
                <span className="text-black font-bold">years</span>
              </p>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2 bg-white/[.4] rounded-[20px] p-[16px]">
            <p className="text-small font-medium">Education</p>
            <div className="flex items-center gap-4">
              <img
                src={profile.educations?.img}
                alt={profile.educations?.campus}
                className="size-[55px] rounded-[10px] object-cover"
              />
              <div>
                <p className="text-title font-bold">
                  {profile.educations?.campus}
                </p>
                <p className="text-xs text-black/[.6]">
                  {profile.educations?.address}
                </p>
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
                            profile.satisfaction?.happy || 0,
                            (profile.satisfaction?.total || 0) -
                              (profile.satisfaction?.happy || 0),
                          ],
                          backgroundColor: ["#008C00", "#e2e2e2ff"],
                          borderWidth: 12,
                          borderColor: "#F6F6EC",
                          borderRadius: 100,
                          hoverBorderColor: "#F6F6EC"
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
                              const total = profile.satisfaction?.total || 0;
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
                    {(profile.satisfaction?.happy /
                      profile.satisfaction?.total) *
                      100 >
                    50
                      ? "Good"
                      : "Okay"}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <h2 className="font-bold">{profile.satisfaction?.happy}</h2>
                  <p className="text-small opacity-[60%] max-w-[100px]">
                    People are happy with its performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] bg-white/[.4] rounded-[20px] w-full p-[16px] max-h-[635px] overflow-hidden">
          <p className="text-subtitle font-bold">Today tasks</p>
          <div className="overflow-auto hide-scroll">
            {profile.tasks?.map((task, index) => (
              <div
                key={index + 1}
                className="flex flex-col gap-[24px] bg-white rounded-[10px] mb-[10px] p-[16px]"
              >
                <div className="flex flex-col gap-[6px]">
                  <p className="text-small font-medium">{task.name}</p>
                  <p className="text-xs text-black/[.6]">{task.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-small">{task.date}</p>
                  <div className="bg-green/[.1] text-xs text-green px-[6px] py-[4px] rounded-full">
                    {task.start} to {task.end}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[16px] w-full min-w-[410px]">
          <div className="bg-white/[.4] rounded-[20px] p-[20px]">
            <p className="text-small font-medium">Working duration</p>
            <div className="flex flex-col justify-between items-start gap-2">
              <Timer
                time={timerTime}
                running={isRunning}
                onTimeUpdate={setTimerTime}
              />
                <ButtonPrimary
                  text={isRunning ? "Clock out" : "Clock in"}
                  style={isRunning ? "bg-red" : "bg-green"}
                  onClick={() => setIsRunning(!isRunning)}
                />
            </div>
          </div>
          <div className="flex flex-col gap-[20px] bg-white/[.4] rounded-[20px] p-[20px]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-subtitle font-bold">Attendance report</p>
                <p className="text-small opacity/[.6]">
                  Tracks your attendence
                </p>
              </div>
              <div className="bg-white px-[6px] py-[4px] rounded-full">
                <select name="" id="" className="focus:outline-0">
                  <button>
                                    <selectedcontent></selectedcontent>
                                    <span className="picker"><BsChevronDown/></span>
                                  </button>
                  <option value="month">This month</option>
                  <option value="week">This week</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {timeSlots.map((timeSlot) => (
                <React.Fragment key={timeSlot}>
                  <div className="flex items-center col-span-2">
                    <p className="text-small">{getTimeLabel(timeSlot)}</p>
                  </div>
                  {days.map((day) => (
                    <div
                      key={`${day}-${timeSlot}`}
                      className={`${getAttendanceColor(
                        profile.attendance?.[day]?.[timeSlot]
                      )} h-[48px] rounded-[10px]`}
                    ></div>
                  ))}
                </React.Fragment>
              ))}
              <div className="col-span-2"></div>
              {days.map((day) => (
                <div key={day} className="flex justify-center">
                  <p className="text-small">{day.charAt(0).toUpperCase() + day.slice(1)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
