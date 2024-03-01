import { createContext, Dispatch, SetStateAction } from 'react';

const SettingsContext = createContext<{
  rounds: number;
  setRounds: Dispatch<SetStateAction<number>>;
  workTime: number;
  setWorkTime: Dispatch<SetStateAction<number>>;
  shortBreakTime: number;
  setShortBreakTime: Dispatch<SetStateAction<number>>;
  longBreakTime: number;
  setLongBreakTime: Dispatch<SetStateAction<number>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  timerIsRunning: boolean;
  setTimerIsRunning: Dispatch<SetStateAction<boolean>>;
}>({
  rounds: null,
  setRounds: null,
  workTime: null,
  setWorkTime: null,
  shortBreakTime: null,
  setShortBreakTime: null,
  longBreakTime: null,
  setLongBreakTime: null,
  darkMode: false,
  setDarkMode: null,
  timerIsRunning: false,
  setTimerIsRunning: null
});

export default SettingsContext;
