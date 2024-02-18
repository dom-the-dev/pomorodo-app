import React, {useState, useEffect} from 'react';

// const WORK_TIME = 0;
// const SHORT_BREAK_TIME = 5;
// const LONG_BREAK_TIME = 25;
// const SECONDS = 10;

enum TIMER_TYPE {
  SHORT_BREAK = 'SHORT_BREAK',
  LONG_BREAK = 'LONG_BREAK',
  WORK = 'WORK',
}

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(4);
  const [rounds, setRounds] = useState(3);
  const [timerType, setTimerType] = useState<TIMER_TYPE>(TIMER_TYPE.WORK);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      handleSeconds()
    }, 1000);
  }, [seconds]);


  const handleMinutes = () => {
    if (minutes !== 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
    } else {
      handleRounds()
    }
  }

  const handleRounds = () => {
    let thisRounds = rounds
    if (thisRounds !== 0 && timerType === TIMER_TYPE.SHORT_BREAK) {
      setRounds(thisRounds - 1)
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
      setMinutes(0);
      setSeconds(3); // set this to 59
    }

    if (timerType === TIMER_TYPE.SHORT_BREAK) {
      setMinutes(0);
      setSeconds(4); // set this to 59
    }
    if (timerType === TIMER_TYPE.LONG_BREAK) {
      setSeconds(8); // set this to 59
      setMinutes(0);
    }
  }

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      <div>Rounds left: {rounds}</div>
      {/*<div>Runden übrig: {rounds}</div>*/}
      <div>
        {timerMinutes}:{timerSeconds}
      </div>
      <div>{timerType && <div>Type: {timerType}</div>}</div>
    </div>
  );
};

export default Timer;
