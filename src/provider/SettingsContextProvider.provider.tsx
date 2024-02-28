import { FC, PropsWithChildren, useEffect, useState } from 'react';
import SettingsContext from '../context/Settings.context';

const SettingsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [workTime, setWorkTime] = useState<number>(1);
  const [shortBreakTime, setShortBreakTime] = useState<number>(1);
  const [longBreakTime, setLongBreakTime] = useState<number>(2);
  const [rounds, setRounds] = useState<number>(4);
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
