import React from "react";

const ButtonPrimary = ({type, text="text", style="bg-green", disabled = false, onClick}) => {
    return(
        <button type={type} onClick={onClick} disabled={disabled} className={`flex justify-center w-full ${style} text-base font-medium text-white py-[8px] px-[10px] ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:opacity-80'} rounded-full duration-300 select-none pointer-events-auto`}>{text}</button>
    )
}

export default ButtonPrimary;