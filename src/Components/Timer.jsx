import React, { useRef, useState } from 'react'

export const Timer = () => {
    const [timer, setTimer] = useState(50);
    const increament = useRef(null);
    
    const handleStart = () => {
        increament.current = setInterval(() => {
            setTimer((timer)=> timer+1);
        }, 1000);
    }
    const handlePause = () => {
        clearInterval(increament.current);
    }
    const handleReset = () => {
        clearInterval(increament.current);
        setTimer(0);
    }

    const format = () => {
        const seconds = `0${timer % 60}`.slice(-2);
        const getMinutes = `${Math.floor(timer / 60)}`;
        const minutes = `0${getMinutes % 60}`.slice(-2);
        const hours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${hours} : ${minutes} : ${seconds}`
    }

    return (
    <div>
        {format()}

        <button onClick = {handleStart}>Start</button>
        <button onClick = {handlePause}>Pause</button>
        <button onClick = {handleReset}>Reset</button>
    </div>
  )
}
