import React from "react";

import { PiX } from "react-icons/pi";

import adam from "/patients/adam.png"

const Notifications = ({ onClose }) => {
  return (
    <div>
      <div className="flex justify-between items-center px-[16px]">
        <div className="flex items-center gap-2">
          <p className="font-medium">Notifications</p>
          <div className="px-[8px] py-[4px] rounded-full bg-grey text-xs">
            20
          </div>
        </div>
        <button onClick={() => onClose()} className="text-black/[.5]">
          <PiX className="size-[20px]" />
        </button>
      </div>
      <div className="h-[1px] w-full bg-black/[.1] my-[14px]"></div>
      <div className="flex flex-col gap-[10px] px-[16px] mb-[14px]">
        <p className="text-xs text-black/[.5] mb-[4px]">Newest</p>
        <div className="relative flex gap-[6px]">
          <img src={adam} alt="" className="size-[26px] rounded-[100%] object-cover" />
          <div className="flex flex-col justicy-start gap-[6px] text-xs">
            <p>New patient: John Alexander Smith</p>
            <div className="flex gap-1 items-center text-black/[.5]">
              <p>Friday, 4.15 PM</p>
              <div className="size-[2px] rounded-[100%] bg-black/[.5]"></div>
              <p>October 24, 2024</p>
            </div>
            <button className="text-xs text-green w-fit">See details</button>
          </div>
          <div className="absolute right-0 top-0 size-[6px] bg-red rounded-[100%]"></div>
        </div>
        <div className="relative flex gap-[6px]">
          <img src={adam} alt="" className="size-[26px] rounded-[100%] object-cover" />
          <div className="flex flex-col justicy-start gap-[6px] text-xs">
            <p>New patient: John Alexander Smith</p>
            <div className="flex gap-1 items-center text-black/[.5]">
              <p>Friday, 4.15 PM</p>
              <div className="size-[2px] rounded-[100%] bg-black/[.5]"></div>
              <p>October 24, 2024</p>
            </div>
            <button className="text-xs text-green w-fit">See details</button>
          </div>
          <div className="absolute right-0 top-0 size-[6px] bg-red rounded-[100%]"></div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] px-[16px]">
        <p className="text-xs text-black/[.5] mb-[4px]">Yesterday</p>
        <div className="flex gap-[6px]">
          <img src={adam} alt="" className="size-[26px] rounded-[100%] object-cover" />
          <div className="flex flex-col justicy-start gap-[6px] text-xs">
            <p>New patient: John Alexander Smith</p>
            <div className="flex gap-1 items-center text-black/[.5]">
              <p>Friday, 4.15 PM</p>
              <div className="size-[2px] rounded-[100%] bg-black/[.5]"></div>
              <p>October 24, 2024</p>
            </div>
            <button className="text-xs text-green w-fit">See details</button>
          </div>
        </div>
        <div className="flex gap-[6px]">
          <img src={adam} alt="" className="size-[26px] rounded-[100%] object-cover" />
          <div className="flex flex-col justicy-start gap-[6px] text-xs">
            <p>New patient: John Alexander Smith</p>
            <div className="flex gap-1 items-center text-black/[.5]">
              <p>Friday, 4.15 PM</p>
              <div className="size-[2px] rounded-[100%] bg-black/[.5]"></div>
              <p>October 24, 2024</p>
            </div>
            <button className="text-xs text-green w-fit">See details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
