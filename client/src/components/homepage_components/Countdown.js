import React, { useState, useEffect, useRef } from 'react';

const Countdown = () => {
  const [timerDays, setTimerDays] = useState('000');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('May 22, 2022 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });


  return (
    <div className='countdown-container'>
      <div className='text-box'>
        <h2>May 22 - 24, 2022</h2>
      </div>
      <div className='timer-container'>
        <div className='timer-box'>
          <p>{timerDays}</p>
          <p>days</p>
        </div>
        <div className='timer-box'>
          <p>{timerHours}</p>
          <p>hours</p>
        </div>
        <div className='timer-box'>
          <p>{timerMinutes}</p>
          <p>minutes</p>
        </div>
        <div className='timer-box'>
          <p>{timerSeconds}</p>
          <p>seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Countdown
