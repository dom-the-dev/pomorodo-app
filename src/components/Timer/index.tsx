import React, { useContext, useEffect, useState } from 'react';
import SettingsContext from '../../context/Settings.context';
import { IonButton, IonIcon } from '@ionic/react';
import {
  eyeOffSharp,
  eyeSharp,
  pauseOutline,
  playOutline,
  refreshOutline,
  settingsOutline
} from 'ionicons/icons';
import CircleLoader from '../CircleLoader';
import styles from './Timer.module.scss';
import SettingsModal from '../SettingsModal';

enum TIMER_TYPE {
  SHORT_BREAK = 'SHORT_BREAK',
  LONG_BREAK = 'LONG_BREAK',
  WORK = 'WORK'
}

const Timer = () => {
  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState<boolean>(false);
  const { workTime, shortBreakTime, longBreakTime, rounds, timerIsRunning, setTimerIsRunning } =
    useContext(SettingsContext);
  const [minutes, setMinutes] = useState<number>(workTime);
  const [seconds, setSeconds] = useState<number>(0);
  const [roundsLeft, setRoundsLeft] = useState<number>(rounds);
  const [timerType, setTimerType] = useState<TIMER_TYPE>(TIMER_TYPE.WORK);
  const [progress, setProgress] = useState<number>(0);
  const [showTime, setShowTime] = useState<boolean>(true);

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
    if (timerIsRunning) {
      interval = setInterval(handleTimerExpiration, 1000);
    }

    return () => clearInterval(interval); // Clear interval on component unmount or when isRunning changes
  }, [timerIsRunning, seconds, minutes]);

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
    setTimerIsRunning(false);
    setTimerType(TIMER_TYPE.WORK);
    setRoundsLeft(rounds);
    resetTimer(TIMER_TYPE.WORK);
  };

  useEffect(() => {
    const totalTimeInSeconds =
      (timerType === TIMER_TYPE.WORK
        ? workTime
        : timerType === TIMER_TYPE.SHORT_BREAK
          ? shortBreakTime
          : longBreakTime) * 60;
    setProgress((100 / totalTimeInSeconds) * (minutes * 60 + seconds));
  }, [seconds, minutes, timerType, workTime, shortBreakTime, longBreakTime]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();

  return (
    <div className={styles.wrapper}>
      <SettingsModal setIsOpen={setSettingsModalIsOpen} isOpen={settingsModalIsOpen} />
      <h1 className={styles.title}>{timerType}</h1>

      <div className={styles.timeWrapper}>
        <div className={styles.circle}>
          <CircleLoader progress={progress} />
        </div>

        <IonButton
          className={styles.timeButton}
          fill="clear"
          color="secondary"
          onClick={() => setShowTime(!showTime)}>
          <div className={styles.timeButtonContent}>
            <h1 className={showTime ? '' : styles.blurred}>
              {timerMinutes}:{timerSeconds}
            </h1>
            <span className="sr-only">{!showTime ? 'show time' : 'hide time'}</span>
            <IonIcon
              color={'primary'}
              aria-hidden="true"
              size="large"
              icon={!showTime ? eyeSharp : eyeOffSharp}
            />
          </div>
        </IonButton>
      </div>

      <div>Rounds left: {roundsLeft}</div>
      <div className={styles.buttons}>
        <IonButton color="secondary" onClick={reset}>
          <span className="sr-only">reset</span>
          <IonIcon aria-hidden="true" icon={refreshOutline} />
        </IonButton>
        <IonButton color="primary" onClick={() => setTimerIsRunning(!timerIsRunning)}>
          {timerIsRunning ? (
            <>
              <IonIcon aria-hidden="true" icon={pauseOutline} />
              <span className="sr-only">pause</span>
            </>
          ) : (
            <>
              <IonIcon aria-hidden="true" icon={playOutline} />
              <span className="sr-only">play</span>
            </>
          )}
        </IonButton>

        <IonButton color="secondary" onClick={() => setSettingsModalIsOpen(!settingsModalIsOpen)}>
          <span className="sr-only">settings</span>
          <IonIcon aria-hidden="true" icon={settingsOutline} />
        </IonButton>
      </div>
    </div>
  );
};

export default Timer;
