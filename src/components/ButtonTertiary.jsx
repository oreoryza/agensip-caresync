import React from "react";

const ButtonTertiary = ({text="text", style}) => {
    return(
        <button className={`flex justify-center text-base font-medium ${style} cursor-pointer rounded-full hover:opacity-80 duration-300`}>{text}</button>
    )
}

export default ButtonTertiary;