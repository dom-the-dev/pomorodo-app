import React, { Dispatch, FC, FormEvent, SetStateAction, useContext, useState } from 'react';
import {
  IonAlert,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
  useIonPicker
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
  const [present] = useIonPicker();
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

  const openPicker = async (
    setState: Dispatch<SetStateAction<number>>,
    values: any[],
    selectedValue: number
  ) => {
    present({
      columns: [
        {
          selectedIndex: values.indexOf(selectedValue),
          name: 'languages',
          options: values.map((value) => ({
            text: `${value}`,
            value: value
          }))
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            setState(value.languages.value);
          }
        }
      ]
    });
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
            <IonItem
              onClick={() =>
                openPicker(
                  setLocalWorkTime,
                  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
                  localWorkTime
                )
              }>
              <IonLabel>Work Time in Minutes:</IonLabel>
              <IonBadge slot="end">{localWorkTime}</IonBadge>
            </IonItem>
            <IonItem
              onClick={() =>
                openPicker(setShortBreakTime, [5, 10, 15, 20, 25, 30], localShortBreakTime)
              }>
              <IonLabel>Short Break Time in Minutes</IonLabel>
              <IonBadge slot="end">{localShortBreakTime}</IonBadge>
            </IonItem>
            <IonItem
              onClick={() =>
                openPicker(
                  setLongBreakTime,
                  [5, 10, 15, 20, 25, 30, 35, 40, 50, 55, 60],
                  localLongBreakTime
                )
              }>
              <IonLabel>Long Break Time in Minutes</IonLabel>
              <IonBadge slot="end">{localLongBreakTime}</IonBadge>
            </IonItem>
            <IonItem
              onClick={() =>
                openPicker(setLocalRounds, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], localRounds)
              }>
              <IonLabel>Rounds</IonLabel>
              <IonBadge slot="end">{localRounds}</IonBadge>
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};

export default SettingsModal;
