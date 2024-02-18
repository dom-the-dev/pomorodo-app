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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <Timer/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Pomodoro;
