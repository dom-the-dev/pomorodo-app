import {IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRange, IonRow, IonTitle, IonToolbar} from '@ionic/react';
import {FC, useContext} from "react";
import SettingsContext from "../context/Settings.context";

const Settings: FC = () => {
  const {
    rounds,
    setRounds,
    workTime,
    setWorkTime,
    longBreakTime,
    setLongBreakTime,
    shortBreakTime,
    setShortBreakTime
  } = useContext(SettingsContext)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid fixed>
          <IonRow>
            <IonCol>
              Work Time: {workTime} Minutes <br/>
              <IonRange ticks={true} snaps={true} step={5} min={5} max={60} pin={true}
                        pinFormatter={(value: number) => `${value} Min.`}
                        onIonChange={(e) => setWorkTime(e.detail.value as number)}/>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              Short Break Time: {shortBreakTime} Minutes <br/>
              <IonRange pin={true} snaps={true} step={5} min={5} max={30}
                        pinFormatter={(value: number) => `${value} Min.`}
                        onIonChange={(e) => setShortBreakTime(e.detail.value as number)}/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              Long Break Time: {longBreakTime} Minutes <br/>
              <IonRange pin={true} snaps={true} step={5} min={5} max={60}
                        pinFormatter={(value: number) => `${value} Min.`}
                        onIonChange={(e) => setLongBreakTime(e.detail.value as number)}/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              Rounds: {rounds}
              <IonRange pin={true} snaps={true} step={1} min={1} max={10}
                        pinFormatter={(value: number) => `${value} Rounds`}
                        onIonChange={(e) => setRounds(e.detail.value as number)}/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
