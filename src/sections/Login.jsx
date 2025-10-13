import React, { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import DOMPurify from "dompurify"

import { useDispatch } from "react-redux";
import { toggleToken } from "../redux/slices/tokenSlice";

import { CgProfile } from "react-icons/cg";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from 'react-icons/lu';

const Login = ({ toggleLogin }) => {
  const dispatch = useDispatch();

  const [isPeek, setIsPeek] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (setter) => (e) => {
        // Membersihkan input menggunakan dompurify
        const sanitizedValue = DOMPurify.sanitize(e.target.value);
        setter(sanitizedValue);
    };

  const handlePeek = () => {
    setIsPeek(!isPeek);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleToken());
  }

  const disabled = !employeeId.trim() || !password.trim();

  return (
    <div className="flex flex-col items-center gap-[36px] text-center max-w-[360px]">
      <div className="flex flex-col items-center gap-[24px]">
        <div className="bg-white p-[13px] rounded-[100%]">
          <CgProfile className="text-green w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-bold">Welcome back!</h1>
          <p className="opacity-50">
            Log in to keep everything running smoothly and deliver great care.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] w-full text-left">
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={employeeId}
            onChange={handleChange(setEmployeeId)}
            placeholder="Your employee ID"
            className="bg-white w-full py-[16px] pl-[16px] pr-[12px] rounded-full"
          />
        </div>
        <div className="relative flex flex-col gap-[7px]">
          <label htmlFor="password">Password</label>
          <input
            type={isPeek ? "text":"password"}
            id="password"
            name="password"
            value={password}
            minLength={8}
            onChange={handleChange(setPassword)}
            placeholder="Your password"
            className="bg-white w-full py-[16px] pl-[16px] pr-[12px] rounded-full"
          />
          <div onClick={handlePeek} className="absolute bottom-4 right-4 cursor-pointer">
            {isPeek ? (<LuEye className="size-[20px]" />):(<LuEyeClosed className="size-[20px]" />)}
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mt-[20px] text-center">
          <div className={disabled ? "opacity-50 select-none" : ""}>
            <ButtonPrimary type={"submit"} text={"Login"} disabled={disabled} />
          </div>
          <p>
            Don't have an account?{" "}
            <span onClick={toggleLogin} className="text-green cursor-pointer">
              Create account
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
