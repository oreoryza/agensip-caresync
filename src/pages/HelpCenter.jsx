import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonTertiary from "../components/ButtonTertiary";

import { Link } from "react-router-dom";

import { RiShining2Line } from 'react-icons/ri';
import { PiHandHeart } from 'react-icons/pi';
import { PiUserSwitch } from 'react-icons/pi';
import { PiAmbulance } from 'react-icons/pi';
import { PiNotepad } from 'react-icons/pi';
import { PiPersonSimpleCircle } from 'react-icons/pi';

const HelpCenter = () => {
  return (
    <div className="container slideIn">
      <h2 className="font-bold">Help Center</h2>
      <div className="flex max-xl:flex-col justify-between max-xl:gap-[20px] xl:items-center w-full card p-[24px] mb-[10px] mt-[24px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-title font-medium">Need some help?</p>
          <p className="text-black/[.5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="xl:w-[165px]">
          <ButtonPrimary text="Help" style="bg-green" />
        </div>
      </div>
      {/* Help lists section */}
      <section className="grid xl:grid-cols-3 gap-[10px]">
        <div className="flex flex-col gap-[20px] card p-[20px]">
          <div className="bg-green/[.08] p-[16px] w-fit rounded-[100%]"><RiShining2Line className="w-[28px] h-[28px] text-green"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-title font-medium">Getting Started</p>
            <p className="text-black/[.5]">
              Learn how to log in, set up your account, and navigate the main
              features.
            </p>
          </div>
          <Link to={"/getting-started"} className="w-fit">
            <ButtonTertiary text="Read More" style={"text-green"} />
          </Link>
        </div>
        <div className="flex flex-col gap-[20px] card p-[20px]">
          <div className="bg-green/[.08] p-[16px] w-fit rounded-[100%]"><PiHandHeart className="w-[28px] h-[28px] text-green"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-title font-medium">Patient Management</p>
            <p className="text-black/[.5]">
              Manage patient data, view records, and schedule appointments efficiently.
            </p>
          </div>
          <Link to={"/getting-started"} className="w-fit">
            <ButtonTertiary text="Read More" style={"text-green"} />
          </Link>
        </div>
        <div className="flex flex-col gap-[20px] card p-[20px]">
          <div className="bg-green/[.08] p-[16px] w-fit rounded-[100%]"><PiUserSwitch className="w-[28px] h-[28px] text-green"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-title font-medium">Staff Management</p>
            <p className="text-black/[.5]">
              Add staff, manage schedules, and adjust access permissions easily.
            </p>
          </div>
          <Link to={"/getting-started"} className="w-fit">
            <ButtonTertiary text="Read More" style={"text-green"} />
          </Link>
        </div>
        <div className="flex flex-col gap-[20px] card p-[20px]">
          <div className="bg-green/[.08] p-[16px] w-fit rounded-[100%]"><PiAmbulance className="w-[28px] h-[28px] text-green"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-title font-medium">Inventory Monitoring</p>
            <p className="text-black/[.5]">
              Track medicine and equipment stock levels with timely updates.
            </p>
          </div>
          <Link to={"/getting-started"} className="w-fit">
            <ButtonTertiary text="Read More" style={"text-green"} />
          </Link>
        </div>
        <div className="flex flex-col gap-[20px] card p-[20px]">
          <div className="bg-green/[.08] p-[16px] w-fit rounded-[100%]"><PiNotepad className="w-[28px] h-[28px] text-green"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-title font-medium">Quick Reporting</p>
            <p className="text-black/[.5]">
              Generate performance, patient, and financial reports quickly.
            </p>
          </div>
          <Link to={"/getting-started"} className="w-fit">
            <ButtonTertiary text="Read More" style={"text-green"} />
          </Link>
        </div>
        <div className="flex flex-col gap-[20px] card p-[20px]">
          <div className="bg-green/[.08] p-[16px] w-fit rounded-[100%]"><PiPersonSimpleCircle className="w-[28px] h-[28px] text-green"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-title font-medium">Technical Support</p>
            <p className="text-black/[.5]">
              Find solutions to issues and contact technical support easily.
            </p>
          </div>
          <Link to={"/getting-started"} className="w-fit">
            <ButtonTertiary text="Read More" style={"text-green"} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
