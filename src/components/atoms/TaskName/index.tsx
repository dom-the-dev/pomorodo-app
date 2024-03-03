import React, { FC, useEffect, useState } from 'react';
import { TIMER_TYPE } from '../../organisms/Timer';

const TaskName: FC<{ timerType: TIMER_TYPE }> = ({ timerType }) => {
  const [taskName, setTaskName] = useState<string>('');

  useEffect(() => {
    switch (timerType) {
      case TIMER_TYPE.WORK:
        setTaskName('Focus');
        break;
      case TIMER_TYPE.SHORT_BREAK:
        setTaskName('Short Break');
        break;
      case TIMER_TYPE.LONG_BREAK:
        setTaskName('Long Break');
        break;
      case TIMER_TYPE.FINISHED:
        setTaskName('Finished');
        break;
    }
  }, [timerType]);

  return <h1>{taskName}</h1>;
};

export default TaskName;
