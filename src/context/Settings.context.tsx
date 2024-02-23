
import {createContext, Dispatch, SetStateAction} from 'react';

const SettingsContext = createContext<{
  rounds: number;
  setRounds: Dispatch<SetStateAction<number>>
  workTime: number;
  setWorkTime: Dispatch<SetStateAction<number>>
  shortBreakTime: number;
  setShortBreakTime: Dispatch<SetStateAction<number>>
  longBreakTime: number;
  setLongBreakTime:  Dispatch<SetStateAction<number>>
}>({
  rounds: 3,
  setRounds: null,
  workTime: 25,
  setWorkTime: null,
  shortBreakTime: 5,
  setShortBreakTime: null,
  longBreakTime: 30,
  setLongBreakTime: null
});

export default SettingsContext;
