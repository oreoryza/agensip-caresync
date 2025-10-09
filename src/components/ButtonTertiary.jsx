import React from "react";

const ButtonTertiary = ({text, textColor}) => {
    return(
        <button className={`flex justify-center text-base font-medium text-${textColor} py-[8px] px-[10px] cursor-pointer rounded-full hover:opacity-80 duration-300`}>{text}</button>
    )
}

export default ButtonTertiary;