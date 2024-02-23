import React, {useContext, useEffect, useState} from 'react';
import BackgroundColorLoader, {TIMER_BACKGROUND_COLOR} from "../BackgroundColorLoader";
import SettingsContext from "../../context/Settings.context";
import {IonButton, IonCol, IonGrid, IonIcon, IonRow} from "@ionic/react";
import {pauseOutline, playOutline, refreshOutline} from "ionicons/icons";
import CircleLoader from "../CircleLoader";
import styles from './Timer.module.scss';

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

    let interval: NodeJS.Timeout;
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

  const resetTimer = (type: TIMER_TYPE) => {
    switch (type) {
      case TIMER_TYPE.WORK:
        setMinutes(workTime);
        break;
      case TIMER_TYPE.SHORT_BREAK:
        setMinutes(shortBreakTime);
        break;
      case TIMER_TYPE.LONG_BREAK:
        setMinutes(longBreakTime);
        break;
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
      case TIMER_TYPE.WORK:
        return TIMER_BACKGROUND_COLOR.RED;
      case TIMER_TYPE.SHORT_BREAK:
        return TIMER_BACKGROUND_COLOR.VIOLET;
      case TIMER_TYPE.LONG_BREAK:
        return TIMER_BACKGROUND_COLOR.BLUE;
      default:
        return TIMER_BACKGROUND_COLOR.RED;
    }
  };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{timerType}</h1>

      <div className={styles.timeWrapper}>
        <div className={styles.circle}>
          <CircleLoader progress={progress}/>
        </div>

        <div className={styles.time}>
          <h1>
            {timerMinutes}:{timerSeconds}
          </h1>
        </div>
      </div>

      <div>Rounds left: {roundsLeft}</div>
      <div className={styles.buttons}>
        <IonButton shape={'round'} color="secondary" onClick={() => setIsRunning(!isRunning)}>
          {isRunning
            ? <IonIcon aria-hidden="true" icon={pauseOutline}/>
            : <IonIcon aria-hidden="true" icon={playOutline}/>
          }
        </IonButton>
        <IonButton shape={'round'} color="secondary" onClick={reset}>Reset<IonIcon aria-hidden="true"
                                                                                   icon={refreshOutline}/></IonButton>
      </div>
    </div>
  );
};

export default Timer;
