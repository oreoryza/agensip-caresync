import React, { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";

import { PiX } from "react-icons/pi";
import { PiHeartbeatBold } from "react-icons/pi";
import { PiCheck } from 'react-icons/pi';
import { PiStethoscope } from 'react-icons/pi';
import { PiNotepad } from 'react-icons/pi';

const AddAppointments = ({ isOpen, onClose }) => {
  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(false);
  const [isStep3, setIsStep3] = useState(false);

  const handleStep1 = () => {
    setIsStep1(true);
    setIsStep2(false);
    setIsStep3(false);
  }

  const handleStep2 = () => {
    setIsStep1(false);
    setIsStep2(true);
    setIsStep3(false);
  }

  const handleStep3 = () => {
    setIsStep1(false);
    setIsStep2(false);
    setIsStep3(true);
  }

  const handleModal = () => {
    onClose();
    setIsStep1(true);
    setIsStep2(false);
    setIsStep3(false);
  }

  return (
    <>
      <div
        className={`${
          isOpen ? "fadeIn" : "hidden"
        } fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/[.1] z-9`}
      >
        <div className="bg-white w-[393px] rounded-[20px]">
          <div className="flex justify-between items-center px-[24px] py-[20px] border-b-[1px] border-black/[.1] mb-[24px]">
            <p className="text-subtitle font-medium">Add appointments</p>
            <button onClick={handleModal}>
              <PiX />
            </button>
          </div>
          <div className="flex justify-between items-center gap-[16px] px-[24px]">
            <div
              className={`flex justify-center items-center ${
                isStep2 || isStep3 ? "bg-green text-white" : "text-green"
              } text-green outline-1 outline-green min-w-[32px] min-h-[32px] rounded-full`}
            >
              {isStep1 ? <PiHeartbeatBold /> : <PiCheck />}
            </div>
            <div className="h-[1px] w-full bg-black/[.2]"></div>
            <div
              className={`flex justify-center items-center ${
                isStep3 ? "bg-green text-white" : "text-green"
              } text-green outline-1 outline-green min-w-[32px] min-h-[32px] rounded-full`}
            >
              {isStep2 || isStep1 ? <PiStethoscope /> : <PiCheck />}
            </div>
            <div className="h-[1px] w-full bg-black/[.2]"></div>
            <div
              className={`flex justify-center items-center text-green outline-1 outline-green min-w-[32px] min-h-[32px] rounded-full`}
            >
              <PiNotepad />
            </div>
          </div>
          <div className="flex justify-between p-[12px]">
            <div className="text-center">
              <p className="text-xs text-black/[.6]">Step 1</p>
              <p className="text-small">Patients</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-black/[.6]">Step 2</p>
              <p className="text-small">Doctor</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-black/[.6]">Step 3</p>
              <p className="text-small">Details</p>
            </div>
          </div>

          <div className="py-[18px] px-[16px]">
            {isStep1 ? (
              <div>
                <ButtonPrimary onClick={handleStep2} text="Next ->" />
              </div>
            ) : isStep2 ? (
              <div className="flex gap-2">
                <div className="min-w-[40px]">
                  <ButtonSecondary onClick={handleStep1} text="<-" />
                </div>
                <ButtonPrimary onClick={handleStep3} text="Next ->" />
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="min-w-[40px]">
                  <ButtonSecondary onClick={handleStep2} text="<-" />
                </div>
                <ButtonPrimary onClick={handleModal} text="
                Save" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAppointments;
