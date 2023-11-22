// components/Countdown.js
import { useState, useEffect } from 'react';

const Countdown = () => {
    const targetDate = new Date('2023-12-16T23:59:59');
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const [countdown, setCountdown] = useState({
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedCurrentDate = new Date();
            const updatedTimeDifference = targetDate - updatedCurrentDate;

        setCountdown({
            days: Math.floor(updatedTimeDifference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((updatedTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((updatedTimeDifference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((updatedTimeDifference % (1000 * 60)) / 1000),
        });
    }, 1000);

    return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div className='mt-80'>
                <h1 className='flex justify-center text-5xl mb-2'>Cordoba</h1>
                <div className='flex justify-center text-2xl font-light'>
                    <p>{countdown.days} dias, {countdown.hours} horas, {countdown.minutes} minutos y {countdown.seconds} segundos</p>
                </div>
        </div>
    );
};

export default Countdown;