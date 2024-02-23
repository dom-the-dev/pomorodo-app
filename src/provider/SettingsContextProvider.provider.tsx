import {FC, PropsWithChildren, useState} from 'react';
import SettingsContext from "../context/Settings.context";


const SettingsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [workTime, setWorkTime] = useState<number>(25);
  const [shortBreakTime, setShortBreakTime] = useState<number>(5);
  const [longBreakTime, setLongBreakTime] = useState<number>(30);
  const [rounds, setRounds] = useState<number>(3);


  return (
    <SettingsContext.Provider
      value={{
        rounds,
        setRounds,
        workTime,
        shortBreakTime,
        longBreakTime,
        setWorkTime,
        setShortBreakTime,
        setLongBreakTime
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
