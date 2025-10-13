import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);

    const timer = useRef()

    useEffect(() => {
        if (running) {
            timer.current = setInterval(() => {
                setTime(pre => pre + 1)
            }, 1000)
        }
        return () => clearInterval(timer.current)
    }, [running])

    return(
        <>
            <h2 className="font-bold">{format(time)}</h2>
        </>
    )
}

export default Timer;

const format = (time) => {
    let hours = Math.floor(time/60/60%24)
    let minutes = Math.floor(time/60%60)
    let seconds = Math.floor(time%60)

    hours = hours < 10 ? '0' + hours:hours
    minutes = minutes < 10 ? '0' + minutes:minutes
    seconds = seconds < 10 ? '0' + seconds:seconds

    return hours + "h " + minutes + "m " + seconds + "s"
}