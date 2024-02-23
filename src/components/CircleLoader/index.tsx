import styles from './CircleLoader.module.scss';
import {FC, useEffect} from "react";

const CircleLoader: FC<{progress: number}> = ({progress}) => {

  useEffect(() => {
    const progressElem = document.getElementById("progress");
    let radius = parseInt(progressElem.getAttribute('r'));
    //circumference of a circle = 2πr;
    let circumference = radius * 2 * Math.PI;
    progressElem.style.strokeDasharray = `${circumference}px`;
    progressElem.style.strokeDashoffset = `${circumference - (progress / 100) * circumference}px`;
  }, [progress]);

  return (
    <svg width="250" height="250">
      <circle r="100" cx="125" cy="125" className={styles.circle}/>
      <circle r="100" cx="125" cy="125" id={'progress'} className={styles.progress}/>
    </svg>
  );
};

export default CircleLoader;
