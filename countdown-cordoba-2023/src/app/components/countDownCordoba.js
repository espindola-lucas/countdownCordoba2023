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

    const showCountdown = currentDate < targetDate;

    return (
        <>
            {showCountdown ? (
                <div className='mt-40'>
                    <h1 className='flex justify-center text-5xl mb-2'>Cordoba</h1>
                    <div className='flex flex-col items-center justify-center text-2xl font-light'>
                        <p>{countdown.days} días</p>
                        <p>{countdown.hours} horas</p>
                        <p>{countdown.minutes} minutos</p>
                        <p>{countdown.seconds} segundos</p>
                    </div>
                </div>
            ) : (
                <div className='mt-40 text-5xl text-center'>
                    <h1>Llego el dia!</h1>
                    {/* Puedes agregar aquí cualquier contenido adicional que desees mostrar */}
                </div>
            )}
        </>
    );
};

export default Countdown;