import React, { FC, useEffect, useState } from 'react';

import { TimerProps } from './Timer.types';
import classNames from './timer.module.scss';

export const Timer: FC<TimerProps> = ({
  time = 300,
  setTimeEnd,
  restartKey,
  isTimerStop,
}) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = sessionStorage.getItem('time');
    return savedTime ? parseInt(savedTime) : time;
  });

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeEnd(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          sessionStorage.clear();
          return time;
        }
        const newTime = prevTime - 1;
        sessionStorage.setItem('time', `${newTime}`);

        return newTime;
      });
    }, 1000);

    if (isTimerStop) {
      clearInterval(timer);
      sessionStorage.removeItem('time');
      setTimeLeft(time);
    }

    return () => {
      clearInterval(timer);
    };
  }, [restartKey, isTimerStop]);

  return (
    <div className={classNames.timer}>
      <div>
        {Math.floor(timeLeft / 60) < 10
          ? `0${Math.floor(timeLeft / 60)}`
          : Math.floor(timeLeft / 60)}
      </div>
      <div>:</div>
      <div>{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</div>
    </div>
  );
};
