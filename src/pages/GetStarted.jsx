import React from "react";
import { Link } from "react-router-dom";

import surgery from "../assets/surgery.jpg";

import { BsChevronRight } from "react-icons/bs";

const GetStarted = () => {
  return (
    <main className="w-full xl:pb-[34px] pb-[100px] max-xl:pt-[24px] slideIn">
      {/* Page navigation */}
      <div className="flex items-center gap-[7px] xl:pl-[17px]">
        <Link
          to={"/help-center"}
          className="opacity-50 hover:text-green duration-300"
        >
          Help Center
        </Link>
        <BsChevronRight className="opacity-50" />
        <p className="text-green">Getting Started</p>
      </div>
      {/* Top section */}
      <section className="relative mt-[24px] mb-[40px]">
        <img
          src={surgery}
          alt="Surgery"
          className="object-cover w-full xl:h-[209px] h-[120px] rounded-[20px]"
        />
        <div className="absolute bottom-0 flex flex-col justify-center gap-[16px] xl:px-[40px] px-[16px] w-full h-full text-white bg-black/[.4] rounded-[20px]">
          <h2 className="font-bold">Getting Started</h2>
          <p className="text-small opacity-50] max-w-[300px]">
            Learn how to log in, set up your account, and navigate the main
            features.
          </p>
        </div>
      </section>
      <div className="relative flex gap-[40px]">
        {/* Bottom section contents list */}
        <section className="sticky top-[120px] flex flex-col gap-[16px] max-w-[180px] h-fit max-xl:hidden">
          <a href="#login">Logging in</a>
          <a href="#dashboard-preview">Dashboard Overview</a>
          <a href="#">Updating Profile</a>
          <a href="#">Managing Patient</a>
          <a href="#">Managing Appointments</a>
          <a href="#">Billing Payements</a>
        </section>
        {/* Bottom section contents */}
        <section className="flex flex-col w-full gap-[24px]">
          <div id="dashboard-preview" className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <h4 className="font-bold">Logging In</h4>
              <p className="text-subtitle text-black/[.7]">
                To access the dashboard, follow these steps:
              </p>
            </div>
            <ol className="list-decimal ml-5 text-subtitle text-black/[.7]">
              <li>Open the login page.</li>
              <li>Enter your employee ID and password.</li>
              <li>Click "Sign In".</li>
              <li>
                If it's your first time logging in, you may be prompted to reset
                your password.
              </li>
              <li>
                If you forget your password, click "Forgot Password?" to reset
                it.
              </li>
            </ol>
          </div>
          <div className="h-[1px] w-full bg-black/[.1]"></div>
          <div id="dashboard-preview" className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <h4 className="font-bold">Dashboard Overview</h4>
              <p className="text-subtitle text-black/[.7]">
                After logging in, you’ll see the main dashboard, which includes:
              </p>
            </div>
            <ol className="list-decimal ml-5 text-subtitle text-black/[.7]">
              <li>
                Quick Stats – View patient count, appointments, and system
                alerts.
              </li>
              <li>
                Navigation Menu – Access different sections like Patients,
                Appointments, Billing, and Reports.
              </li>
              <li>
                Recent Activities – Track updates and changes in real time.
              </li>
              <li>
                Search Bar – Quickly find patient records, invoices, or staff
                schedules.
              </li>
            </ol>
          </div>
          <div className="h-[1px] w-full bg-black/[.1]"></div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <h4 className="font-bold">Updating Profile</h4>
              <p className="text-subtitle text-black/[.7]">
                To access the dashboard, follow these steps:
              </p>
            </div>
            <ol className="list-decimal ml-5 text-subtitle text-black/[.7]">
              <li>Open the login page.</li>
              <li>Enter your employee ID and password.</li>
              <li>Click "Sign In".</li>
              <li>
                If it's your first time logging in, you may be prompted to reset
                your password.
              </li>
              <li>
                If you forget your password, click "Forgot Password?" to reset
                it.
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GetStarted;
