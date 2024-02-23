import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRange,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar
} from '@ionic/react';
import {FC, useContext} from "react";
import SettingsContext from "../context/Settings.context";

const InfoPage: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid fixed>
          <IonRow>
            <IonCol>
              App by Dom & Niklas
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              Todo
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default InfoPage;
