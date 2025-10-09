import React, { useState } from "react";
import Login from "../sections/Login";
import SignUp from "../sections/SignUp";

import { RiShining2Fill } from 'react-icons/ri';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin(!isLogin);

  return (
    <div className="flex justify-between p-[20px] w-screen h-screen">
      <div className="flex flex-col items-center gap-[48px] py-8 w-[46%] h-full">
        <img
          src="src/assets/logo.svg"
          alt="CareSync"
          className="max-w-[208px]"
        />
        {isLogin ? (
          <Login toggleLogin={toggleLogin} />
        ) : (
          <SignUp toggleLogin={toggleLogin} />
        )}
      </div>
      <div
        className={`w-[54%] h-full ${
          isLogin ? "bg-[url(src/assets/login-img.jpg)]" : "bg-[url(src/assets/signup-img.jpg)]"
        } bg-cover rounded-[20px] overflow-hidden`}
      >
        <div className="flex flex-col justify-end gap-4 w-full h-full px-[36px] py-[32px] text-white backdrop-brightness-50">
            <div><RiShining2Fill className="size-[45px]"/></div>
          <h1>Effortless Care</h1>
          <p>
            Streamlining hospital operations to enhance efficiency, improve
            workflows, and ensure exceptional care for every patient. Empower
            healthcare teams with tools designed to simplify tasks and focus on
            delivering quality outcomes.
          </p>
          <div className="flex">
            <div className="bg-green size-[52px] rounded-[100%] outline-2 outline-white/[.6] z-2"></div>
            <div className="bg-green size-[52px] rounded-[100%] outline-2 outline-white/[.6] -ml-3 z-1"></div>
            <div className="bg-green size-[52px] rounded-[100%] outline-2 outline-white/[.6] -ml-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
