import React, { useContext, useEffect, useState } from 'react';
import BackgroundColorLoader, { TIMER_BACKGROUND_COLOR } from "../BackgroundColorLoader";
import SettingsContext from "../../context/Settings.context";
import { IonButton } from "@ionic/react";

enum TIMER_TYPE {
  SHORT_BREAK = 'SHORT_BREAK',
  LONG_BREAK = 'LONG_BREAK',
  WORK = 'WORK',
}

const Timer = () => {
  const { workTime, shortBreakTime, longBreakTime, rounds } = useContext(SettingsContext);
  const [minutes, setMinutes] = useState(workTime);
  const [seconds, setSeconds] = useState(0);
  const [roundsLeft, setRoundsLeft] = useState(rounds);
  const [timerType, setTimerType] = useState<TIMER_TYPE>(TIMER_TYPE.WORK);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  // Consolidated useEffect for timer logic
  useEffect(() => {
    const handleTimerExpiration = () => {
      if (seconds === 0) {
        if (minutes === 0) {
          updateRoundsAndTimerType();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    };

    let interval;
    if (isRunning) {
      interval = setInterval(handleTimerExpiration, 1000);
    }

    return () => clearInterval(interval); // Clear interval on component unmount or when isRunning changes
  }, [isRunning, seconds, minutes]);

  // UseEffect for reset when settings change, kept as is but can add logic here as needed.
  useEffect(() => {
    reset();
  }, [workTime, shortBreakTime, longBreakTime, rounds]);

  const updateRoundsAndTimerType = () => {
    let nextType = timerType;
    let nextRoundsLeft = roundsLeft;

    switch (timerType) {
      case TIMER_TYPE.WORK:
        nextType = roundsLeft > 1 ? TIMER_TYPE.SHORT_BREAK : TIMER_TYPE.LONG_BREAK;
        break;
      case TIMER_TYPE.SHORT_BREAK:
        nextType = TIMER_TYPE.WORK;
        nextRoundsLeft -= 1;
        break;
      case TIMER_TYPE.LONG_BREAK:
        nextRoundsLeft -= 1;
        break;
    }

    setTimerType(nextType);
    setRoundsLeft(nextRoundsLeft);
    resetTimer(nextType);
  };

  const resetTimer = (type:TIMER_TYPE) => {
    switch (type) {
      case TIMER_TYPE.WORK: setMinutes(workTime); break;
      case TIMER_TYPE.SHORT_BREAK: setMinutes(shortBreakTime); break;
      case TIMER_TYPE.LONG_BREAK: setMinutes(longBreakTime); break;
    }
    setSeconds(0);
  };

  const reset = () => {
    setIsRunning(false);
    setTimerType(TIMER_TYPE.WORK);
    setRoundsLeft(rounds);
    resetTimer(TIMER_TYPE.WORK);
  };

  useEffect(() => {
    const totalTimeInSeconds = (timerType === TIMER_TYPE.WORK ? workTime : timerType === TIMER_TYPE.SHORT_BREAK ? shortBreakTime : longBreakTime) * 60;
    setProgress((100 / totalTimeInSeconds) * (minutes * 60 + seconds));
  }, [seconds, minutes, timerType, workTime, shortBreakTime, longBreakTime]);

  const getTimerColor = () => {
    switch (timerType) {
      case TIMER_TYPE.WORK: return TIMER_BACKGROUND_COLOR.RED;
      case TIMER_TYPE.SHORT_BREAK: return TIMER_BACKGROUND_COLOR.VIOLET;
      case TIMER_TYPE.LONG_BREAK: return TIMER_BACKGROUND_COLOR.BLUE;
      default: return TIMER_BACKGROUND_COLOR.RED;
    }
  };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();

  return (
      <BackgroundColorLoader backgroundColor={getTimerColor()} progress={progress}>
        <div>Rounds left: {roundsLeft}</div>
        <div>{timerMinutes}:{timerSeconds}</div>
        <div>Type: {timerType}</div>
        <IonButton color="secondary" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Play'}
        </IonButton>
        <IonButton color="secondary" onClick={reset}>Reset</IonButton>
      </BackgroundColorLoader>
  );
};

export default Timer;
