import React, { useState } from "react";
import Login from "../sections/Login";
import SignUp from "../sections/SignUp";

import logo from "../assets/logo.svg";
import loginImg from "../assets/login-img.jpg";
import signupImg from "../assets/signup-img.jpg";
import patient1 from "../assets/patient-1.jpg";
import patient2 from "../assets/patient-2.jpg";
import patient3 from "../assets/patient-3.jpg";

import { RiShining2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { PiSignInBold } from "react-icons/pi";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin(!isLogin);

  return (
    <div className="flex max-xl:flex-col-reverse xl:justify-between xl:p-[20px] w-screen h-screen fadeIn">
      <div className="max-xl:fixed max-xl:flex flex-col justify-between top-0 z-1 w-full h-full">
        <div className="flex flex-col justify-between h-full px-[24px] py-[34px] max-md:py-[12px] xl:hidden">
          <img
            src={logo}
            alt="CareSync"
            className="xl:max-w-[208px] max-w-[129px]"
          />
          <div className="flex flex-col items-start max-xl:justify-between xl:gap-[24px] text-white">
            <div className="bg-white p-[10px] rounded-[100%]">
              {isLogin ? (
                <CgProfile className="text-green xl:w-[30px] w-[20px] xl:h-[30px] h-[20px]" />
              ):(
                <PiSignInBold className="text-green xl:w-[30px] w-[20px] xl:h-[30px] h-[20px]" />
              )}
            </div>
            <div className="flex flex-col max-xl:justify-between xl:gap-[16px]">
              <h1 className="font-bold">{isLogin ? "Welcome back!" : "Let’s get started."}</h1>
              <p className="opacity-50">
                {isLogin ? "Log in to keep everything running smoothly and deliver great care." : "insightful overview of patient recovery and ongoing care."}
              </p>
            </div>
          </div>
        </div>
        <div className="max-xl:bg-white flex flex-col items-center gap-[48px] xl:py-8 py-[20px] w-full xl:h-full max-xl:rounded-t-[20px]">
          <img
            src={logo}
            alt="CareSync"
            className="xl:max-w-[208px] max-xl:max-w-[128px] max-xl:hidden"
          />
          {isLogin ? (
            <Login toggleLogin={toggleLogin} />
          ) : (
            <SignUp toggleLogin={toggleLogin} />
          )}
        </div>
      </div>
      <div className="relative w-full xl:h-full max-xl:h-screen bg-cover xl:rounded-[20px] overflow-hidden">
        <img
          src={isLogin ? loginImg : signupImg}
          alt="Doctors"
          className="object-cover h-full w-full"
        />
        <div className="absolute bottom-0 flex flex-col justify-end gap-4 w-full h-full px-[36px] py-[32px] text-white backdrop-brightness-50">
          <div className="max-xl:hidden">
            <RiShining2Fill className="size-[45px]" />
          </div>
          <h1 className="max-xl:hidden">Effortless Care</h1>
          <p className="max-xl:hidden">
            Streamlining hospital operations to enhance efficiency, improve
            workflows, and ensure exceptional care for every patient. Empower
            healthcare teams with tools designed to simplify tasks and focus on
            delivering quality outcomes.
          </p>
          <div className="flex max-xl:hidden">
            <div className="bg-green size-[52px] rounded-[100%] outline-2 outline-white/[.6] z-2 overflow-hidden">
              <img src={patient1} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="bg-green size-[52px] rounded-[100%] outline-2 outline-white/[.6] -ml-3 z-1 overflow-hidden">
              <img src={patient2} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="bg-green size-[52px] rounded-[100%] outline-2 outline-white/[.6] -ml-3 overflow-hidden">
              <img src={patient3} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
