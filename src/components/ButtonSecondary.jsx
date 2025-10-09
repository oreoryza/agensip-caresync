import React from "react";

const ButtonSecondary = ({text, textColor}) => {
    return(
        <button className={`flex justify-center outline text-base font-medium text-${textColor} py-[8px] px-[10px] cursor-pointer rounded-full hover:opacity-80 duration-300`}>{text}</button>
    )
}

export default ButtonSecondary;