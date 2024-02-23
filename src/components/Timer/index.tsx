import React, {useContext, useEffect, useState} from 'react';
import BackgroundColorLoader, {TIMER_BACKGROUND_COLOR} from "../BackgroundColorLoader";
import SettingsContext from "../../context/Settings.context";


enum TIMER_TYPE {
  SHORT_BREAK = 'SHORT_BREAK',
  LONG_BREAK = 'LONG_BREAK',
  WORK = 'WORK',
}

const Timer = () => {
  const {workTime, shortBreakTime, longBreakTime, rounds} = useContext(SettingsContext);
  const [minutes, setMinutes] = useState(workTime);
  const [seconds, setSeconds] = useState(0);
  const [roundsLeft, setRoundsLeft] = useState(rounds);
  const [timerType, setTimerType] = useState<TIMER_TYPE>(TIMER_TYPE.WORK);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (isRunning) {
        handleSeconds()
      }
    }, 1000);
  }, [seconds, isRunning]);

  useEffect(() => {
    reset();
  }, [workTime, shortBreakTime, longBreakTime, rounds]);


  const handleMinutes = () => {
    if (minutes !== 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
    } else {
      handleRounds()
    }
  }

  const handleRounds = () => {
    let thisRounds = roundsLeft
    if (thisRounds !== 0 && timerType === TIMER_TYPE.SHORT_BREAK) {
      setRoundsLeft(thisRounds - 1)
    }

    if (thisRounds !== 0 && timerType !== TIMER_TYPE.LONG_BREAK) {
      handleTimer(thisRounds);
    }
  }

  const handleTimer = (rounds: number) => {
    let thisTimerType = timerType;

    if (rounds > 1) {
      if (thisTimerType === TIMER_TYPE.WORK) {
        thisTimerType = TIMER_TYPE.SHORT_BREAK;
      } else if (thisTimerType === TIMER_TYPE.SHORT_BREAK) {
        thisTimerType = TIMER_TYPE.WORK;
      }
    } else {
      thisTimerType = TIMER_TYPE.LONG_BREAK;
    }

    setTimerType(thisTimerType);
    resetTimer(thisTimerType);
  }

  const handleSeconds = () => {
    if (seconds === 0) {
      handleMinutes();
    } else {
      setSeconds(seconds - 1);
    }
  }

  const resetTimer = (timerType: TIMER_TYPE) => {
    if (timerType === TIMER_TYPE.WORK) {
      setMinutes(workTime - 1);
    }

    if (timerType === TIMER_TYPE.SHORT_BREAK) {
      setMinutes(shortBreakTime - 1);
    }
    if (timerType === TIMER_TYPE.LONG_BREAK) {
      setMinutes(longBreakTime - 1);
    }
    setSeconds(59);
  }

  const reset = () => {
    setIsRunning(false);
    setMinutes(workTime);
    setSeconds(0);
    setRoundsLeft(rounds);
    setTimerType(TIMER_TYPE.WORK);
  }

  useEffect(() => {
    setProgress(getProgress)
  }, [seconds]);

  const getProgress = () => {
    let time = 0;
    switch (timerType) {
      case TIMER_TYPE.WORK: time = workTime; break;
      case TIMER_TYPE.SHORT_BREAK: time = shortBreakTime; break;
      case TIMER_TYPE.LONG_BREAK: time = longBreakTime; break;
      default: time = workTime;
    }

    let timeInSeconds = time * 60 // 100%
    return (100 / timeInSeconds) * (minutes * 60 + seconds)
  }

  const getTimerColor = () => {
    switch (timerType) {
      case TIMER_TYPE.WORK: return TIMER_BACKGROUND_COLOR.RED
      case TIMER_TYPE.SHORT_BREAK: return TIMER_BACKGROUND_COLOR.VIOLET
      case TIMER_TYPE.LONG_BREAK: return TIMER_BACKGROUND_COLOR.BLUE
    }
  }

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <BackgroundColorLoader backgroundColor={getTimerColor()} progress={progress}>
      <div>Rounds left: {roundsLeft}</div>
      {/*<div>Runden übrig: {rounds}</div>*/}
      <div>
        {timerMinutes}:{timerSeconds}
      </div>
      <div>{timerType && <div>Type: {timerType}</div>}</div>

      {isRunning ?
        <button onClick={() => setIsRunning(false)}>Pause</button>
        :
        <button onClick={() => setIsRunning(true)}>Play</button>
      }
      <button onClick={reset}>Reset</button>
    </BackgroundColorLoader>
  );
};

export default Timer;
