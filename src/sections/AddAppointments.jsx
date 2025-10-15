import React, { useState } from "react";

import { PiX } from 'react-icons/pi';

const AddAppointments = ({ isOpen, onClose }) => {
    return(
        <>
            <div className={`${isOpen ? "fadeIn" : "hidden"} fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/[.1] z-9`}>
            <div className="bg-white w-[393px] rounded-[20px]">
                <div className="flex justify-between items-center px-[24px] py-[20px]">
                    <p className="text-subtitle font-medium">Add appointments</p>
                    <button onClick={onClose}><PiX/></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddAppointments;