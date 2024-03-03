import React, { FC, useContext } from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { pauseOutline, playOutline, refreshOutline, settingsOutline } from 'ionicons/icons';
import SettingsContext from '../../../context/Settings.context';

const TimerControls: FC<{
  disabled: boolean;
  reset: () => void;
  openSettingsModal: () => void;
}> = ({ disabled, reset, openSettingsModal }) => {
  const { timerIsRunning, setTimerIsRunning } = useContext(SettingsContext);

  return (
    <div>
      <IonButton disabled={disabled} color="secondary" onClick={reset}>
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

      <IonButton color="secondary" onClick={openSettingsModal}>
        <span className="sr-only">settings</span>
        <IonIcon aria-hidden="true" icon={settingsOutline} />
      </IonButton>
    </div>
  );
};

export default TimerControls;
