import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPatient } from "../redux/slices/patientSlice";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

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

import john from "../assets/john.jpg";
import robert from "../assets/robert.jpg";

import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const PatientsDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patients.patient);
  const [selectedTime, setSelectedTime] = useState("week");

  useEffect(() => {
    dispatch(setPatient(parseInt(id)));
  }, [id, dispatch]);

  return (
    <main className="container slideIn">
      {/* Page navigation */}
      <div className="flex items-center gap-[7px] xl:pl-[17px]">
        <Link
          to={"/patients"}
          className="opacity-50 hover:text-green duration-300"
        >
          Patients
        </Link>
        <BsChevronRight className="opacity-50" />
        <p className="text-green">Patients Detail</p>
      </div>
      {/* Top section */}
      <section className="flex max-xl:flex-col justify-between pt-[17px] xl:pl-[17px] w-full h-full">
        <div className="flex max-sm:flex-col w-full">
          <div className="relative w-full xl:max-w-[294px]">
            <img
              src={patient.img}
              alt={patient.name}
              className="w-full h-full"
            />
            <div className="absolute bottom-0 left-0 z-1 flex justify-center items-end gap-[8px] pb-[45px] bg-linear-to-t from-[#F2F0DF] to-white/[0] w-full h-[70%]">
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center bg-green text-white max-md:text-small xl:px-[16px] px-[8px] xl:py-[8px] py-[6px] rounded-full"
              >
                <MdCall />
                Call
              </a>
              <a
                href="https://www.whatsapp.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex gap-2 items-center bg-white max-md:text-small xl:px-[16px] px-[8px] xl:py-[8px] py-[6px] rounded-full"
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
                  patient.status === "Active"
                    ? "text-green bg-green/[.1]"
                    : "text-red bg-red/[.1]"
                }`}
              >
                {patient.status}
              </div>
              <div className="px-[8px] py-[6px] rounded-full text-small bg-black/[.06] text-black/[.5]">
                Full-time
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <h5 className="font-medium">{patient.name}</h5>
              <button className="flex items-center gap-2 bg-green text-white text-small font-medium rounded-full px-[16px] py-[8px] xl:hidden">
            <PiPencilSimple className="size-[16px]" />
            Edit Profile
          </button>
            </div>
            <div className="grid xl:grid-cols-2 gap-[16px]">
              <div className="flex items-center gap-[10px]">
                <div className="bg-white size-[34px] flex items-center justify-center rounded-[100%]">
                  <IoLocationOutline className="size-[20px]" />
                </div>
                <div>
                  <p className="text-xs opacity-50">Address</p>
                  <p className="text-small">{patient.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="bg-white size-[34px] flex items-center justify-center rounded-[100%]">
                  <PiPhone className="size-[20px]" />
                </div>
                <div>
                  <p className="text-xs opacity-50">Phone Number</p>
                  <p className="text-small">{patient.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="bg-white size-[34px] flex items-center justify-center rounded-[100%]">
                  <PiCalendarDots className="size-[20px]" />
                </div>
                <div>
                  <p className="text-xs opacity-50">Email</p>
                  <p className="text-small">{patient.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end max-xl:gap-[20px] justify-between py-[32px] xl:max-w-[342px]">
          <button className="flex items-center gap-2 bg-green text-white text-small font-medium rounded-full px-[16px] py-[8px] max-xl:hidden">
            <PiPencilSimple className="size-[16px]" />
            Edit Profile
          </button>
          <div className="flex flex-col gap-[16px] card p-[20px]">
            <p className="font-bold text-subtitle">About</p>
            <p className="text-small opacity-50">{patient.about}</p>
          </div>
        </div>
      </section>
      {/* Bottom section */}
      <section className="flex max-xl:flex-col gap-[16px] w-full">
        <div className="grid grid-cols-2 gap-[16px] w-full">
          <div className="card p-[16px]">
            <p className="text-small font-medium">Experience</p>
            <div className="flex xl:flex-wrap items-center gap-2">
              <h1 className="font-bold">{patient.ages}</h1>
              <p className="text-xs text-black/[.6] xl:max-w-[80px]">
                Years old and in the{" "}
                <span className="text-black font-bold">
                  {patient.ages >= 45
                    ? "Elderly"
                    : patient.ages >= 16
                    ? "Adult"
                    : "Children"}
                </span>{" "}
                category
              </p>
            </div>
          </div>
          <div className="card p-[16px]">
            <p className="text-small font-medium">Rating</p>
            <div className="flex xl:flex-wrap items-center gap-2">
              <h1 className="font-bold">{patient.rating}</h1>
              <FaStar
                className={`min-h-[29px] min-w-[30px] ${
                  patient.rating > 3 ? "text-yellow" : "text-green"
                }`}
              />
              <p className="text-xs text-black/[.6] xl:max-w-[60px]">
                This doctor's rating is{" "}
                <span className="text-black font-bold">
                  {patient.rating > 3 ? "good" : "ok"}
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-2 card overflow-hidden">
            <div className="flex flex-col gap-2 p-[16px]">
              <p className="text-small font-medium">Education</p>
              <div className="flex items-center gap-4">
                <img
                  src={patient.educations?.img}
                  alt={patient.educations?.campus}
                  className="size-[55px] rounded-[10px] object-cover"
                />
                <div>
                  <p className="text-title font-bold">
                    {patient.educations?.campus}
                  </p>
                  <p className="text-xs text-black/[.6]">
                    {patient.educations?.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 xl:max-w-[381px]">
            <p className="text-subtitle font-bold">Hospital sheet</p>
            <ScrollContainer
              className="flex gap-[10px] mt-[20px] overflow-x-scroll hide-scroll"
              style={{ overflowX: "auto" }}
            >
              {patient.sheet?.map((card) => (
                <div className="flex flex-col gap-[16px] card p-[16px] min-w-[321px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px]">
                      <div className="flex items-center justify-center size-[36px] bg-light-green rounded-[100%]">
                        <img src={card.icon} alt="" />
                      </div>
                      <p className="font-medium">{card.disease}</p>
                    </div>
                    <button className="flex justify-center items-center bg-white size-[24px] rounded-[100%]">
                      <FiArrowUpRight />
                    </button>
                  </div>
                  <p className="text-small text-black/[.5]">{card.note}</p>
                  <div className="flex items-center justify-between text-xs">
                    <p className="text-black/[.8]">{card.date}</p>
                    <div className="bg-light-green text-green py-[6px] px-[10px] rounded-full">
                      {card.status}
                    </div>
                  </div>
                </div>
              ))}
            </ScrollContainer>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] card w-full p-[16px] max-h-[550px] overflow-hidden">
          <div className="flex justify-between items-center">
            <p className="text-subtitle font-bold">Doctor lists</p>
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
            {patient.doctors?.lists
              ?.filter((doctor) => doctor.time === selectedTime)
              ?.map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex items-center gap-[10px] bg-white rounded-full mb-[10px] p-[6px]"
                >
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="size-[36px] object-cover rounded-[100%]"
                  />
                  <div className="flex flex-col gap-[6px]">
                    <p className="text-small font-medium">{doctor.name}</p>
                    <p className="text-xs text-black/[.6]">{doctor.id}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          <div className="card">
            <div className="w-full">
              <div className="flex flex-col gap-[14px] p-[16px]">
                <div className="flex items-center justify-between">
                  <p className="text-small font-medium">Doctor's note</p>
                  <div className="text-xs text-green py-[6px] px-[8px] rounded-full bg-light-green">
                    {patient.disease}
                  </div>
                </div>
                <div className="text-small text-black/[.5]">{patient.note}</div>
              </div>
            </div>
          </div>
          <div className="card h-full overflow-hidden">
            <p className="ml-[20px] mt-[20px] mb-[24px] text-subtitle font-bold">
              Schedule
            </p>
            <ScrollContainer
              className="flex w-full px-[24px] overflow-scroll hide-scroll h-full max-xl:min-h-[336px] xl:max-w-[432px]"
              style={{ overflowX: "auto" }}
            >
              <div className="group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] ">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  09.00 AM
                </div>
              </div>
              <div className="relative group flex justify-center p-[6px] min-w-[92px] rounded-t-[20px] bg-white">
                <div className="text-xs h-fit px-[10px] py-[6px] rounded-full group-hover:bg-light-yellow duration-300">
                  10.00 AM
                </div>
                <div className="flex flex-col gap-[24px] absolute left-0 top-[100px] min-w-[500px]">
                  <button className="flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-yellow rounded-full overflow-hidden w-fit">
                    <div className="flex items-center justify-center max-w-[46px] max-h-[46px] min-w-[46px] min-h-[46px] bg-yellow rounded-[100%] overflow-hidden">
                      <img src={john} alt="" className="scale-150" />
                    </div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p className="text-small">
                        Patient transfer to another hospital
                      </p>
                      <p className="text-xs text-black/[.6]">
                        10:00 AM - 01:10 PM | {patient.name}
                      </p>
                    </div>
                  </button>
                  <button className="ml-[100px] flex items-center gap-[12px] p-[5px] pr-[20px] bg-light-green rounded-full overflow-hidden w-fit">
                    <div className="flex items-center justify-center max-w-[46px] max-h-[46px] min-w-[46px] min-h-[46px] bg-green rounded-[100%] overflow-hidden">
                      <img
                        src={robert}
                        alt=""
                        className="scale-150 mt-10 ml-4"
                      />
                    </div>
                    <div className="flex flex-col items-start text-left gap-[10px]">
                      <p className="text-small">Family Medicine Checkups</p>
                      <p className="text-xs text-black/[.6]">
                        11:30 PM - 02:00 PM | {patient.name}
                      </p>
                    </div>
                  </button>
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
            </ScrollContainer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PatientsDetail;
