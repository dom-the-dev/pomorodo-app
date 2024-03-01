import { FC, PropsWithChildren, useEffect, useState } from 'react';
import SettingsContext from '../context/Settings.context';

const IS_DEV = import.meta.env.VITE_ENV === 'DEV';

const SettingsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [workTime, setWorkTime] = useState<number>(IS_DEV ? 1 : 30);
  const [shortBreakTime, setShortBreakTime] = useState<number>(IS_DEV ? 1 : 5);
  const [longBreakTime, setLongBreakTime] = useState<number>(IS_DEV ? 1 : 25);
  const [rounds, setRounds] = useState<number>(IS_DEV ? 1 : 3);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [timerIsRunning, setTimerIsRunning] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        setDarkMode,
        rounds,
        setRounds,
        workTime,
        shortBreakTime,
        longBreakTime,
        setWorkTime,
        setShortBreakTime,
        setLongBreakTime,
        timerIsRunning,
        setTimerIsRunning
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
