import React, { Dispatch, FC, FormEvent, SetStateAction, useContext, useState } from 'react';
import {
  IonAlert,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonRange,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import SettingsContext from '../../../context/Settings.context';

const SettingsModal: FC<{ isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }> = ({
  isOpen,
  setIsOpen
}) => {
  const {
    rounds,
    setRounds,
    workTime,
    setWorkTime,
    longBreakTime,
    setLongBreakTime,
    shortBreakTime,
    setShortBreakTime,
    darkMode,
    setDarkMode,
    timerIsRunning
  } = useContext(SettingsContext);

  const [localWorkTime, setLocalWorkTime] = useState<number>(workTime);
  const [localShortBreakTime, setLocalShortBreakTime] = useState<number>(shortBreakTime);
  const [localLongBreakTime, setLocalLongBreakTime] = useState<number>(longBreakTime);
  const [localRounds, setLocalRounds] = useState<number>(rounds);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (timerIsRunning) {
      setShowAlert(true);
    } else {
      saveSettings();
      setIsOpen(false);
    }
  };

  const saveSettings = () => {
    setRounds(localRounds);
    setWorkTime(localWorkTime);
    setShortBreakTime(localShortBreakTime);
    setLongBreakTime(localLongBreakTime);
  };

  return (
    <>
      <IonAlert
        isOpen={showAlert}
        header="Timer is running"
        subHeader="If you change your settings the timer will be reseted."
        message="Are you sure you want to change your settings?"
        onDidDismiss={() => setShowAlert(false)}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              setIsOpen(false);
            }
          },
          {
            text: 'Save',
            role: 'confirm',
            handler: () => {
              saveSettings();
              setIsOpen(false);
            }
          }
        ]}
      />
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setIsOpen(false)}>Cancel</IonButton>
            </IonButtons>
            <IonTitle>Settings</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={handleSubmit}>Save</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="light">
          <IonList inset={true}>
            <IonItem>Work Time in Minutes: {localWorkTime}</IonItem>
            <IonItem>
              <IonRange
                color={'secondary'}
                value={localWorkTime}
                snaps={true}
                step={5}
                min={5}
                max={60}
                pin={true}
                pinFormatter={(value: number) => value}
                onIonChange={(e) => setLocalWorkTime(e.detail.value as number)}
              />
            </IonItem>
          </IonList>

          <IonList inset={true}>
            <IonItem>
              <IonLabel>Short Break Time in Minutes: {localShortBreakTime}</IonLabel>
            </IonItem>
            <IonItem>
              <IonRange
                color={'secondary'}
                value={localShortBreakTime}
                pin={true}
                snaps={true}
                step={5}
                min={5}
                max={30}
                pinFormatter={(value: number) => value}
                onIonChange={(e) => setLocalShortBreakTime(e.detail.value as number)}
              />
            </IonItem>
          </IonList>

          <IonList inset={true}>
            <IonItem>
              <IonLabel>Long Break Time in Minutes: {localLongBreakTime}</IonLabel>
            </IonItem>
            <IonItem>
              <IonRange
                color={'secondary'}
                value={localLongBreakTime}
                ticks={true}
                pin={true}
                snaps={true}
                step={5}
                min={5}
                max={60}
                pinFormatter={(value: number) => value}
                onIonChange={(e) => setLocalLongBreakTime(e.detail.value as number)}
              />
            </IonItem>
          </IonList>

          <IonList inset={true}>
            <IonItem>
              <IonLabel>Rounds: {localRounds}</IonLabel>
            </IonItem>
            <IonItem>
              <IonRange
                color={'secondary'}
                value={localRounds}
                pin={true}
                snaps={true}
                step={1}
                min={1}
                ticks={true}
                max={10}
                pinFormatter={(value: number) => value}
                onIonChange={(e) => setLocalRounds(e.detail.value as number)}
              />
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};

export default SettingsModal;
