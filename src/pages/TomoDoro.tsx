import {IonButton, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {FC, useState} from "react";
import Timer from "../components/Timer";
import settingsModal from "../components/SettingsModal";
import SettingsModal from "../components/SettingsModal";

const TomoDoro: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TomoDoro App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Timer/>
      </IonContent>
    </IonPage>
  );
};

export default TomoDoro;
