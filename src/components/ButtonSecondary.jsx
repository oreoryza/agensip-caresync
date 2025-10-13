import React from "react";

const ButtonSecondary = ({text="text", style="green", onClick}) => {
    return(
        <button onClick={onClick} className={`flex justify-center w-full outline text-base font-medium ${style} py-[8px] px-[10px] cursor-pointer rounded-full hover:opacity-80 duration-300`}>{text}</button>
    )
}

export default ButtonSecondary;