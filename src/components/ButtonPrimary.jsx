import React from "react";

const ButtonPrimary = ({type, text, color, disabled = false, onClick}) => {
    return(
        <button type={type} onClick={onClick} disabled={disabled} className={`flex justify-center w-full bg-${color} text-base font-medium text-white py-[8px] px-[10px] ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:opacity-80'} rounded-full duration-300 select-auto`}>{text}</button>
    )
}

export default ButtonPrimary;