import React, {Dispatch, FC, SetStateAction, useContext} from 'react';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonModal,
  IonRange,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar
} from "@ionic/react";
import SettingsContext from "../../context/Settings.context";

const SettingsModal: FC<{ isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }> = ({isOpen, setIsOpen}) => {
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
    setDarkMode
  } = useContext(SettingsContext)
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              Work Time: {workTime} Minutes <br/>
              <IonRange value={workTime} snaps={true} step={5} min={5} max={60} pin={true}
                        pinFormatter={(value: number) => `${value} Min.`}
                        onIonChange={(e) => setWorkTime(e.detail.value as number)}/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              Short Break Time: {shortBreakTime} Minutes <br/>
              <IonRange value={shortBreakTime} pin={true} snaps={true} step={5} min={5} max={30}
                        pinFormatter={(value: number) => `${value} Min.`}
                        onIonChange={(e) => setShortBreakTime(e.detail.value as number)}/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              Long Break Time: {longBreakTime} Minutes <br/>
              <IonRange value={longBreakTime} ticks={true} pin={true} snaps={true} step={5} min={5} max={60}
                        pinFormatter={(value: number) => `${value} Min.`}
                        onIonChange={(e) => setLongBreakTime(e.detail.value as number)}/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              Rounds: {rounds}
              <IonRange value={rounds} pin={true} snaps={true} step={1} min={1} max={10}
                        pinFormatter={(value: number) => `${value} Rounds`}
                        onIonChange={(e) => setRounds(e.detail.value as number)}/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonToggle disabled onIonChange={() => setDarkMode(!darkMode)} checked={darkMode}>Dark Mode</IonToggle>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>

  );
};

export default SettingsModal;
