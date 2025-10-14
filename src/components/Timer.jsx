import React, { useEffect, useRef } from "react";

const Timer = ({ time, running, onTimeUpdate }) => {
    const timer = useRef()

    useEffect(() => {
        if (running) {
            timer.current = setInterval(() => {
                onTimeUpdate(prev => prev + 1)
            }, 1000)
        } else {
            clearInterval(timer.current)
        }
        return () => clearInterval(timer.current)
    }, [running, onTimeUpdate])

    return(
        <>
            <h2 className={`font-bold ${running ? 'text-green' : ''}`}>{format(time)}</h2>
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