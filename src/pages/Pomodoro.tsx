import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {FC} from "react";
import Timer from "../components/Timer";

const Pomodoro: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pomodoro App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Timer/>
      </IonContent>
    </IonPage>
  );
};

export default Pomodoro;
