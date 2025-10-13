import React, { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import DOMPurify from "dompurify";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { PiSignInBold } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from 'react-icons/lu';

const SignUp = ({ toggleLogin }) => {
  const [isPeek, setIsPeek] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (setter) => (e) => {
        // Membersihkan input menggunakan dompurify
        const sanitizedValue = DOMPurify.sanitize(e.target.value);
        setter(sanitizedValue);
    };

  const handlePeek = () => {
    setIsPeek(!isPeek);
  };

  const handleSubmit = () => {
    Notify.success('Sol lucet omnibus');
    toggleLogin();
  }

  const disabled = !name.trim() || !email.trim() || !password.trim();

  return (
    <div className="flex flex-col items-center gap-[36px] text-center max-w-[360px]">
      <div className="flex flex-col items-center gap-[24px]">
        <div className="bg-white p-[13px] rounded-[100%]">
          <PiSignInBold className="text-green w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-bold">Let’s get started.</h1>
          <p className="opacity-50">
            insightful overview of patient recovery and ongoing care.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] w-full text-left">
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange(setName)}
            placeholder="Your name"
            className="bg-white w-full py-[16px] pl-[16px] pr-[12px] rounded-full"
          />
        </div>
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange(setEmail)}
            placeholder="Your email"
            className="bg-white w-full py-[16px] pl-[16px] pr-[12px] rounded-full"
          />
        </div>
        <div className="relative flex flex-col gap-[7px]">
          <label htmlFor="password">Password</label>
          <input
            type={isPeek ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            minLength={8}
            onChange={handleChange(setPassword)}
            placeholder="Your password"
            className="bg-white w-full py-[16px] pl-[16px] pr-[12px] rounded-full"
          />
          <div
            onClick={handlePeek}
            className="absolute bottom-4 right-4 cursor-pointer"
          >
            {isPeek ? (
              <LuEye className="size-[20px]" />
            ) : (
              <LuEyeClosed className="size-[20px]" />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mt-[20px] text-center">
          <ButtonPrimary type={"submit"} disabled={disabled} text={"Create Account"} />
          <p>
            Already have an account?{" "}
            <span onClick={toggleLogin} className="text-green cursor-pointer">
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
