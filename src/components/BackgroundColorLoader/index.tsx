import React, {FC, PropsWithChildren} from 'react';
import styles from './BackgroundColorLoader.module.scss';

export enum TIMER_BACKGROUND_COLOR {
  BLUE = 'BLUE',
  RED = 'RED',
  VIOLET = 'VIOLET',
}

const BackgroundColorLoader: FC<PropsWithChildren<{progress: number, backgroundColor: TIMER_BACKGROUND_COLOR}>> = ({progress, children, backgroundColor}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.progress} ${styles[backgroundColor]}`} style={{height: `${progress}%`}}/>
      {children}
    </div>
  );
};

export default BackgroundColorLoader;
